const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const countryRoute = require('./countries.js');
const activityRoute = require('./activities');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRoute);
router.use('/activities', activityRoute);

// ruta para extraer los paises de la API y guardarlos en la base de datos


module.exports = router;
