import { IFormInputData } from './formInput';
import ISubmitBtn from './submitBtn';

interface IFormProps {
  id: string,
  name: string,
  title?: string,
  className: string,
  inputs: string | IFormInputData[],
  submitBtn: ISubmitBtn,
  link?: string,
  readonly?: boolean,
  onFormSubmit: () => void;
}

export default IFormProps;
