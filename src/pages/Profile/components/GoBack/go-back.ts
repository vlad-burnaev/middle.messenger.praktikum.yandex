import Block from '../../../../utils/Block';
import template from './go-back.hbs';
import * as styles from './go-back.pcss';
import { ArrowLeft } from '../../../../../static/icons/arrow-left';

interface ProfileGoBackProps {
  href: string
}

export class ProfileGoBack extends Block {
  constructor(props: ProfileGoBackProps) {
    super({ ...props, styles, ArrowLeft });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
