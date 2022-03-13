import Block from '../../utils/Block';
import template from './form-field.hbs';
import styles from './form-field.pcss';

export interface FormFieldProps {
  id: string,
  label: string,
  type: string,
  isRequired: boolean
}

export class FormField extends Block {
  constructor(props: FormFieldProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
