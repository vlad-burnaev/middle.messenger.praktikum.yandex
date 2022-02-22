export const profilePageTemplate = `
    <div class="content">
        {{> ProfileAvatar }}
        <div class="name">Иван</div>
        <ul class="info">
            {{#data}}
                {{> ProfileDataField }}
            {{/data}}
        </ul>
        <ul class="actions">
            {{#actions}}
                {{> ProfileActionButton }}
            {{/actions}}
        </ul>
        {{> ProfileGoBack goBack }}
    </div>
`;
