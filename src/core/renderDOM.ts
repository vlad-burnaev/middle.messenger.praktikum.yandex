import Block from './Block';

export default function renderDOM(block: Block<{}>, selector = '#app') {
  const root = document.querySelector(selector);

  if (!root) {
    throw new Error('Root not found');
  }

  root!.appendChild(block.getContent());
}
