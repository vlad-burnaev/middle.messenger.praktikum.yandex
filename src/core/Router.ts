import Route from './Route';
import Block from './Block';
import { APP_ROOT_PATH } from '../utils/constants';

export default class Router {
  private static __instance: any;

  private routes: Route[];

  private history: History;

  private _currentRoute: Route | null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: APP_ROOT_PATH });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      // @ts-ignore
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      const pageNotFoundRoute = this.getRoute('/404');
      if (pageNotFoundRoute) {
        pageNotFoundRoute.render();
      }
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
