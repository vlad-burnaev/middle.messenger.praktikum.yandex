import template from './new-message-panel.hbs';
import styles from './new-message-panel.pcss';
import { Clip } from '../../../../../../static/icons/clip';
import { ArrowRight2 } from '../../../../../../static/icons/arrow-right-2';
import Block from '../../../../../utils/Block';
import { Menu } from '../../../../../../static/icons/menu';
import { Input } from '../../../../../components/FormField/Input/input';
import { validate } from '../../../../../utils/validation.v2';

export class NewMessagePanel extends Block {
  constructor() {
    super({
      styles, Menu, ArrowRight2, Clip,
    });
  }

  isValid: boolean;

  validationHandler = (value: string) => {
    if (!value) return;
    this.isValid = validate('message', value);
  }

  initChildren() {
    this.children.input = new Input({
      id: 'message',
      type: 'text',
      events: {
        input: (e) => this.validationHandler(e.target.value),
        focus: (e) => this.validationHandler(e.target.value),
        blur: (e) => this.validationHandler(e.target.value),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
