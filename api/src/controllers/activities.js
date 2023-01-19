
const { Activity, Country } = require('../db');

getNewActivity = async (info) => {

    const { name, difficulty, duration, season, countryId } = info;

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });

    if (countryId.length > 1) {

        await countryId.forEach(element => {
            newActivity.addCountry(element);
        });

    } else {

        await newActivity.addCountry(countryId[0]);

    }

    return newActivity
}

getActivities = async () => {
    const activities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ['id', 'name', 'flag'],
            through: {
                attributes: [],
            }
        }
    });
    return activities;
}


module.exports = {
    getNewActivity,
    getActivities
}
