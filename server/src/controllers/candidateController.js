const db = require('../../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const candidateAPIController = {
    all: function(req,res){
        db.Aspirante.findAll().then(function(aspirantes){
            res.status(200).json({
                total: aspirantes.length,
                aspirantes: aspirantes.map(({id, dni, nombre, apellido, email, telefono, linkedin_url, fecha_nacimiento, sexo, imagen, profesion}) => ({id, dni, nombre, apellido, email, telefono, linkedin_url, fecha_nacimiento, sexo, imagen, profesion}))
            })
        })
    },
    detail : function(req,res){
        db.Aspirante.findByPk(req.params.id).then(function(aspirante){
            res.status(200).json({
                id: aspirante.id,
                dni: aspirante.dni,
                nombre: aspirante.nombre,
                apellido: aspirante.apellido,
                email: aspirante.email,
                telefono: aspirante.telefono,
                linkedin_url: aspirante.linkedin_url,
                fecha_nacimiento: aspirante.fecha_nacimiento,
                sexo: aspirante.sexo,
                imagen: aspirante.imagen,
                profesion: aspirante.profesion
            })
        })
    }
}

module.exports = candidateAPIController;