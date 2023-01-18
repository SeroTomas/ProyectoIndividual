const {Router} = require('express');
const router = Router();
const {getActivity} = require('../controllers/activities');

router.post('/', async (req, res) => {
    const info = req.body;
    try {
        const activity = await getActivity(info);
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = router;