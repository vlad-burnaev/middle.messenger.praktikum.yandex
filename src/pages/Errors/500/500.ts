import {errorData} from "./500.data";
import {errorPageTemplate} from "../ErrorPageTemplate";
import Handlebars from "handlebars";
import {Error} from "../components/Error/ErrorTemplate";

const container = document.querySelector('.error');

Handlebars.registerPartial({ Error })
const Error500Page = Handlebars.compile(errorPageTemplate);

container.innerHTML = Error500Page(errorData)