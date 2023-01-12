const { Model, DataTypes } = require('sequelize');
const db = require('../database/db');

const Pokemon = db.define(
    "pokemons",
    {
        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pokemon_api: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        types: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        db,
        modenName: 'pokemons',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
)

module.exports = Pokemon;