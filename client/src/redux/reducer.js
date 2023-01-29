import { GET_ACTIVITIES,RESET_ACTIVITIES,ACT_TO_STATE,GET_COUNTRIES, GET_NAMED_COUNTRY, ORDER_BY_NAME, A_Z, ASCENDENTE, ORDER_BY_POPULATION, FILTER_BY_CONTINENT, auxSortPopulation, auxSortName, auxFilterContinent } from "../Const/index";



export const initialState = {
    dbCountries: [],
    countries: [],
    continent: [],
    createActivities: [],
    activities : []

}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                dbCountries: payload,
                countries: payload,
            }

        case GET_ACTIVITIES:
            return{
                ...state,
                activities:[...state.activities, payload]
            }

        case FILTER_BY_CONTINENT:

            return {
                ...state,
                continent: auxFilterContinent(state.dbCountries, payload)
            }

        case GET_NAMED_COUNTRY:
            return {
                ...state,
                countries: payload,
            }


        case ORDER_BY_NAME:
            if (payload === A_Z) {

                return {
                    ...state,
                    countries: state.countries.slice().sort(auxSortName),
                    continent: state.continent.slice().sort(auxSortName)
                }
            } else {
                return {
                    ...state,
                    countries: state.countries.slice().sort(auxSortName).reverse(),
                    continent: state.continent.slice().sort(auxSortName).reverse()

                }
            }


        case ORDER_BY_POPULATION:
            if (payload === ASCENDENTE) {

                return {
                    ...state,
                    countries: state.countries.slice().sort(auxSortPopulation),
                    continent: state.continent.slice().sort(auxSortPopulation)
                }
            } else {
                return {
                    ...state,
                    countries: state.countries.slice().sort(auxSortPopulation).reverse(),
                    continent: state.continent.slice().sort(auxSortPopulation).reverse()
                }
            }
        
        case ACT_TO_STATE:
            return {
                ...state,
                createActivities: [...state.createActivities, payload]
            }

        case RESET_ACTIVITIES:
            return{
                ...state, 
                createActivities: []
            }

        default:
            return {
                ...state
            }
    }
}

