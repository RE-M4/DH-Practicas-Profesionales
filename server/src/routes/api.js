const express = require('express'); //Se importa Express.
const router = express.Router(); //Se guarda la funcionalidad de Router en la variable.
const candidateAPIController = require('../controllers/candidateController'); //Se importa el controlador de Aspirantes.
const degreeAPIController = require('../controllers/degreeController'); //Se importa el controlador de Profesiones.

router.get('/candidatos', candidateAPIController.all);
router.get('/candidate/:id', candidateAPIController.detail);
router.get('/profesiones', degreeAPIController.all);
router.get('/profesion/:id', degreeAPIController.detail);

module.exports = router;