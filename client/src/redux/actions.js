import axios from 'axios';

// importamos las constantes necesarias
import { FILTER_BY_CONTINENT, GET_COUNTRIES, GET_NAMED_COUNTRY, ORDER_BY_NAME, ORDER_BY_POPULATION, ACT_TO_STATE } from '../Const/index';
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
            dispatch({ type: GET_NAMED_COUNTRY, payload: response.data });
        } catch (error) {
            console.log(error.message)
        }
    }
};

export const postActivity = (activity) => {
    return async (dispatch) => {

        try {
           const response = await axios.post('http://localhost:3001/activities', activity)
            
        } catch (error) {

        }
    }
}

export const getActToState = (payload) => {
    return {
        type: ACT_TO_STATE,
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}
