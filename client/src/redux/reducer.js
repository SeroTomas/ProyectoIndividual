import { GET_COUNTRIES, GET_NAMED_COUNTRY, ORDER_BY_NAME, A_Z } from "../Const/index";



export const initialState = {
    dbCountries: [],
    countries: []

}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                dbCountries: payload,
                countries: payload,
                filterbycontinent: payload,
                filterbyactivity: payload
            }
        //SearchBar 

        case GET_NAMED_COUNTRY:
            return {
                ...state,
                countries: payload
            }

        case ORDER_BY_NAME:
            let orderCountries = payload === A_Z ? state.countries.slice().sort((a, b) => {
                if (a.name < b.name) return -1
                if (b.name < a.name) return 1
                return 0
            }) :
                state.countries.slice().sort((a, b) => {
                if (a.name < b.name) return 1
                if (b.name < a.name) return -1
                return 0
            })
            return {
                ...state,
                countries: orderCountries
            }

        default:
            return {
                ...state
            }
    }
}

