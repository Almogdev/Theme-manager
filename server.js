const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, "css")));

var db_M = require('./database');
global.db_pool = db_M.pool;

const ThemeSite = require('/routes/themeR');
app.use('/', ThemeSite);

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});