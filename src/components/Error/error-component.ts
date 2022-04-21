import Block from '../../core/Block';
import template from './error-component.hbs';
import * as styles from './error-component.pcss';
import Link from '../Link';

interface ErrorProps {
  title: string;
  subtitle: string;
  link: {
    label: string;
    path: string
  }
}

export class ErrorComponent extends Block {
  constructor(props: ErrorProps) {
    super({ ...props, styles });
  }

  initChildren() {
    this.children.goBackLink = new Link({
      label: this.props.link.label,
      path: this.props.link.path,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
