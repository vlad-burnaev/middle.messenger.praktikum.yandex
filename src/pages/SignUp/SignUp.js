import {formField} from "../../components/Form/FormField/FormFieldTemplate";
import {button} from "../../components/Button/ButtonTemplate";
import {signUpData} from "./SignUpData";
import {signUpTemplate} from "./SignUp.template";
import {form} from "../../components/Form/FormTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.signUp');

Handlebars.registerPartial({ form, formField, button });

const SignUpPage = Handlebars.compile(signUpTemplate);
container.innerHTML = SignUpPage(signUpData);