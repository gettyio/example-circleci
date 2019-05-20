import * as cors from 'cors';
import * as celebrate from 'celebrate';
import * as bodyParser from 'body-parser';
const express = require('express');

const {
  PORT
} = process.env;

const app = express();

// setup express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// invokable routes
app.use('/', function (req, res) {
  res.send('hello world');
});

// handler for non-mapped routes
app.use(celebrate.errors());

const listenPort = PORT || 3030;

app.listen(listenPort, function () {
  console.log(`Example app listening on port ${listenPort}!`);
});

export default app;