import Handlebars from "handlebars";

export const formTemplate = `
    <form class="form">
        <ul>
            <h1 class="title">{{title}}</h1>
            {{#formfields}}
                {{> formField}}
            {{/formfields}}
        </ul>
        <div class="actionButtons">
            {{> Button submitButton }}
            <a href={{secondaryButton.href}} class="secondaryButton">{{secondaryButton.label}}</a>
        </div>
    </form>
`

export const form = Handlebars.compile(formTemplate);