import Block from '../../../../utils/Block';
import template from './data-field-editable.hbs';
import styles from './data-field-editable.pcss';

interface ProfileDataFieldEditableProps {
  id: string,
  type: string,
  placeholder: string,
  category: string,
}

export class ProfileDataFieldEditable extends Block {
  constructor(props: ProfileDataFieldEditableProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
