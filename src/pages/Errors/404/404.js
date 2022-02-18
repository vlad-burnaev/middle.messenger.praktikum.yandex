import {errorData} from "./404.data";
import {error} from "../components/Error/ErrorTemplate";
import {errorPageTemplate} from "../ErrorPageTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.error');

const error404Page = Handlebars.compile(errorPageTemplate);
Handlebars.registerPartial({ error })

container.innerHTML = error404Page(errorData)