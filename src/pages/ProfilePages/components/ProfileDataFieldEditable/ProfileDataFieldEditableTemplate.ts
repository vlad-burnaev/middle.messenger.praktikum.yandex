import Handlebars from "handlebars";

const profileDataFieldEditableTemplate = `
    <li class="profile_data_field_editable">
        <label for={{id}} class="category">{{category}}</label>
        <input class="data" placeholder={{placeholder}} type={{type}} id={{id}} />
    </li>
`

export const ProfileDataFieldEditable = Handlebars.compile(profileDataFieldEditableTemplate);