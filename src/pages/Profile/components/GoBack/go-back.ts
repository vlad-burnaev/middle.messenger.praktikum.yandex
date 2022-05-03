import Block from '../../../../core/Block';
import template from './go-back.hbs';
import * as styles from './go-back.pcss';
import { ArrowLeft } from '../../../../../static/icons/arrow-left';
import Router from '../../../../core/Router';
import { Routes } from '../../../../core/routes';

interface ProfileGoBackProps {
  path: Routes
}

export class ProfileGoBack extends Block {
  constructor(props: ProfileGoBackProps) {
    super({
      events: {
        click: () => {
          new Router().go(props.path);
        },
      },
      styles,
      ArrowLeft,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
