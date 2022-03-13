import Handlebars from 'handlebars';
import { signUpData } from './SignUpData';
import { signUpTemplate } from './SignUp.template';
import { Form } from '../../components_deprecated/Form/FormTemplate';
import { FormField } from '../../components_deprecated/Form/FormField/FormFieldTemplate';
import { Button } from '../../components_deprecated/Button/ButtonTemplate';

const container = document.querySelector('.signUp');

Handlebars.registerPartial({ Form, FormField, Button });
const SignUpPage = Handlebars.compile(signUpTemplate);

container!.innerHTML = SignUpPage(signUpData);
