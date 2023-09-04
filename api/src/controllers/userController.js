const User = require('../model/userModel');
const { v4: uuidv4 } = require('uuid');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkUserExists(email) {
    return User.findOne({
        where: { email: email },
    });
}

const UserController = {
    async post(req, res) {
        const { name, email, senha } = req.body;

        try {
            if (!isValidEmail(email)) {
                return res.status(400).json({ error: 'Email inválido.' });
            }

            const existingUser = await checkUserExists(email);
            if (existingUser) {
                return res.status(400).json({ error: 'Usuário com o mesmo e-mail já existe.' });
            }

            const newUser = await User.create({
                name: name,
                email: email,
                senha: senha,
            });

            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
        }
    },
};

module.exports = UserController;
