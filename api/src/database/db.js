const { Sequelize } = require('sequelize');
const config = require('../../config');


const connection = new Sequelize(config.env.MYSQL_DATABASE, config.env.MYSQL_USER, config.env.MYSQL_PASSWORD, {
    host: config.env.MYSQL_HOST,
    port: config.env.MYSQL_PORT,
    dialect: config.env.MYSQL_DIALECT
});

connection.authenticate()
    .then(() => {
        console.log('DataBase connected');
    }).catch((err) => {
        console.log('Erro na conexão com o banco: ' + err);
    });


module.exports = connection;