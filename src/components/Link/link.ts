import Block from '../../core/Block';
import template from './link.hbs';
import { router } from '../../index';

interface LinkProps {
  label: string,
  path: string;
  classNames?: string[];
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          router.go(props.path);
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
