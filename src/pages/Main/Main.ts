import Handlebars from "handlebars";
import {mainPageTemplate} from "./Main.template";
import {mainPageData} from "./Main.data";

const container = document.querySelector('.MainPage');

const MainPage = Handlebars.compile(mainPageTemplate);

container.innerHTML = MainPage(mainPageData);