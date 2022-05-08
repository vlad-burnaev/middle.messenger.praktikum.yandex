import './error.scss';
import Block from '../../core/Block';

interface IErrorProps {
  value?: string;
}

class Error extends Block<IErrorProps> {
  protected render(): string {
    return `
      <div 
        class="error">
          {{#if value}}{{value}}{{/if}}
      </div>
    `;
  }
}

export default Error;
