const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const countryRoute = require('./countries');
const activityRoute = require('./activities');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoute);
router.use('/activities', activityRoute);


module.exports = router;
