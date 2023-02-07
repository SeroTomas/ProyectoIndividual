import {
    GET_ACTIVITIES,
    RESET_ACTIVITIES,
    ACT_TO_STATE,
    GET_COUNTRIES,
    GET_NAMED_COUNTRY,
    ORDER_BY_NAME,
    A_Z, ASCENDENTE,
    ORDER_BY_POPULATION,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITIES,
    auxSortPopulation,
    auxSortName,
    auxFilterContinent,
    auxFilterActivities,
    GET_DETAIL,
    RESET_DETAIL
} from "../Const/index";



export const initialState = {
    dbCountries: [],
    countries: [],
    continent: [],
    createActivities: [],
    //activities: [],
    detail: {}
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                dbCountries: payload,
                countries: payload,
            }

        case GET_NAMED_COUNTRY:
            return {
                ...state,
                countries: payload,
            }

        // case GET_ACTIVITIES:
        //     return {
        //         ...state,
        //         activities: payload
        //     }

        case GET_DETAIL:
            return{
                ...state,
                detail: payload
            }

        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: auxFilterContinent(state.dbCountries, payload),
                continent: auxFilterContinent(state.dbCountries, payload)
            }

        case FILTER_BY_ACTIVITIES:
            return {
                ...state,
                countries: auxFilterActivities(state.continent,state.dbCountries, payload)
            }

        case ORDER_BY_NAME:
            if (payload === A_Z) {

                return {
                    ...state,
                    countries: [...state.countries].sort(auxSortName),
                    continent: [...state.continent].sort(auxSortName)
                }
            } else {
                return {
                    ...state,
                    countries: [...state.countries].sort(auxSortName).reverse(),
                    continent: [...state.continent].sort(auxSortName).reverse()

                }
            }


        case ORDER_BY_POPULATION:
            if (payload === ASCENDENTE) {

                return {
                    ...state,
                    countries: [...state.countries].sort(auxSortPopulation),
                    continent: [...state.continent].sort(auxSortPopulation)
                }
            } else {
                return {
                    ...state,
                    countries: [...state.countries].sort(auxSortPopulation).reverse(),
                    continent: [...state.continent].sort(auxSortPopulation).reverse()
                }
            }

        case ACT_TO_STATE:
            return {
                ...state,
                createActivities: [...state.createActivities, payload]
            }

        case RESET_ACTIVITIES:
            return {
                ...state,
                createActivities: []
            }

        // case RESET_DETAIL:
        //     return {
        //         ...state,
        //         detail: {}
        //     }

        default:
            return {
                ...state
            }
    }
}

