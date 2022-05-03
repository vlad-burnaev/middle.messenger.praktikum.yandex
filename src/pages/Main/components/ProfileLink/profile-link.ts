import Block from '../../../../core/Block';
import template from './profile-link.hbs';
import * as styles from './profile-link.pcss';
import { ArrowRight1 } from '../../../../../static/icons/arrow-right-1';

export interface ProfileLinkProps {
  events: {
    click: () => void
  }
}

export class ProfileLink extends Block {
  constructor(props: ProfileLinkProps) {
    super({ ...props, styles, ArrowRight1 });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
