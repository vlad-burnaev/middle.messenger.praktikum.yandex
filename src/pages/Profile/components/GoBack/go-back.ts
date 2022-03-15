import Block from '../../../../utils/Block';
import template from './go-back.hbs';
import styles from './go-back.pcss';

interface ProfileGoBackProps {
  href: string
}

export class ProfileGoBack extends Block {
  constructor(props: ProfileGoBackProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
