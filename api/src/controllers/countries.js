const axios = require('axios');
const {Country} = require('../db.js')
async function getInfoToDb() {
    const apiInfo = await axios('https://restcountries.com/v3/all');
    const cleanInfo = apiInfo.data.map(c => {
        return {
            id: c.cca2,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents.join(", "),
            capital: c.capital.join(", "),
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }
    })
    await Country.bulkCreate(cleanInfo);
};

module.exports = {
    getInfoToDb
}