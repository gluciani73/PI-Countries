import axios from 'axios';

// const PATH = "http://localhost:3001/countries/";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const POST_ACTIVITIES = 'POST_ACTIVITIES';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const SET_PAGE = 'SET_PAGE';

// Para los filtros y ordenar
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const SORT_COUNTRIES = "SORT_COUNTRIES";



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
        axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_COUNTRY_BY_NAME, payload: response })
            })
            .catch(error => {
                console.log(new Error(error));
            }
            )
        // .finally(() => setLoading(false))
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

export function filterCountries(filter) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries?name=${filter}`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_FILTERED_COUNTRIES, payload: response })
            })
            .catch(error => console.log(new Error(error)))
        // .finally(() => setLoading(false))
    };

    // return { type: FILTER_COUNTRIES, payload: filter }
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
        axios.post(`/activities/`, data)
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

// export function getAllUserPosts(id) {
//     return function (dispatch) {
//         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//             .then((response) => response.json())
//             .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }))
//     };
// }

// export function getAllCommentsPost(id) {
//     return function (dispatch) {
//         return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
//             .then((response) => response.json())
//             .then(json => dispatch({ type: GET_ALL_COMMENTS_POST, payload: json }))
//     };
// }

// export function getAllPosts() {
//     return function (dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => dispatch({ type: GET_ALL_POSTS, payload: json }))
//     };
// }

