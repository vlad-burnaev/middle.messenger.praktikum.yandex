import Block from '../../core/Block';

interface IErrorProps {
  title: string;
  subtitle: string;
  link: {
    label: string;
    path: string
  }
}

class NewErrorComponent extends Block<IErrorProps> {
  constructor(props: IErrorProps) {
    super({ ...props });
  }

  render() {
    return `
      <div class="{{styles.error}}">
        <h1 class="{{styles.error__title}}">{{title}}</h1>
        <h2 class="{{styles.error__subtitle}}">{{subtitle}}</h2>
      </div>
    `;
  }
}

export default NewErrorComponent;
