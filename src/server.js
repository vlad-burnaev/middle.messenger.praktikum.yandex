const express = require('express');
const path = require('path');

const app = express();
const { DEFAULT_PORT, BUILD_PATH } = require('./utils/constants');

const port = process.env.PORT || DEFAULT_PORT;
const srcFolderNameLength = 4;
const distPath = __dirname && __dirname.slice(0, __dirname.length - srcFolderNameLength);

app.use('/', express.static(path.join(distPath, BUILD_PATH)));
app.use((err, req, res, next) => {
  console.error('Something went wrong', err);
  next(err);
});
app.get('*', (req, res) => res.sendFile(`${distPath}/dist/index.html`));
app.listen(port);
