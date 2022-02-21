import Handlebars from "handlebars";

const formFieldTemplate = `
    <li class="formField">
        <label for={{id}} class="label">{{label}}</label>
        <input type={{type}} id={{id}} required={{isRequired}} class="input" />
    </li>
`

export const FormField = Handlebars.compile(formFieldTemplate);