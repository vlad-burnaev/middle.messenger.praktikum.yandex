import Handlebars from "handlebars";
import {errorData} from "./404.data";
import {errorPageTemplate} from "../ErrorPageTemplate";

const container = document.querySelector('.error');

const Error404Page = Handlebars.compile(errorPageTemplate);

container.innerHTML = Error404Page(errorData)