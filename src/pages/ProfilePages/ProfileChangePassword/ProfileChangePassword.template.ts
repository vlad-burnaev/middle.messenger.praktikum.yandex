export const profileChangePasswordPageTemplate = `
    <div class="content">
        {{> ProfileAvatar }}
        <div class="name">Иван</div>
        <ul class="info">
            {{#data}}
                {{> ProfileDataFieldEditable }}
            {{/data}}
        </ul>
        <ul class="actions">
            {{> Button submitButton }}
        </ul>
        {{> ProfileGoBack goBack }}
    </div>
`;
