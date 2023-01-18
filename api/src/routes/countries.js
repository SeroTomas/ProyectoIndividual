const {Router} = require('express');
const router = Router();
const {getCountries, getInfoToDb, getCountryByPk} = require('../controllers/countries')

router.get('/load', async(req, res) => {
    try {
        const info = await getInfoToDb();
        res.status(200).send('Los paises fueron cargados con exito a la base de datos.')
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/', async (req, res) => {
    const {name} = req.query;
    try {
        const result = await getCountries(name);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const result = await getCountryByPk(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;