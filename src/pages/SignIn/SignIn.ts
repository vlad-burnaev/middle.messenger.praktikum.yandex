import Handlebars from 'handlebars';
import { signInTemplate } from './SignIn.template';
import { signInData } from './SignInData';
import { Form } from '../../components/Form/FormTemplate';
import { FormField } from '../../components/Form/FormField/FormFieldTemplate';
import { Button } from '../../components/Button/ButtonTemplate';

const container = document.querySelector('.signIn');

Handlebars.registerPartial({ Form, FormField, Button });
const SignInPage = Handlebars.compile(signInTemplate);

container!.innerHTML = SignInPage(signInData);
