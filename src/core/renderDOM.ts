import Block from './Block';
import { APP_ROOT_PATH } from '../utils/constants';

export default function renderDOM(block: Block<{}>, selector = APP_ROOT_PATH) {
  const root = document.querySelector(selector);

  if (!root) {
    throw new Error('Root not found');
  }

  root!.appendChild(block.getContent());
}
