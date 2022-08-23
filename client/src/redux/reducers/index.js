import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_DETAIL, GET_ALL_ACTIVITIES, ADD_ACTIVITIES, FILTER_COUNTRIES, SET_PAGE } from "../actions";


// Estado Global Inicial

const initialState = {
    allCountries: [], // contiene todos los paises
    selectedCountries: [],  // contiene paises seleccionados
    countryDetail: {}, // detalle de un pais
    allActivities: [],
    currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload,
                selectedCountries: action.payload
            }
        }
        case GET_COUNTRY_BY_NAME: {
            return {
                ...state,
                selectedCountries: action.payload
            }
        }
        case GET_COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload,
            }
        }
        case GET_ALL_ACTIVITIES: {
            return {
                ...state,
                allActivities: action.payload
            }
        }
        case ADD_ACTIVITIES: {
            return {
                ...state,
                allActivities: state.allActivities.concat(action.payload)
            }
        }
        case FILTER_COUNTRIES: {
            const search = action.payload.search.toLowerCase();
            const filter = action.payload.filter.toLowerCase();

            if (!search || !filter || filter === "" || !search.lenght)
                return {
                    ...state,
                    selectedCountries: state.allCountries
                }
            if (search && !filter)
                return {
                    ...state,
                    selectedCountries: state.allCountries.filter(e => e.name.toLowerCase().includes(search))
                }
        };

        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        default: return state;
    }
};
function order() {

};
function filter() {


};

export default rootReducer;