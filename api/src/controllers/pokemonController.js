const db = require('../model/pokemonModel');


const controller = {

    getAll(req, res) {
        db.findAll()
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(400).json({ error: err.message }));
    },

    post(req, res) {
        db.create({
            pokemon_api: req.body.pokemon_api,
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
        db.update(alteracao, {
            where: {
                pokemon_id: req.params.id
            }
        }).then((result) => res.status(200).json(alteracao))
            .catch((err) => res.status(400).json({ error: err.message }));
    },
}

module.exports = controller;