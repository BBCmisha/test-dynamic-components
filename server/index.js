const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = 8200;

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);

app.use(
  express.static(path.resolve(__dirname, 'components'), {
    maxAge: '365d',
  }),
);

app.listen(PORT);

console.log(`Listening on http://localhost:${PORT}`);
