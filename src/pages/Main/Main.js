import {mainPageTemplate} from "./Main.template";
import {mainPageData} from "./Main.data";
import {messageGroup} from "./components/DialogActive/MessageGroup/MessageGroupTemplate";
import {chat} from "./components/Chat/ChatTemplate";
import {dialogActive} from "./components/DialogActive/DialogActiveTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.MainPage');

Handlebars.registerPartial({ chat, messageGroup, message, dialogActive });

const mainPage = Handlebars.compile(mainPageTemplate);

container.innerHTML = mainPage(mainPageData);