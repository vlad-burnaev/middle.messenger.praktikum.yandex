# Месседжер
[Ссылка](https://github.com/vlad-burnaev/middle.messenger.praktikum.yandex/pull/5) на PR Sprint 4
## Общая информация

Статус: в разработке 👨🏻‍💻

Проект на [Heroku](https://practicum-messenger.herokuapp.com/) 🖥

Проект на [Netlify](https://neon-quokka-new.netlify.app/) 💻

Макет в [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1) 🖼

## Запуск
1. `npm install`
2. `npm run start`

## Ход работы над проектом
### Первый спринт
- Настроена сборка проекта при помощи Parcel
- Сверстаны страницы приложения с использованием шаблонизатора Handlebars
- Настроено dev-окружение и NodeJS + Express для раздачи статических файлов на локальном компьютере
- Настроена выкладка статических файлов в Netlify

### Второй спринт
- Применен MVC подход (классы Block, EventBus)
- Применена precompile сборка Handlebars шаблонов
- Добавлена валидация форм
- JavaScript переписан на TypeScript
- Добавлены ESLint и Stylelint
- Добавлен класс для работы с запросами к серверу

### Третий спринт
- Добавлен роутинг
- Добавлена работа с API: авторизация, изменение данных пользователя, работа с чатами
- Подключен WebSocket для работы с real-time сообщениями

### Четвертый спринт
- Настроена сборка проекта при помощи Webpack
- Настроен precommit
- Проведен audit пакетов
- Проект размещен на Heroku с Docker-сборкой
