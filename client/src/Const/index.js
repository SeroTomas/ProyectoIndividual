// ****ACTIONS****
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAMED_COUNTRY = "GET_NAMED_COUNTRY";
export const ACT_TO_STATE = "ACT_TO_STATE";


// Dependencias Handlers
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"


// dependencia de selectores
export const A_Z = "A_Z";
export const Z_A = "Z_A";
export const ASCENDENTE = "ASCENDENTE";
export const DESCENDENTE = "DESCENDENTE";


// Funciones auxiliares:

export const auxSortPopulation = (a, b) => {
    if (a.population < b.population) return -1
    if (b.population < a.population) return 1
    return 0
}

export const auxSortName = (a, b) => {
    if (a.name < b.name) return -1
    if (b.name < a.name) return 1
    return 0
}

export const auxFilterContinent = (array, payload) => {
    if (payload === "All") return []
    return array.filter(country => country.continent === payload)

}

export const validate = (form) => {

    let error = {}
    if (!form.name) { error.name = "Se requiere un nombre" }
    if (form.name.length < 3) { error.name = "El nombre debe terner al menos 3 letras" }
    if (!form.name.match(/^[A-Za-z]+$/)) { error.name = "El nombre debe poseer solo letras" }
    if (!form.difficulty || form.difficulty === "-") { error.difficulty = "Debe indicar una dificultad" }
    if (!form.duration || form.duration === "-") { error.duration = "Debe seleccionar una duracion" }
    if (!form.season || form.season === "-") { error.season = "Debe seleccionar una temporada" }
    if (!form.countries.length) { error.countries = "Debe sellecionar al menos un pais" }

    return error;

}

export const validateAct = (array, obj) => {
    


}
