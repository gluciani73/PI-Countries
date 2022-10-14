import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';
export const RESET_COUNTRY_DETAIL = 'RESET_COUNTRY_DETAIL';

export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';

export const SET_PAGE = 'SET_PAGE';

// Para los filtros y ordenar
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

export function getAllCountries() {
    return function (dispatch) {
        axios.get(`/countries`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_ALL_COUNTRIES, payload: response })
            })
            .catch(error => console.log(error))
    };
};
export function getCountryByName(name) {
    return function (dispatch) {
        try {
            dispatch({ type: GET_COUNTRY_BY_NAME, payload: name })
        } catch (error) {
            console.log('No se pudo encontrar el pais')
        }
    };
};
export function resetCountries() {
    return function (dispatch) {
        try {
            dispatch({ type: RESET_COUNTRIES })
        } catch (error) {
            console.log(error)
        }
    };
};
export function getCountryDetail(id) {
    return function (dispatch) {
        axios.get(`/countries/${id}`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_COUNTRY_DETAIL, payload: response })
            })
            .catch(error => console.log(error))
    };
};
export function resetCountryDetail() {
    return function (dispatch) {
        try {
            dispatch({ type: RESET_COUNTRY_DETAIL })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getAllActivities() {
    return function (dispatch) {
        axios.get(`/activities`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_ALL_ACTIVITIES, payload: response })
            })
            .catch(error => console.log(error))
    };
};
export function addActivity(data) {
    return function (dispatch) {
        return axios.post(`/activities`, data)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: ADD_ACTIVITIES, payload: response });
                alert('Se creo la actividad. ')
                return true
            })
            .catch(error => {
                console.log(error);
                alert('No se puede crear la actividad. Error: ' + error.response.data)
                return false
            })
    }
};
export function setCurrentPage(page) {
    return { type: SET_PAGE, payload: page }
};
export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};
export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
};
export function filterByContinent(payload) {
    return {
        type: FILTER_CONTINENT,
        payload
    }
};
export function filterByActivity(payload) {
    return {
        type: FILTER_ACTIVITY,
        payload
    }
};

