import { InputType } from '../../../components/input';

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
