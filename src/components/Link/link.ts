import Block from '../../core/Block';
import template from './link.hbs';
import Router from '../../core/Router';
import { APP_ROOT_PATH } from '../../utils/constants';

interface LinkProps {
  label: string,
  path: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      label: props.label,
      events: {
        click: () => {
          const router = new Router(APP_ROOT_PATH);
          console.log(props.path);
          router.go(props.path);
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
