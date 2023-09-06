const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {

    try {
        const decode = jwt.verify(req.body.token, config.env.JWT_KEY)
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação' })
    }


}