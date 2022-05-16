import { getByTestId, getByText } from '@testing-library/dom';
import { Error404 } from '../index';
import { renderComponent } from '../../../tests/renderUtils';

describe('pages/404', () => {
  it('should render 404 page', () => {
    renderComponent({ Component: Error404, props: { router: window.router } });

    const page404Element = getByTestId(document.body, '404');

    expect(page404Element).toBeInTheDocument();
  });

  it('should render error link', () => {
    renderComponent({ Component: Error404, props: { router: window.router } });

    const linkElement = getByText(document.body, 'Назад к чатам');

    expect(linkElement).toBeInTheDocument();
  });
});
