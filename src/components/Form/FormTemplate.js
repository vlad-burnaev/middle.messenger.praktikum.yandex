export const formTemplate = `
    <form class="form">
        <ul>
            <h1 class="title">{{title}}</h1>
            {{#formfields}}
                {{> FormField}}
            {{/formfields}}
        </ul>
        <div class="actionButtons">
            {{> Button submitButton }}
            <a href={{secondaryButton.href}} class="secondaryButton">{{secondaryButton.label}}</a>
        </div>
    </form>
`