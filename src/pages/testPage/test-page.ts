import { withStore } from '../../utils/withStore';
import { Dispatch } from '../../core/Store';
import Block from '../../core/Block';
import { withRouter } from '../../utils/withRouter';
import Router from '../../core/Router';

interface ITestPageProps {
  router: Router,
  dispatch: Dispatch<AppState>,
  isLoading: boolean
}

class TestPage2 extends Block<ITestPageProps> {
  protected getStateFromProps() {
    this.state = {
      handleButtonClick: () => {
        console.log('button clicked');
      },
    };
  }

  render() {
    // language=hbs
    return `
      <div>
        {{{TestButton
          label='TestButtonLabel'
          onClick=handleButtonClick
        }}}
        {{{TestButton
            label='TestButtonLabel2'
            disabled=true
            onClick=handleButtonClick
        }}}
      </div>
    `;
  }
}

function mapStateToProps(state: AppState) {
  return {
    isLoading: state?.isLoading,
  };
}

export default withRouter<ITestPageProps>(
  withStore<ITestPageProps>(
    TestPage2,
    mapStateToProps,
  ),
);
