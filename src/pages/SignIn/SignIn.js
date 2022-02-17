import {signInTemplate} from './SignIn.template';
import {SignInData} from './SignIn.data';
import {FormTemplate} from "../../components/Form/Form.template";
import {FormFieldTemplate} from "../../components/Form/FormField/FormField.template";
import {ButtonTemplate} from "../../components/Button/Button.template";
import Handlebars from "handlebars";

const container = document.querySelector('.signIn');

const FormField = Handlebars.compile(FormFieldTemplate);
const Button = Handlebars.compile(ButtonTemplate);
const Form = Handlebars.compile(FormTemplate);
Handlebars.registerPartial({ Form, FormField, Button });

const SignInPage = Handlebars.compile(signInTemplate);
container.innerHTML = SignInPage(SignInData);