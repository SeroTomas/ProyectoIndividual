
const { Activity, Country } = require('../db');

getNewActivity = async (info) => {

    await info.forEach(async (act) => {
        const { name, difficulty, duration, season, countries } = act;
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        

        if (countries.length > 1) {

            await countries.forEach(element => {
                newActivity.addCountry(element);
            });

        } else {

            await newActivity.addCountry(countries[0]);

        }
    });

    return info
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
