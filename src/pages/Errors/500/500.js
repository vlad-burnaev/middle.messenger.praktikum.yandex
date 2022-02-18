import {errorData} from "./500.data";
import {error} from "../components/Error/ErrorTemplate";
import {errorPageTemplate} from "../ErrorPageTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.error');

const error500Page = Handlebars.compile(errorPageTemplate);
Handlebars.registerPartial({ error })

container.innerHTML = error500Page(errorData)