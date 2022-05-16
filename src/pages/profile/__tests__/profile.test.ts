import { prettyDOM } from '@testing-library/dom';
import { renderComponent, step } from '../../../tests/renderUtils';
import { Profile } from '../index';

const USER_MOCK = {
  avatar: '/d66cf98f-05dc-49ba-8d2b-c1db0c5888c3/761d694b-39b5-4dee-ab15-78a2bf05461d_12.png',
  displayName: 'Джон дое',
  email: 'johndoe2@johndoe2.johndoe2',
  firstName: 'Джон',
  id: 3094,
  login: 'johndoe2',
  phone: '89137909090',
  secondName: 'Дое',
};

describe('pages/profile', () => {
  it('should logout from profile and redirect to sign-in page', async () => {
    await step('render profile page to DOM', () => {
      renderComponent({
        Component: Profile,
        props: { user: USER_MOCK, dispatch: window.store.dispatch },
        state: { appIsInited: true },
      });

      console.log(prettyDOM(document.body));
    });

    await step('click logout button', () => {});

    await step('wait logout request and redirect to sign-in page', () => {});

    await step('render sign-in page to DOM and check user', () => {});
  });
});
