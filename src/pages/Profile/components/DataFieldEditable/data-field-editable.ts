/* eslint-disable no-unused-vars */
import Block from '../../../../utils/Block';
import template from './data-field-editable.hbs';
import * as styles from './data-field-editable.pcss';

export interface ProfileDataFieldEditableProps {
  id: string,
  type: string,
  placeholder: string,
  category: string,
  events: {
    change: (e: any) => void
  }
}

export class ProfileDataFieldEditable extends Block {
  constructor(props: ProfileDataFieldEditableProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
