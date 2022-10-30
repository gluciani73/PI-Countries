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
    FILTER_ACTIVITY,
    LOADING_TOGGLE_ACTION
} from "../actions";

// Estado Global Inicial

const initialState = {
    allCountries: [],
    selectedCountries: [],
    countryDetail: {},
    allActivities: [],
    continent: 'All',
    activity: 'All',
    currentPage: 1,
    showLoading: false
}

const rootReducer = (state = initialState, action) => {
    const countries = state.allCountries;

    switch (action.type) {
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                selectedCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                showLoading: false,
            }
        }
        case GET_COUNTRY_BY_NAME: {
            const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(action.payload.toLowerCase()))
            // action.payload && countries.length ?
            // state.allCountries : 
            // countries.filter((c) => c.activities.map((ac) => ac.name).includes(action.payload));
            return {
                ...state,
                selectedCountries: filteredCountries,
                showLoading: false,
            }
        }
        case RESET_COUNTRIES: {
            return {
                ...state,
                selectedCountries: state.allCountries.sort((a, b) => a.name.localeCompare(b.name)),
                showLoading: false,
            }
        }
        case GET_COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload,
                showLoading: false,
            }
        }
        case RESET_COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: initialState.countryDetail,
                showLoading: false,
            }
        }
        case GET_ALL_ACTIVITIES: {
            return {
                ...state,
                allActivities: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                showLoading: false,
            }
        }
        case ADD_ACTIVITIES: {
            return {
                ...state,
                allActivities: state.allActivities.concat(action.payload),
                showLoading: false,
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
                selectedCountries: sortedCountries,
                showLoading: false,
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
                selectedCountries: sortedCountries,
                showLoading: false,
            }
        }
        case FILTER_CONTINENT: {

            const filteredByActivity = state.activity === 'All' ?
                countries
                : countries.filter((c) => c.activities.map((ac) => ac.name).includes(state.activity));

            const filteredCountries = action.payload === 'All' && countries.length ?
                filteredByActivity :
                filteredByActivity.filter((c) => c.continent === action.payload);

            return {
                ...state,
                selectedCountries: filteredCountries,
                continent: action.payload,
                showLoading: false,
            }
        }
        case FILTER_ACTIVITY: {

            const filteredByContinent = state.continent === 'All' ?
                countries :
                countries.filter(c => c.continent === state.continent);

            const filteredCountries = action.payload === 'All' && filteredByContinent.length ?
                filteredByContinent :
                filteredByContinent.filter((c) => c.activities.map((ac) => ac.name).includes(action.payload));
            return {
                ...state,
                selectedCountries: filteredCountries,
                activity: action.payload,
                showLoading: false,
            }
        }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                showLoading: false,
            };
        case LOADING_TOGGLE_ACTION:
            return {
                ...state,
                showLoading: action.payload
            }

        default: return state;
    }
};

export default rootReducer;