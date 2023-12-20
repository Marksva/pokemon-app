const db = require('../database/db');
const { Model, DataTypes } = require('sequelize');

const Pokemon = db.define(
    "pokemons",
    {
        pokemonId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        modelName: 'pokemons',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
)

module.exports = Pokemon;