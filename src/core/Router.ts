import Route from './Route';
import Block from './Block';

export default class Router {
  private static __instance: any;

  private routes: Route[];

  private history: History;

  private _currentRoute: Route | null;

  private _rootPath: string;

  constructor(rootPath: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootPath = rootPath;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootPath });
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

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

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
