import Handlebars from "handlebars";

const profileActionButtonTemplate = `
    <a href={{href}} class="action_button">{{label}}</a>
`

export const profileActionButton = Handlebars.compile(profileActionButtonTemplate);