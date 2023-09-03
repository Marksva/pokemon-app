const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/pokemons').get(pokemonController.getAll);
router.route('/pokemons').post(pokemonController.post);
router.route('/pokemons/:id').patch(pokemonController.update);
router.route('/last-pokemon').get(pokemonController.getLastPokemon);


router.route('/user').post(userController.post);




module.exports = router;