const axios = require('axios');
const { Country } = require('../db.js')
getInfoToDb = async () => {
    const apiInfo = await axios('https://restcountries.com/v3/all');
    const cleanInfo = apiInfo.data.map(c => {
        return {
            id: c.cca2,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents ? c.continents.join(", ") : 'Unknown',
            capital: c.capital ? c.continents.join(", ") : 'Unknown',
            subregion: c.subregion ? c.subregion : 'Unknown',
            area: c.area ? Math.round(c.area) : 'Unknown',
            population: c.population ? c.population : 'Unknown'
        }
    })

    await Country.bulkCreate(cleanInfo);

};

module.exports = {
    getInfoToDb
}