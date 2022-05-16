import { getByTestId, getByText } from '@testing-library/dom';
import renderDOM from '../../../core/renderDOM';
import { Error404 } from '../index';
import Router from '../../../core/Router';
import { Store } from '../../../core/Store';
import { defaultStoreState } from '../../../store';
import { APP_ROOT_PATH } from '../../../utils/constants';
import { registerComponents } from '../../../index';
import { BlockConstructable } from '../../../core/Block';

type RenderBlockProps<T> = {
  Component: BlockConstructable<T>,
  props: T;
  state?: Partial<AppState>
}

function renderBlock<T>({
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

describe('pages/404', () => {
  it('should render 404 page', () => {
    renderBlock({ Component: Error404, props: { router: window.router } });

    const page404Element = getByTestId(document.body, '404');

    expect(page404Element).toBeInTheDocument();
  });

  it('should render error link', () => {
    renderBlock({ Component: Error404, props: { router: window.router } });

    const linkElement = getByText(document.body, 'Назад к чатам');

    expect(linkElement).toBeInTheDocument();
  });
});
