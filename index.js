import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

import db from './db.js';

// config express
const app = express();
// app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routes);

// config template engine
const hbs = exphbs.create({
  extname: '.hbs',
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/dist'));

// connect at banco de dados
db.authenticate()
  .then(() => {
    console.log('😇 Connected successfully at database');
  })
  .catch((error) => {
    console.log('😿 Error on try connect at database, error: ', { error });
  });

app.listen(3333, function () {
  console.log('🚀 Server running at port: 3333');
});
