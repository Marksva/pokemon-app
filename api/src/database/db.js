const Sequelize = require('sequelize');


const connection = new Sequelize('pokemon', 'root', '1234', {
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql'
});

connection.authenticate()
    .then(() => {
        console.log('DataBase connected');
    }).catch((err) => {
        console.log('Erro na conexão com o banco: ' + err);
    });


module.exports = connection;