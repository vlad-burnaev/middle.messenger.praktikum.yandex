import Block from '../../utils/Block';
import template from './error-component.hbs';

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
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
