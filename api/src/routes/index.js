const { Router } = require('express');
const { breedsRouter } = require('./breeds')
const { dogsRouter } = require('./dogs')
const { temperamentsRouter } = require('./temperaments')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/breeds', breedsRouter)
router.use('/dogs', dogsRouter)
router.use('/temperaments', temperamentsRouter)


module.exports = router;
