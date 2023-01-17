const { Router } = require('express');

const {getInfoToDb} = require('../controllers/countries.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const countryRoute = require('./countries');
const activityRoute = require('./activities');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/countries', countryRoute);
//router.use('/activities', activityRoute);

// ruta para extraer los paises de la API y guardarlos en la base de datos
router.use('/load', async(req, res) => {
    try {
        const info = await getInfoToDb();
        res.status(200).send('Los paises fueron cargados con exito a la base de datos.')
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;
