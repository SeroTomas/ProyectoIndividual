const {Router} = require('express');
const router = Router();
const {getNewActivity, getActivities} = require('../controllers/activities');

router.post('/', async (req, res) => {
    const info = req.body;
    try {
        const activity = await getNewActivity(info);
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

router.get('/load', async (req, res) => {
    try {
        const activities = await getActivities();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = router;