import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';
import { isEqual } from '../utils/isEqual';

interface BlockMeta<P = any> {
  props: P;
}
export interface BlockConstructable<Props extends {}> {
  new(props: any): Block<Props>;
}

type Events = Values<typeof Block.EVENTS>;

class Block<Props extends {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  private readonly _meta: BlockMeta;

  protected _element: Nullable<HTMLElement> = null;

  protected readonly props: Props;

  protected children: { [id: string]: Block<Props> } = {};

  eventBus: () => EventBus<Events>;

  protected state: any = {};

  protected refs: { [key: string]: HTMLElement } = {};

  public constructor(props?: Props) {
    const eventBus = new EventBus<Events>();

    this._meta = {
      props,
    };

    this.getStateFromProps(props);

    this.props = this._makePropsProxy(props || {} as Props);

    this.state = this._makePropsProxy(this.state);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT, this.props);
  }

  private _registerEvents(eventBus: EventBus<Events>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    this._element = this._createDocumentElement('div');
  }

  protected getStateFromProps(props?: Props): void {
    this.state = {};
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
  }

  private _componentDidMount(props: Props) {
    this.componentDidMount(props);
  }

  componentDidMount(props: Props) {
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    if (this._element && this._element.style.display === 'none') {
      return;
    }

    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }

    this._render();
  }

  private _componentWillUnmount() {
    this.eventBus().destroy();
    this.componentWillUnmount();
  }

  componentWillUnmount() { }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    return isEqual(oldProps, newProps);
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this._compile();

    this._removeEvents();

    const newElement = fragment.firstElementChild!;

    this._element!.replaceWith(newElement);

    this._element = newElement as HTMLElement;

    this._addEvents();
  }

  protected render(): string {
    return '';
  }

  getContent(): HTMLElement {
    // ??????, ?????????? ?????????????? CDM ???????????? ?????????? ???????????????????? ?? DOM
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
      }, 100);
    }

    return this.element!;
  }

  private _makePropsProxy(props: Props): Props {
    // ?????????? ?? ?????? ???????????????? this
    // ?????????? ???????????? ???????????? ???? ?????????????????????? ?? ???????????????? ES6+
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;

        // ?????????????????? ???????????????????? ????????????????????
        // ???????????? cloneDeep, ?? ???????? ???????????????? ?????????? ???????????????????? ?????????????????? cloneDeep ???? ??????????
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('?????? ??????????????');
      },
    }) as unknown as Props;
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  private _removeEvents() {
    const { events, selector }:
      { events: Record<string, () => void>, selector: string } = (this.props as any);

    if (!events || !this._element) {
      return;
    }

    let element = this._element;
    if (selector && element) {
      element = element.querySelector(selector) as HTMLElement;
    }

    Object.entries(events).forEach(([event, listener]) => {
      element?.removeEventListener(event, listener);
    });
  }

  private _addEvents() {
    const { events, selector }:
      { events: Record<string, () => void>, selector: string } = this.props as any;

    if (!events) {
      return;
    }

    let element = this._element;
    if (selector && element) {
      element = element.querySelector(selector) as HTMLElement;
    }

    Object.entries(events).forEach(([event, listener]) => {
      element!.addEventListener(event, listener);
    });
  }

  private _compile(): DocumentFragment {
    const fragment = document.createElement('template');

    /**
     * ???????????????? ????????????
     */
    const template = Handlebars.compile(this.render());
    fragment.innerHTML = template({
      ...this.state,
      ...this.props,
      children: this.children,
      refs: this.refs,
    });

    /**
     * ???????????????? ???????????????? ???? ????????????????????
     */
    Object.entries(this.children).forEach(([id, component]) => {
      /**
       * ???????? ???????????????? ???? id
       */
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);

      if (!stub) {
        return;
      }

      /**
       * ???????????????? ???????????????? ???? component._element
       */
      stub.replaceWith(component.getContent());
    });

    /**
     * ???????????????????? ????????????????
     */
    return fragment.content;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

export default Block;
