import Block from '../../core/Block';
import './new-404.scss';
import Router from '../../core/Router';
import { Routes } from '../../core/routes';
import { withRouter } from '../../utils/withRouter';

interface INewError404Props {
  router: Router,
}

class NewError404 extends Block<INewError404Props> {
  protected getStateFromProps() {
    this.state = {
      onGoBackLinkClick: this.handleGoToIndexPage.bind(this),
    };
  }

  handleGoToIndexPage() {
    this.props.router.go(Routes.Index);
  }

  render() {
    return `
      <div>
        <main class="root">
          <div class="error">
            <h1 class="error__title">404</h1>
            <h2 class="error__subtitle">Не туда попали</h2>
            {{{ NewLink label="Назад к чатам" onClick=onGoBackLinkClick className="error__link" }}}
          </div>
        </main>
      </div>
    `;
  }
}

export default withRouter<INewError404Props>(NewError404);
