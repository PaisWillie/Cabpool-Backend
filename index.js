'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes.routes);

app.listen(config.port, () =>
  console.log(`Server started on url ${config.url}`)
);
