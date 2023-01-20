import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAMED_COUNTRY = "GET_NAMED_COUNTRY";


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

