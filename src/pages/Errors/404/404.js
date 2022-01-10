import {ErrorData} from "./404.data";
import {ErrorTemplate} from "../components/Error/Error.template";
import {ErrorPageTemplate} from "../ErrorPage.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.error');

const Error = Handlebars.compile(ErrorTemplate);
const Error404Page = Handlebars.compile(ErrorPageTemplate);
Handlebars.registerPartial({ Error })

container.innerHTML = Error404Page(ErrorData)