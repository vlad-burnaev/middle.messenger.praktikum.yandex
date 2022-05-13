const express = require('express');

const app = express();
const PORT = 1234;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Проект запущен! Чекай http://localhost:${PORT}`);
});
