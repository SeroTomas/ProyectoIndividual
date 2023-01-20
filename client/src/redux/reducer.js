import { GET_COUNTRIES, GET_NAMED_COUNTRY } from "./actions";


export const initialState = {
    countries: []
}

export default function reducer (state = initialState, {type, payload}){
    switch (type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: payload
            }
    
        default:
            return {
                ...state
            }
    }
}

