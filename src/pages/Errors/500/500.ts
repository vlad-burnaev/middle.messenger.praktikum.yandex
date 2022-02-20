import {errorData} from "./500.data";
import {errorPageTemplate} from "../ErrorPageTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.error');

const Error500Page = Handlebars.compile(errorPageTemplate);

container.innerHTML = Error500Page(errorData)