import Handlebars from "handlebars";

export const errorTemplate = `
    <div class="content">
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
        <a href={{link.href}} class="link">{{link.label}}</a>
    </div>
`

export const error = Handlebars.compile(errorTemplate);