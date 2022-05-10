import Block from '../../core/Block';
import './500.scss';
import Router from '../../core/Router';
import { Routes } from '../../core/routes';
import { withRouter } from '../../utils/withRouter';

interface INewError500Props {
  router: Router,
}

class NewError500 extends Block<INewError500Props> {
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
          <div class="content">
            <h1 class="content__title">500</h1>
            <h2 class="content__subtitle">Мы уже фиксим</h2>
            {{{ Link label="Назад к чатам" onClick=onGoBackLinkClick className="error__link" }}}
          </div>
        </main>
        {{{ Navbar }}}
      </div>
    `;
  }
}

export default withRouter<INewError500Props>(NewError500);
