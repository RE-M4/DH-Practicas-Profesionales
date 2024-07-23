const db = require('../../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const degreeAPIController = {
    all: function(req,res){
        db.Profesion.findAll().then(function(profesiones){
            res.status(200).json({
                total: profesiones.length,
                profesiones: profesiones.map(({id, titulo}) => ({id, titulo}))
            })
        })
    },
    detail : function(req,res){
        db.Profesion.findByPk(req.params.id).then(function(profesion){
            res.status(200).json({
                id: profesion.id,
                titulo: profesion.titulo
            })
        })
    }
}

module.exports = degreeAPIController;