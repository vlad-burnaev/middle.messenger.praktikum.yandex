/* eslint-disable class-methods-use-this,no-unused-vars */
import { nanoid } from 'nanoid';
import EventBus from './EventBus';

export interface BlockClass extends Function {
  new (props: any): Block;
  componentName?: string;
}

// todo - generic props
class Block {
    static EVENTS = {
      INIT: 'init',
      FLOW_CDM: 'flow:component-did-mount',
      FLOW_CWU: 'flow:component-will-unmount',
      FLOW_CDU: 'flow:component-did-update',
      FLOW_RENDER: 'flow:render',
    };

    private id = nanoid(6);

    private _element: HTMLElement | null = null;

    protected props: any;

    protected classNames: string[];

    protected children: Record<string, Block>;

    private eventBus: () => EventBus;

    /** JSDoc
     * @param {Object} componentData
     *
     * @returns {void}
     */
    constructor(componentData: any = {}) {
      const eventBus = new EventBus();

      const { props, children, classNames } = this.getChildren(componentData);

      this.children = children;

      this.classNames = classNames;

      this.props = this._makePropsProxy(props);

      this.initChildren();

      this.eventBus = () => eventBus;

      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    /**
   * Хелпер, который проверяет, находится ли элемент в DOM дереве
   * И есть нет, триггерит событие COMPONENT_WILL_UNMOUNT
   */
    _checkInDom() {
      const elementInDOM = document.body.contains(this._element);

      if (elementInDOM) {
        setTimeout(() => this._checkInDom(), 1000);
        return;
      }

      this.eventBus().emit(Block.EVENTS.FLOW_CWU, this.props);
    }

    getChildren(componentData: any) {
      const children: any = {};
      const props: any = {};
      let classNames: any = [];

      Object.entries(componentData).map(([key, value]) => {
        if (value instanceof Block) {
          children[key] = value;
        } else if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
          children[key] = value;
        } else if (key === 'classNames') {
          classNames = value;
        } else {
          props[key] = value;
        }
      });

      return { props, children, classNames };
    }

    protected initChildren() {}

    init() {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount() {
      this._checkInDom();

      this.componentDidMount();
    }

    componentDidMount() {}

    _componentWillUnmount() {
      this.eventBus().destroy();
      this.componentWillUnmount();
    }

    componentWillUnmount() {}

    dispatchComponentDidMount() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (!response) {
        return;
      }
      this._render();
    }

    componentDidUpdate(oldProps: any, newProps: any) {
      return true;
    }

    setProps = (nextProps: any) => {
      if (!nextProps) {
        return;
      }

      Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement | null {
      return this._element;
    }

    private _removeEvents() {
      const events: Record<string, () => void> = (this.props as any).events;

      if (!events || !this._element) {
        return;
      }

      Object.entries(events).forEach(([event, handler]) => {
        this._element!.removeEventListener(event, handler);
      });
    }

    private _addEvents() {
      const events: Record<string, () => void> = (this.props as any).events;

      if (!events || !this._element) {
        return;
      }

      Object.entries(events).forEach(([event, handler]) => {
        this._element!.addEventListener(event, handler);
      });
    }

    private _addChildEvents(child) {
      if (!('events' in child.props)) return;

      if (child.props.events) {
        Object.entries(child.props.events).forEach(([event, handler]) => {
          child.getContent().addEventListener(event, handler);
        });
      }
    }

    private _render() {
      const fragment = this.render();

      const newElement = fragment.firstElementChild as HTMLElement;

      if (this._element) {
        this._removeEvents();
        this._element.replaceWith(newElement);
      }

      this._element = newElement;

      this._addEvents();
    }

    protected render(): DocumentFragment {
      return new DocumentFragment();
    }

    getContent() {
      // Хак, чтобы вызвать CDM только после добавления в DOM
      if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        setTimeout(() => {
          if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
          }
        }, 100);
      }
      return this.element!;
    }

    private _makePropsProxy(props: any) {
      const self = this;

      return new Proxy(props as unknown as object, {
        get(target: Record<string, unknown>, prop: string) {
          const value = target[prop];
          return typeof value === 'function' ? value.bind(target) : value;
        },
        set(target: Record<string, unknown>, prop: string, value: unknown) {
          const oldProps = { ...target };

          target[prop] = value;

          // Запускаем обновление компоненты
          // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
          return true;
        },
        deleteProperty() {
          throw new Error('Нет доступа');
        },
      });
    }

    private _createDocumentElement(tagName: string) {
      return document.createElement(tagName);
    }

    compile(template: (context: any) => string, context: any = {}) {
      const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

      Object.entries(this.children).forEach(([key, child]) => {
        const childrenIsArray = Array.isArray(child) && child.every((v) => v instanceof Block);
        if (childrenIsArray) {
          context[key] = child.map(({ id }) => `<div data-id="id-${id}"></div>`);
          return;
        }

        context[key] = `<div data-id="id-${child.id}"></div>`;
      });

      const htmlString = template(context);
      fragment.innerHTML = htmlString;

      Object.entries(this.children).forEach(([key, child]) => {
        const isChildrenArray = Array.isArray(child) && child.every((v) => v instanceof Block) as boolean;

        if (isChildrenArray) {
          const childrenIds = child.map(({ id }) => id);
          const stubs = childrenIds.map((id) => fragment.content.querySelector(`[data-id="id-${id}"]`)) as [];

          stubs.forEach((stub: HTMLElement) => {
            const childById = child.find((ch) => `id-${ch.id}` === stub.dataset.id);
            stub.replaceWith(childById.getContent());
            this._addChildEvents(childById);
          });
          return;
        }
        const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);
        if (!stub) {
          return;
        }
        const content = child.getContent()!;
        stub.replaceWith(content);
        this._addChildEvents(child);

        if (stub.childNodes.length) {
          content.append(...stub.childNodes);
        }

        // add classes
        if (Array.isArray(child.classNames) && child.classNames.length) {
          child.getContent().classList.add(...child.classNames);
        }
      });

      return fragment.content;
    }

    show() {
      this.getContent().style.display = 'flex';
    }

    hide() {
      this.getContent().style.display = 'none';
    }
}

export default Block;
