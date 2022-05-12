import { BlockConstructable } from '../core/Block';
import Router from '../core/Router';

type WithRouterProps = { router: Router };

export function withRouter<T extends WithRouterProps>(Component: BlockConstructable<T>) {
  return class WithRouter extends Component {
    constructor(props: T) {
      super({ ...props, router: window.router });
    }
  };
}
