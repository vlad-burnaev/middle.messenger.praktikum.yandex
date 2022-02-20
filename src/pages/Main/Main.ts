import Handlebars from "handlebars";
import {mainPageTemplate} from "./Main.template";
import {mainPageData} from "./Main.data";

const container = document.querySelector('.MainPage');

const mainPage = Handlebars.compile(mainPageTemplate);

container.innerHTML = mainPage(mainPageData);