const { Sequelize } = require('sequelize');
require('dotenv').config();


const connection = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT
});

connection.authenticate()
    .then(() => {
        console.log('DataBase connected');
    }).catch((err) => {
        console.log('Erro na conexão com o banco: ' + err);
    });


module.exports = connection;