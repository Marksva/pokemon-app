const Pokemon = require('../model/pokemonModel');

const { v4: uuidv4 } = require('uuid');

const controllerPokemon = {

    getAll(req, res) {
        Pokemon.findAll({
            order: [['createdAt', 'DESC']]
        })
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(400).json({ error: err.message }));
    },

    post(req, res) {
        Pokemon.create({
            pokemon_id: uuidv4(),
            name: req.body.name,
            img: req.body.img,
            types: req.body.types,
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
        }).then((result) => res.status(201).json(result))
            .catch((err) => res.status(400).json({ error: err.message }));
    },

    update(req, res) {
        let alteracao = {
            name: req.body.name,
        }
        Pokemon.update(alteracao, {
            where: {
                pokemon_id: req.params.id
            }
        }).then((result) => res.status(200).json(alteracao))
            .catch((err) => res.status(400).json({ error: err.message }));
    },

    getLastPokemon(req, res) {
        Pokemon.findAll({
            order: [['createdAt', 'DESC']],
            limit: 1,
        })
            .then((result) => {
                if (result.length === 0) {
                    return res.status(404).json({ error: 'Nenhum Pokémon encontrado.' });
                }
                res.status(200).json(result[0]);
            })
            .catch((err) => res.status(500).json({ error: err.message }));

    }

}

module.exports = controllerPokemon;