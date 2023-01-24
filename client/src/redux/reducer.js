import { GET_COUNTRIES, GET_NAMED_COUNTRY,  } from "../Const/index";



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
                countries: payload
            }
        //SearchBar 

        case GET_NAMED_COUNTRY:
            return{
                ...state,
                countries:payload
            }
            
        default:
            return {
                ...state
            }
    }
}

