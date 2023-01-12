const express = require('express');
const router = require('./routes/routes.js');
const db = require('./database/db');


const app = express();

app.use(express.json());

app.use(router);

app.listen('3333', () => {
    console.log('server runing');
});