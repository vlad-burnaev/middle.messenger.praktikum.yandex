import {signInTemplate} from './SignIn.template';
import {signInData} from './SignInData';
import {form} from "../../components/Form/FormTemplate";
import {formField} from "../../components/Form/FormField/FormFieldTemplate";
import {button} from "../../components/Button/ButtonTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.signIn');

Handlebars.registerPartial({ form, formField, button });

const SignInPage = Handlebars.compile(signInTemplate);
container.innerHTML = SignInPage(signInData);