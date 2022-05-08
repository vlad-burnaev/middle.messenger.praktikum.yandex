import Block from '../../../../core/Block';
import template from './action-button.hbs';

interface ProfileActionButtonProps {
  label: string,
  events?: {
    click: () => void
  }
  classNames?: string[]
}

export class ProfileActionButton extends Block {
  constructor(props: ProfileActionButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
