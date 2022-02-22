import Handlebars from 'handlebars';
import { errorData } from './404.data';
import { errorPageTemplate } from '../ErrorPageTemplate';
import { Error } from '../components/Error/ErrorTemplate';

const container = document.querySelector('.error');

Handlebars.registerPartial({ Error });
const Error404Page = Handlebars.compile(errorPageTemplate);

container.innerHTML = Error404Page(errorData);
