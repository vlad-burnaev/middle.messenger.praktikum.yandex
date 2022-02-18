import Handlebars from "handlebars";

export const formFieldTemplate = `
    <li class="formField">
        <label for={{id}} class="label">{{label}}</label>
        <input type={{type}} id={{id}} required={{isRequired}} class="input" />
    </li>
`

export const formField = Handlebars.compile(formFieldTemplate);