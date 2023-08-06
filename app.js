const routes = require('./routes/routes')
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
const connectDb = require('./database/db');

const port = 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);
app.use(express.urlencoded());

connectDb();

app.listen(3000, () => {
    console.log(`Rodando na porta ${port}`);
});

