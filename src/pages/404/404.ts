import Block from '../../utils/Block';
import template from './404.hbs';
import { error404Data } from './404.data';
import ErrorComponent from '../../components/Error';

export class Error404 extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.error = new ErrorComponent({ ...error404Data });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
