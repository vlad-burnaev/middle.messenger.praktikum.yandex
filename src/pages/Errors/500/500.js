import {ErrorData} from "./500.data";
import {ErrorTemplate} from "../components/Error/Error.template";
import {ErrorPageTemplate} from "../ErrorPage.template";
import Handlebars from "handlebars";

const container = document.querySelector('.error');

const Error = Handlebars.compile(ErrorTemplate);
const Error500Page = Handlebars.compile(ErrorPageTemplate);
Handlebars.registerPartial({ Error })

container.innerHTML = Error500Page(ErrorData)