import { getByTestId, getByText } from '@testing-library/dom';
import renderDOM from '../../../core/renderDOM';
import { Error404 } from '../index';
import Router from '../../../core/Router';
import registerComponent from '../../../core/registerComponent';
import { Link } from '../../../components/link';

describe('pages/404', () => {
  it('should render 404 page', () => {
    document.body.innerHTML = '<div id="app"></div>';

    renderDOM(new Error404({ router: new Router('#app') }));

    const page404Element = getByTestId(document.body, '404');

    expect(page404Element).toBeInTheDocument();
  });

  it('should render error link', () => {
    document.body.innerHTML = '<div id="app"></div>';
    registerComponent(Link, 'Link');

    renderDOM(new Error404({ router: new Router('#app') }));

    const linkElement = getByText(document.body, 'Назад к чатам');

    expect(linkElement).toBeInTheDocument();
  });
});
