const axios = require('axios');
const { Country } = require('../db.js')


getInfoToDb = async () => {
    const apiInfo = await axios('https://restcountries.com/v3/all');
    const cleanInfo = apiInfo.data.map(c => {
        return {
            id: c.cca2,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents ? c.continents.join(", ") : "Unknown",
            capital: c.capital ? c.capital.join(", ") : "Unknown",
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
    })

    await Country.bulkCreate(cleanInfo);

};

module.exports = {
    getInfoToDb,
}