import Route from './Route';
import Block from './Block';
import { Routes } from './routes';

interface BlockConstructable<Props extends {}> {
  new(props: any): Block<Props>;
}

class Router {
  private static __instance: Router;

  private _rootQuery: string;

  private _currentRoute: Nullable<Route>;

  routes: Route[];

  history: History;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }
    Router.__instance = this;
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
  }

  use(pathname: string, block: BlockConstructable<{}>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Nullable<Window>;

      if (target) {
        this._onRoute(target.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      const pageNotFoundRoute = this.getRoute(Routes.Page404);
      if (pageNotFoundRoute) {
        this.go(Routes.Page404);
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

export default Router;
