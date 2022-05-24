/* eslint-disable no-restricted-globals */
import Block from './Block';
import renderDOM from './renderDOM';
import { Routes } from './routes';

interface BlockConstructable<Props extends {}> {
  new(props: any): Block<Props>;
}

interface IProps {
  rootQuery: string,
}

export default class Route {
  private _pathname;

  private _blockClass: BlockConstructable<{}>;

  private _block: Nullable<Block<{}>>;

  private _props: IProps;

  constructor(pathname: string, view: BlockConstructable<{}>, props: IProps) {
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
    return pathname === this._pathname;
  }

  // todo - придумать менее костыльный редирект
  authRedirect() {
    if ([Routes.Index, Routes.Profile].includes(location.pathname as Routes) && !window.store.getState().isAuth) {
      console.log('redirect to SignIn');
      window.router.go(Routes.SignIn);
    }

    if ([Routes.SignIn, Routes.SignUp].includes(location.pathname as Routes) && window.store.getState().isAuth) {
      console.log('redirect to Index');
      window.router.go(Routes.Index);
    }
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      renderDOM(this._block, this._props.rootQuery);
      this.authRedirect();

      return;
    }
    this._block.show();
    this.authRedirect();
  }
}
