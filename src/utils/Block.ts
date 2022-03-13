/* eslint-disable class-methods-use-this,no-unused-vars */
import { nanoid } from 'nanoid';
import EventBus from './EventBus';

class Block {
    static EVENTS = {
      INIT: 'init',
      FLOW_CDM: 'flow:component-did-mount',
      FLOW_RENDER: 'flow:render',
      FLOW_CDU: 'flow:component-did-update',
    };

    private id = nanoid(6);

    private _element: HTMLElement | null = null;

    protected props: any;

    protected children: Record<string, Block>;

    private eventBus: () => EventBus;

    /** JSDoc
     * @param {Object} propsAndChildren
     *
     * @returns {void}
     */
    constructor(propsAndChildren: any = {}) {
      const eventBus = new EventBus();

      const { props, children } = this.getChildren(propsAndChildren);

      this.children = children;

      this.props = this._makePropsProxy(props);

      this.initChildren();

      this.eventBus = () => eventBus;

      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }

    getChildren(propsAndChildren: any) {
      const children: any = {};
      const props: any = {};

      Object.entries(propsAndChildren).map(([key, value]) => {
        if (value instanceof Block) {
          children[key] = value;
        } else if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
          children[key] = value;
        } else {
          props[key] = value;
        }
      });

      return { props, children };
    }

    protected initChildren() {}

    _registerEvents(eventBus: EventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
      this.componentDidMount();
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
      if (this.componentDidUpdate(oldProps, newProps)) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      }
    }

    // @ts-ignore
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

    _removeEvents() {
      const events: Record<string, () => void> = (this.props as any).events;

      if (!events || !this._element) {
        return;
      }

      Object.entries(events).forEach(([event, handler]) => {
        this._element!.removeEventListener(event, handler);
      });
    }

    _addEvents() {
      const events: Record<string, () => void> = (this.props as any).events;

      if (!events || !this._element) {
        return;
      }

      Object.entries(events).forEach(([event, handler]) => {
        this._element!.addEventListener(event, handler);
      });
    }

    _render() {
      const fragment = this.render();

      const newElement = fragment.firstElementChild as HTMLElement;

      if (this._element) {
        this._removeEvents();
        this._element.replaceWith(newElement);
      }

      this._element = newElement;

      this._addEvents();
    }

    // Переопределяется пользователем. Необходимо вернуть разметку
    protected render(): DocumentFragment {
      return new DocumentFragment();
    }

    getContent() {
      return this.element;
    }

    _makePropsProxy(props: any) {
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

    _createDocumentElement(tagName: string) {
      // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
      return document.createElement(tagName);
    }

    compile(template: (context: any) => string, context: any) {
      const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

      Object.entries(this.children).forEach(([key, child]) => {
        if (Array.isArray(child)) {
          context[key] = child.map((ch) => `<div data-id="id-${ch.id}"></div>`);
          return;
        }

        context[key] = `<div data-id="id-${child.id}"></div>`;
      });

      const htmlString = template(context);

      fragment.innerHTML = htmlString;

      Object.entries(this.children).forEach(([_, child]) => {
        const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

        if (!stub) {
          return;
        }

        stub.replaceWith(child.getContent()!);
      });

      return fragment.content;
    }
}

export default Block;
