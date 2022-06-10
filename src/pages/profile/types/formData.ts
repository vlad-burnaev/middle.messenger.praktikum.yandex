import { InputType } from '../../../components/authForm/types';

type IFormData = {
  name: string,
  api?: string,
  id?: string,
  label: string,
  value?: string,
  type?: InputType,
  errors?: {
    dependentField: string,
  }
};

export default IFormData;
