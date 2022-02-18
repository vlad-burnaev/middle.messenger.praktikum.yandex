import Handlebars from "handlebars";

export const profileActionButtonTemplate = `
    <a href={{href}} class="actionButton">{{label}}</a>
`

export const profileActionButton = Handlebars.compile(profileActionButtonTemplate);