import Handlebars from "handlebars";

export const buttonTemplate = `
    <button onclick="window.location.href = 'http://localhost:3000{{href}}'" class="button">{{label}}</button>
`

export const button = Handlebars.compile(buttonTemplate);