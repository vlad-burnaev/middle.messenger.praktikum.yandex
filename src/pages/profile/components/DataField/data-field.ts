import Block from '../../../../core/Block';
import template from './data-field.hbs';
import * as styles from './data-field.pcss';

interface ProfileDataFieldProps {
  category: string,
  data: string
}

export class ProfileDataField extends Block {
  constructor(props: ProfileDataFieldProps) {
    super({ ...props, styles });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
