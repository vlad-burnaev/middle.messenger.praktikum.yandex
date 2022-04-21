import { renderDOM } from './renderDOM';
import { isEqual } from '../utils/common';
import Block from './Block';

export default class Route {
  private _pathname: string;

  private _blockClass: typeof Block;

  private _block: Block | null

  private _props: any;

  constructor(pathname: string, view: typeof Block, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      renderDOM(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
