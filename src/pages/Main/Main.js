import {MainPageTemplate} from "./Main.template";
import {MainPageData} from "./Main.data";
import {messageGroup} from "./components/DialogActive/MessageGroup/MessageGroupTemplate";
import {chat} from "./components/Chat/ChatTemplate";
import {dialogActive} from "./components/DialogActive/DialogActiveTemplate";
import Handlebars from "handlebars";

const container = document.querySelector('.MainPage');

Handlebars.registerPartial({ chat, messageGroup, message, dialogActive });

const MainPage = Handlebars.compile(MainPageTemplate);

container.innerHTML = MainPage(MainPageData);