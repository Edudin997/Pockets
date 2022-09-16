# Pockets

Приложение для учета средств и получении простой аналитики по категориям расходов и доходов, а также ведения финансовых целей.

## Авторизация

Приложение для аутентификации пользователя применяет стандарт JSON Web Token:\
`access token` используется при запросах к серверу (например, при логине). У него есть два свойства: он многоразовый и короткоживущий.\
`refresh token` используется для обновления пары access и refresh токенов. У него тоже есть два свойства, обратные первому токену: он одноразовый и долгоживущий.

## Доступные скрипты

В директории проекта вы можете запустить:

### `npm start`

Запускает приложение в режиме разработчика.\
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть ваше приложение в браузере.

Эта страница будет обновляться каждый раз, когда вы сохраняете какие-либо изменения.\
Также вы сможете увидеть любые ошибки в консоли.

### `npm run build`

Собирает приложение для production в `build` папку.\
Собирает React в production режиме и оптимизирует сборку для лучшей производительности.

Сборка минифицирована и имена файлов включают хэши.\
Ваше приложение готово для деплоя!

Посмотрите раздел о [деплое](https://facebook.github.io/create-react-app/docs/deployment) для дополнительной информации.

### `npm run lint`

Запускает проверку кода с помощью ESLint. Выполняет проверку кода на соответствие код-стайлу и соблюдение общепринятых рекомендаций и договорённостей при написании кода.

### `npm run prettify`

Запускает форматирование кода согласно установленным ESLint и prettier правилам.

## Дополнительно

Дополнительную информацию вы можете найти в [Create React App документации](https://facebook.github.io/create-react-app/docs/getting-started).

Для изучения React откройте [React документацию](https://reactjs.org/).

### Разделение кода

[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Анализ размера сборки

[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Создание Прогрессивного Web приложения (PWA)

[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Продвинутая конфигурация

[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Деплой

[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Если `npm run build` не минифицирует сборку

[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
