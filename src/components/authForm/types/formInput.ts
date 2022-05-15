export type InputType = 'login' | 'password' | 'firstName' | 'secondName' | 'email'

interface IFormInput {
  errors: {
    dependentField?: string,
  }
}

export interface IFormInputData extends IFormInput {
  name: InputType,
}

export default IFormInput;
