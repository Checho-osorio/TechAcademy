'use strict'

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

var Usuarios = require('../models/usuarios'); 
var Sessions = require('../models/sessions'); 

var controller = {

    login:function( req, res ){
        
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            
            return res.status(400).json({
                status: 400,
                errors: errors.array()
            })
        }

        let login_info = req.body;

        Usuarios.findOne({mail: login_info.mail , pass: login_info.pass}).exec((err, usuario) => {
            if (err) return res.status(500).json({
                status: 500,
                mensaje: err,
            })

            if(!usuario) return res.status(200).json({
                status: 200,
                mensaje: "Los datos no son validos",
            })

            const payload = {
                user_id: usuario.id,
            }
           
            const access_token = jwt.sign(payload, 'mhFwxYsuKNUsxfXuQIzV28mcwA0WYjE76CvK5VTwWRuyHtrbln', {
                expiresIn: '1d'
            })


            let update = {
                user_id: usuario.id,
                jwt: access_token,
            }

            Sessions.findOneAndUpdate({user_id: usuario.id}, update, {upsert: true, new: true}, (err, sessionsUpdate)=>{
                if (err) return res.status(500).send({message: err})

                if (!sessionsUpdate) return res.status(404).send({message: 'Datos errones.'})
                
                return res.status(200).json({
                    status: 200,
                    message: "Autenticación correcta.",
                    token: access_token,
                })


            })

            

        } );

    
    },

    logout:function( req, res ){


  
        console.log(req.decoded);
        Sessions.findOneAndRemove({user_id: req.decoded.user_id}, (err, sessionDeleted)=>{
            if (err) return res.status(500).send({message: err})
            if (!sessionDeleted) return res.status(404).send({message: 'Datos errones.'})

            return res.status(200).send({
                message: " Usuario salio "
            })
        })
       

    },

  

};

module.exports = controller;