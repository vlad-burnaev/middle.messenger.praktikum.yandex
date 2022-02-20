import Handlebars from "handlebars";
import {signInTemplate} from './SignIn.template';
import {signInData} from './SignInData';

const container = document.querySelector('.signIn');

const SignInPage = Handlebars.compile(signInTemplate);

container.innerHTML = SignInPage(signInData);