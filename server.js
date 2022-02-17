const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.listen(PORT, () => {
    console.log(`Проект запущен! Чекай http://localhost:${PORT}`);
});