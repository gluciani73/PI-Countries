import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const POST_ACTIVITIES = 'POST_ACTIVITIES';

// Para los filtros y ordenar
export const SORT_COUNTRIES = "SORT_COUNTRIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";

export function getAllCountries(query) {

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

