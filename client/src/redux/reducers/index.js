import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, GET_ALL_ACTIVITIES, ADD_ACTIVITIES, FILTER_COUNTRIES } from "../actions";


// Estado Global Inicial

const initialState = {
    allCountries: [], // contiene todos los paises
    selectedCountries: [],  // contiene paises seleccionados
    countryDetail: {}, // detalle de un pais
    allActivities: [],
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

        }

        default: return state;
    }
};
function order() {

};
function filter() {


};

export default rootReducer;