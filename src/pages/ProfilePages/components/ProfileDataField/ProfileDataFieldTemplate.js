import Handlebars from "handlebars";

export const profileDataFieldTemplate = `
    <li class="profileDataField">
        <div class="category">{{category}}</div>
        <div class="data">{{data}}</div>
    </li>
`

export const profileDataField = Handlebars.compile(profileDataFieldTemplate);