import { BlockConstructable } from '../core/Block';
import { defaultStoreState } from '../store';
import { Store } from '../core/Store';
import Router from '../core/Router';
import { APP_ROOT_PATH } from '../utils/constants';
import { registerComponents } from '../index';
import renderDOM from '../core/renderDOM';

type RenderBlockProps<T> = {
  Component: BlockConstructable<T>,
  props: T;
  state?: Partial<AppState>
}

export function renderComponent<T>({
  Component,
  props,
  state = defaultStoreState,
}: RenderBlockProps<T>) {
  const store = new Store<AppState>({ ...defaultStoreState, ...state });
  const router = new Router(APP_ROOT_PATH);

  registerComponents();

  window.router = router;
  window.store = store;

  document.body.innerHTML = '<div id="app"></div>';

  renderDOM(new Component(props));
}

export async function step(name: string, callback: () => void) {
  await callback();
}
