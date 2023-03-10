'use strict'

const { validationResult } = require('express-validator');

var Maestros = require('../models/maestros'); 

var controller = {

    maestros:function( req, res ){
        
        Maestros.find({}).exec((err, maestros) => {
            if (err) return res.status(500).json({
                status: 500,
                mensaje: err,
            })

            if(!maestros) return res.status(200).json({
                status: 200,
                mensaje: "No hay Maestros por listar",
            })

            return res.status(200).json({
                status: 200,
                data: maestros
            })

        } );

    },

    maestro:function( req, res ){

        let n_lista = req.params.n_lista;

        Maestros.findOne({n_user: n_lista}).exec((err, maestro) => {
            if (err) return res.status(500).json({
                status: 500,
                mensaje: err,
            })

            if(!maestro) return res.status(200).json({
                status: 200,
                mensaje: "No hay maestro por listar",
            })

            return res.status(200).json({
                status: 200,
                data: maestro
            })

        } );

    },

    create_maestro: function( req, res ){

        // validar datos que se envian al endpoint

        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            
            return res.status(400).json({
                status: 400,
                errors: errors.array()
            })

        }
        
        let user_info = req.body

        Maestros.findOne({n_user: user_info.n_user}).exec((err, alumno) => {
            if (err) return res.status(500).json({
                status: 500,
                mensaje: err,
            })

            if(alumno) return res.status(200).json({
                status: 200,
                mensaje: "El numero de cuenta ya existe",
            })

            let maestros_model = new Maestros();


            maestros_model.n_user = user_info.n_user;
            maestros_model.nombre = user_info.nombre;
            maestros_model.edad = user_info.edad;
            maestros_model.genero = user_info.genero;
            
            maestros_model.save((err, maestroStored ) => {
                
                if (err) return res.status(500).json({ status: 500, mensaje: err,});    
                if(!maestroStored) return res.status(200).json({ status: 200, mensaje: "No se logro almacenar el maestro",});
    
                return res.status(200).json({
                    status: 200,
                    message: "Maestro almacenado "
                })
    
            })

         
        } );
        
    },


    update_maestro: function( req, res){
        
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            
            return res.status(400).json({
                status: 400,
                errors: errors.array()
            })

        }
        
        let n_lista = req.params.n_lista;
        let user_info = req.body

        let maestro_info_update = {
            nombre: user_info.nombre,
            edad: user_info.edad,
            genero: user_info.genero,
        }


        Maestros.findOneAndUpdate({n_user: n_lista}, maestro_info_update, { new: true}, ( err, maestroUpdate)=> {
            if (err) return res.status(500).json({message: 'Error al actualizar'});
            if (!maestroUpdate) return res.status(404).json({message: 'No existe el Maestro'});

            return res.status(200).json({
                nombre: maestroUpdate.nombre,
                edad: maestroUpdate.edad,
                genero: maestroUpdate.genero,
            })
        })

    },


    delete_maestro: function( req, res){

        let n_lista = req.params.n_lista;

        Maestros.findOneAndRemove({n_user: n_lista}, ( err, maestroDelete) => {
            if (err) return res.status(500).json({message: 'Error al eliminar maestro '});
            if (!maestroDelete) return res.status(404).json({message: 'No existe el maestro'});

            return res.status(200).json({
                message: " Usuario eliminado"
            })
        })
    },


};

module.exports = controller;