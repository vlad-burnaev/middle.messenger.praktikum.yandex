import Block from '../../core/Block';
import template from './500.hbs';
import ErrorComponent from '../../components/Error';
import { error500Data } from './500.data';
import Navbar from '../../components/Navbar';

export class Error500 extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.error = new ErrorComponent({ ...error500Data });
    this.children.navbar = new Navbar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
