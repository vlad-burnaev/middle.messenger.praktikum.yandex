export const signUpData = {
    form: {
        title: 'Регистрация',
        formfields: [
            { id: 'email', label: 'Почта', type: 'email', isRequired: true },
            { id: 'login', label: 'Логин', type: 'text', isRequired: true },
            { id: 'first_name', label: 'Имя', type: 'text', isRequired: true },
            { id: 'second_name', label: 'Фамилия', type: 'text', isRequired: true },
            { id: 'phone', label: 'Телефон', type: 'tel', isRequired: true },
            { id: 'password', label: 'Пароль', type: 'password', isRequired: true },
            { id: 'password_2', label: 'Пароль (еще раз)', type: 'password', isRequired: true }
        ],
        submitButton: {
            label: 'Зарегистрироваться',
            href: '../SignIn/SignIn.html'
        },
        secondaryButton: {
            label: 'Войти',
            href: '../SignIn/SignIn.html'
        }
    }
}