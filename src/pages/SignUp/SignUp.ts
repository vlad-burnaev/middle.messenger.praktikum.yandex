import Handlebars from "handlebars";
import {signUpData} from "./SignUpData";
import {signUpTemplate} from "./SignUp.template";

const container = document.querySelector('.signUp');

const SignUpPage = Handlebars.compile(signUpTemplate);

container.innerHTML = SignUpPage(signUpData);