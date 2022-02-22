import Handlebars from 'handlebars';

const errorTemplate = `
    <div class="content">
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
        <a href={{link.href}} class="link">{{link.label}}</a>
    </div>
`;

export const Error = Handlebars.compile(errorTemplate);
