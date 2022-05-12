import Block from '../../core/Block';
import './404.scss';
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
      <main data-id="404">
        <div class="root">
          <div class="content">
            <h1 class="content__title">404</h1>
            <h2 class="content__subtitle">Не туда попали</h2>
            {{{ Link label="Назад к чатам" onClick=onGoBackLinkClick className="error__link" }}}
          </div>
        </div>
        {{{ Navbar }}}
      </main>
    `;
  }
}

export default withRouter<INewError404Props>(NewError404);
