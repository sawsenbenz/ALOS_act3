import jwt from 'jsonwebtoken'

export default function verifyToken(req, res, next) {
    var token = req.headers['access-token'];
    if (!token)
        return res.status(403).send({
            auth: false,
            message: 'Erreur'
        });

    jwt.verify(token, config.jwtsecret, function (err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false,
                message: 'Échec de l authentification'
            });

        
        req.user_id = decoded.id;
        next();
    });
}

