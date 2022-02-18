import {signInTemplate} from './SignIn.template';
import {SignInData} from './SignIn.data';
import {formTemplate} from "../../components/Form/FormTemplate";
import {formFieldTemplate} from "../../components/Form/FormField/FormFieldTemplate";
import {buttonTemplate} from "../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.signIn');

const FormField = Handlebars.compile(formFieldTemplate);
const Button = Handlebars.compile(buttonTemplate);
const Form = Handlebars.compile(formTemplate);
Handlebars.registerPartial({ Form, FormField, Button });

const SignInPage = Handlebars.compile(signInTemplate);
container.innerHTML = SignInPage(SignInData);