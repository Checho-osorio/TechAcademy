'use strict'

var controller = {

    welcome: function(req, res){
        console.log('get ejecutado en raiz');
        res.send("mi primer debug")
    }

  /* ,  alumnos:function( req, res ){
        res.send("mi listado de alumnos")
    },

    alumno: function( req, res ){
        let cal1 = 10;
        let cal2 = 8;
        let cal3 = 8;
    
        let final = ( cal1 + cal2 + cal3) / 3
    
        console.log(final);
       // res.send("La calificación es: " + final)

        return res.status(200).json({
            status: 200,
            cal_final: final,
        })
    },

    create_alumno: function( req, res ){


        
        let user_info = req.body
        
        console.log(user_info);
        return res.status(200).json({
            status: 200,
            nombre_alumno: user_info.name + " " + user_info.apellido,
            edad_alumno: user_info.edad
        })
        
    },

    update_alumno: function( req, res ){
        res.send("Actualizamos un alumno")
    },

    drop_alumno: function( req, res ){
        res.send("Eliminamos un alumno")
    } */

}

module.exports = controller;