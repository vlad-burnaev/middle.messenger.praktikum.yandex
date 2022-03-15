import Block from '../../utils/Block';
import template from './error-component.hbs';
import styles from './error-component.pcss';

interface ErrorProps {
  title: string;
  subtitle: string;
  link: {
    label: string;
    href: string
  }
}

export class ErrorComponent extends Block {
  constructor(props: ErrorProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
