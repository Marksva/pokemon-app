const express = require('express');
const router = require('./routes/routes.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen('3333', () => {
    console.log('server runing');
});