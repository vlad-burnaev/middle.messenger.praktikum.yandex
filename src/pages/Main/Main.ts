import Handlebars from 'handlebars';

import { mainPageTemplate } from './Main.template';
import { mainPageData } from './Main.data';
import { Chat } from './components/Chat/ChatTemplate';
import { Message } from './components/DialogActive/Message/MessageTemplate';
import { MessageGroup } from './components/DialogActive/MessageGroup/MessageGroupTemplate';
import { DialogActive } from './components/DialogActive/DialogActiveTemplate';

const container = document.querySelector('.MainPage');

Handlebars.registerPartial({
  Chat, Message, MessageGroup, DialogActive,
});
const MainPage = Handlebars.compile(mainPageTemplate);

container!.innerHTML = MainPage(mainPageData);
