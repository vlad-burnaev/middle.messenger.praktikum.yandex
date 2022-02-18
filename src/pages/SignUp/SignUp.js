import {formFieldTemplate} from "../../components/Form/FormField/FormFieldTemplate";
import {buttonTemplate} from "../../components/Button/ButtonTemplate";
import {SignUpData} from "./SignUp.data";
import {signUpTemplate} from "./SignUp.template";
import {formTemplate} from "../../components/Form/FormTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.signUp');

const FormField = Handlebars.compile(formFieldTemplate);
const Button = Handlebars.compile(buttonTemplate);
const Form = Handlebars.compile(formTemplate);
Handlebars.registerPartial({ Form, FormField, Button });

const SignUpPage = Handlebars.compile(signUpTemplate);
container.innerHTML = SignUpPage(SignUpData);