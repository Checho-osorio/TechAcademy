'use strict'

const jwt = require('jsonwebtoken');

let Sessions = require('../models/sessions')


const middlewares = {
    userProtectUrl : function ( req, res, next ) {

        const token = req.headers['access-token'];

        if (token) {
            jwt.verify(token, 'mhFwxYsuKNUsxfXuQIzV28mcwA0WYjE76CvK5VTwWRuyHtrbln', (err, decoded) => {
                if (err) {
                    return res.status(403).json({message: " Token invalida"})
                }
                else {
                    req.decoded = decoded;

                    Sessions.findOne({user_id: req.decoded.user_id, jwt: token}).exec((err, session) =>{

                        if (err) return res.status(500).send({message: "Error al retornar los datos."})
                        if (!session) return res.status(404).send({message: "Los datos de autenticación no son validos."})

                        next();


                    })

                }
            })


        }else {
            res.status(403).send({
                message: "token no valido"
            })
        }
    }
}

module.exports = middlewares