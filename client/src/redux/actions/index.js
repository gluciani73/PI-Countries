import axios from 'axios';

// const PATH = "http://localhost:3001/countries/";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';
export const RESET_COUNTRY_DETAIL = 'RESET_COUNTRY_DETAIL';

export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
// export const POST_ACTIVITIES = 'POST_ACTIVITIES';

export const SET_PAGE = 'SET_PAGE';

// Para los filtros y ordenar
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';

// export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
// export const SORT_COUNTRIES = "SORT_COUNTRIES";
// export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';


export function getAllCountries() {
    // setLoading(true);
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_ALL_COUNTRIES, payload: response })
            })
            .catch(error => console.log(new Error(error)))
        // .finally(() => setLoading(false))
    };
};

export function getCountryByName(name) {
    // setLoading(true);
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
    // setLoading(true);
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_COUNTRY_DETAIL, payload: response })
            })
            .catch(error => console.log(new Error(error)))
        // .finally(() => setLoading(false))
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
    // setLoading(true);
    return function (dispatch) {
        axios.get(`http://localhost:3001/activities`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_ALL_ACTIVITIES, payload: response })
            })
            .catch(error => console.log(new Error(error)))
        // .finally(() => setLoading(false))
    };
};

export function addActivity(data) {
    // setLoading(true);
    return function (dispatch) {
        axios.post(`http://localhost:3001/activities`, data)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: ADD_ACTIVITIES, payload: response })
            })
            .catch(error => console.log(new Error(error)))
        // .finally(() => setLoading(false))
    }
};

export function setCurrentPage(page) {
    return { type: SET_PAGE, payload: page }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function filterByContinent(payload) {
    return {
        type: FILTER_CONTINENT,
        payload
    }
}

export function filterByActivity(payload) {
    return {
        type: FILTER_ACTIVITY,
        payload
    }
}

// export function filterCountries(filter) {
//     return function (dispatch) {
//         axios.get(`http://localhost:3001/countries?name=${filter}`)
//             .then(response => response.data)
//             .then(response => {
//                 dispatch({ type: GET_FILTERED_COUNTRIES, payload: response })
//             })
//             .catch(error => console.log(new Error(error)))
//         // .finally(() => setLoading(false))
//     };

//     // return { type: FILTER_COUNTRIES, payload: filter }
// }

