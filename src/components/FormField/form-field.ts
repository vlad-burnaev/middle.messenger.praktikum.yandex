/* eslint-disable no-unused-vars */
import Block from '../../utils/Block';
import template from './form-field.hbs';
import styles from './form-field.pcss';
import { ValidationScheme } from '../../utils/validation.v2';

export interface FormFieldProps {
  name: string,
  label: string,
  type: string,
  validationScheme?: ValidationScheme,
  setValidationStatus?: (name:string, isValid:boolean) => void,
  errorMessage?: string,
  events?: {
    change?: (e: any) => void,
    input?: (e: any) => void,
    focus?: (e: any) => void,
    blur?: (e: any) => void,
  },
}

export class FormField extends Block {
  constructor(props: FormFieldProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
