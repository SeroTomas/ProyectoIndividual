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
router.use('/load', async(req, res) => {
    try {
        const info = await getInfoToDb();
        res.status(200).send("La base de datos fue actualizada")
    } catch (error) {
        res.status(400).send("Algo a salido mal")
    }
});


module.exports = router;
