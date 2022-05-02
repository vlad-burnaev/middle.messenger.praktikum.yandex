import Block from '../../../../core/Block';
import template from './action-button.hbs';
import * as styles from './action-button.pcss';

interface ProfileActionButtonProps {
  label: string,
  href?: string,
  events?: {
    click: () => void
  }
}

export class ProfileActionButton extends Block {
  constructor(props: ProfileActionButtonProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
