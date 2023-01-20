import axios from 'axios';

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_NAMED_COUNTRY = "GET_NAMED_COUNTRY";


const getCountries = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/countries');
            dispatch({ type: GET_COUNTRIES, payload: response.data });
        } catch (error) {
            console.log(error.message);
        }
    }
};

const getNamedCountry = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            dispatch({type: GET_NAMED_COUNTRY, payload: response.data});
        } catch (error) {
            console.log(error.message)
        }
    }
};

