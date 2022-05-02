import { BlockClass } from '../core/Block';
import { Store } from '../core/Store';

type WithUserProps = { user: Store<AppState> };

export function withUser<P extends WithUserProps>(WrappedBlock: BlockClass) {
  return class extends WrappedBlock {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, user: window.store.getState().user });
    }

    __onChangeUserCallback = (prevState: AppState, nextState: AppState) => {
      if (JSON.stringify(prevState.user) !== JSON.stringify(nextState.user)) {
        this.setProps({ ...this.props, user: nextState.user });
      }
    }

    componentDidMount() {
      super.componentDidMount();
      window.store.on('changed', this.__onChangeUserCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      window.store.off('changed', this.__onChangeUserCallback);
    }
  };
}
