import {MainPageTemplate} from "./Main.template";
import {MainPageData} from "./Main.data";
import {MessageTemplate} from "./components/DialogActive/Message/Message.template";
import {MessageGroupTemplate} from "./components/DialogActive/MessageGroup/MessageGroup.template";
import {ChatTemplate} from "./components/Chat/Chat.template";
import {DialogActiveTemplate} from "./components/DialogActive/DialogActive.template";
import Handlebars from "handlebars";

const container = document.querySelector('.MainPage');

const Chat = Handlebars.compile(ChatTemplate);
const Message = Handlebars.compile(MessageTemplate);
const MessageGroup = Handlebars.compile(MessageGroupTemplate);
const DialogActive = Handlebars.compile(DialogActiveTemplate);
Handlebars.registerPartial({ Chat, MessageGroup, Message, DialogActive });

const MainPage = Handlebars.compile(MainPageTemplate);

container.innerHTML = MainPage(MainPageData);