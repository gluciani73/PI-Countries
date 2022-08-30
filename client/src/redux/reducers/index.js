import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_DETAIL,
    ADD_ACTIVITIES,
    GET_ALL_ACTIVITIES,
    SET_PAGE,
    RESET_COUNTRIES,
    RESET_COUNTRY_DETAIL,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITY
} from "../actions";

// Estado Global Inicial

const initialState = {
    allCountries: [], // contiene todos los paises
    selectedCountries: [],  // contiene paises seleccionados
    countryDetail: {}, // detalle de un pais
    allActivities: [],
    currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    const countries = state.allCountries;

    switch (action.type) {
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                selectedCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name))
            }
        }
        case GET_COUNTRY_BY_NAME: {
            return {
                ...state,
                selectedCountries: state.allCountries.filter(c => c.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
        case RESET_COUNTRIES: {
            return {
                ...state,
                selectedCountries: state.allCountries
            }
        }
        case GET_COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload,
            }
        }
        case RESET_COUNTRY_DETAIL: {
            return {
                ...state,
                selectedCountries: initialState.countryDetail
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
        case ORDER_BY_NAME: {
            let sortedCountries = [];
            if (action.payload === 'A-Z') {
                sortedCountries = [...state.selectedCountries].sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'Z-A') {
                sortedCountries = [...state.selectedCountries].sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                selectedCountries: sortedCountries
            }
        }
        case ORDER_BY_POPULATION: {
            let sortedCountries = [];
            if (action.payload === 'ASC') {
                sortedCountries = [...state.selectedCountries].sort((a, b) => a.population - b.population)
            }
            if (action.payload === 'DESC') {
                sortedCountries = [...state.selectedCountries].sort((a, b) => b.population - a.population);
            }
            return {
                ...state,
                selectedCountries: sortedCountries
            }
        }
        case FILTER_CONTINENT: {
            const filteredCountries = action.payload === 'All' && countries.length ?
                state.allCountries :
                countries.filter((c) => c.continent === action.payload)

            return {
                ...state,
                selectedCountries: filteredCountries
            }
        }
        case FILTER_ACTIVITY: {
            const filteredCountries = state.selectedCountries.filter((c) =>
                c.activities.map((ac) => ac.name).includes(action.payload)
            );
            return {
                ...state,
                selectedCountries: filteredCountries
            }
        }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        default: return state;
    }
};

// const interseccion = arr1.filter((x) => arr2.includes(x))

export default rootReducer;