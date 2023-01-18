const axios = require('axios');
const { Op } = require('sequelize');
const { Country } = require('../db')


getInfoToDb = async () => {
    const apiInfo = await axios('https://restcountries.com/v3/all');
    const cleanInfo = apiInfo.data.map(c => {
        return {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents ? c.continents.join(", ") : 'Unknown',
            capital: c.capital ? c.capital.join(", ") : 'Unknown',
            subregion: c.subregion ? c.subregion : 'Unknown',
            area: c.area ? Math.round(c.area) : 'Unknown',
            population: c.population ? c.population : 'Unknown'
        }
    })

    await Country.bulkCreate(cleanInfo);
};


getCountries = async (name) => {
    if (name) {
        const nameCountry = await Country.findOne({ where: { name: { [Op.iLike]: `%${name}%` } } })
        return nameCountry;
    } else{
        const countries = await Country.findAll()
        return countries;
    }
}


getCountryByPk = async (id) => {
    const country = await Country.findByPk(id);
    if (!country) throw Error('El pais no existe');
    return country;
}

module.exports = {
    getInfoToDb,
    getCountries,
    getCountryByPk
}