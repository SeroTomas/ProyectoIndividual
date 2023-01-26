import axios from 'axios';

// importamos las constantes necesarias
import { GET_COUNTRIES, GET_NAMED_COUNTRY, ORDER_BY_NAME } from '../Const/index';
//

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/countries');
            dispatch({ type: GET_COUNTRIES, payload: response.data });
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getNamedCountry = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            dispatch({type: GET_NAMED_COUNTRY, payload: response.data});
        } catch (error) {
            console.log(error.message)
        }
    }
};

export const orderByName = (payload) => {
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderName(a, b) {
    if(a.name < b.name) return -1
    if(b.name < a.name) return 1 
    return 0
  }
