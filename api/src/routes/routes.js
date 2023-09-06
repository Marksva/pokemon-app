const express = require('express');
const userController = require('../controllers/userController');
const pokemonController = require('../controllers/pokemonController');
const authMiddleware = require('../../middleware/login');


const router = express.Router();


router.route('/user').post(userController.post);
router.route('/login').post(userController.login);

router.route('/pokemons').get(authMiddleware, pokemonController.getAll);
router.route('/pokemons').post(authMiddleware, pokemonController.post);
router.route('/pokemons/:id').patch(authMiddleware, pokemonController.update);
router.route('/last-pokemon').get(authMiddleware, pokemonController.getLastPokemon);




module.exports = router;