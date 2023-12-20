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
        
        const {name, img, types, hp, attack, defense, speed} = req.body;

        Pokemon.create({
            pokemonId: uuidv4(),
            name: name,
            img: img,
            types: types,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
        }).then((result) => res.status(201).json(result))
            .catch((err) => res.status(400).json({ error: err.message }));
    },

    update(req, res) {

        const { name } = req.body;
        
        Pokemon.update(name, {
            where: {
                pokemonId: req.params.id
            }
        }).then((result) => res.status(200).json(name))
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