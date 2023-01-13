const express = require('express');
const pokemonController = require('../controllers/pokemonController')
const router = express.Router();

router.route('/pokemons').get(pokemonController.getAll);
router.route('/pokemons').post(pokemonController.post);


module.exports = router;