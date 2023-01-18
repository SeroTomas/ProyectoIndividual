
const { Activity, Country } = require('../db');

getActivity = async (info) => {
    const { name, difficulty, duration, season, countryId } = info;
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countryId
    });

    return newActivity;

}

module.exports = {
    getActivity
}
