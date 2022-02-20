import Handlebars from "handlebars";

const buttonTemplate = `
    <button onclick="window.location.href = 'http://localhost:3000{{href}}'" class="button">{{label}}</button>
`

export const Button = Handlebars.compile(buttonTemplate);
Handlebars.registerPartial({ Button });