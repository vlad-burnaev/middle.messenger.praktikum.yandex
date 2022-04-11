# Месседжер
[Ссылка](https://github.com/vlad-burnaev/middle.messenger.praktikum.yandex/pull/3) на PR Sprint 2

## Общая информация

Статус: в разработке 👨🏻‍💻

Проект на [Netlify](https://neon-quokka-new.netlify.app/) 🖥

Макет в [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1) 🖼

## Запуск
1. `npm install`
2. `npm run build`
3. `npm run start`

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
