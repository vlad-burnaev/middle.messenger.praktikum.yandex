import Handlebars from "handlebars";

const profileDataFieldTemplate = `
    <li class="profile_data_field">
        <div class="category">{{category}}</div>
        <div class="data">{{data}}</div>
    </li>
`

export const ProfileDataField = Handlebars.compile(profileDataFieldTemplate);
Handlebars.registerPartial({ ProfileDataField });
