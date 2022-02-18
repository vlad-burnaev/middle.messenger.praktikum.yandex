import Handlebars from "handlebars";

export const profileDataFieldEditableTemplate = `
    <li class="profileDataFieldEditable">
        <label for={{id}} class="category">{{category}}</label>
        <input class="data" placeholder={{placeholder}} type={{type}} id={{id}} />
    </li>
`

export const profileDataFieldEditable = Handlebars.compile(profileDataFieldEditableTemplate);