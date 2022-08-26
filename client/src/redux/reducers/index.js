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

    // FILTER_COUNTRIES,
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
                selectedCountries: state.allCountries.filter(c => c.name.toLowerCase().includes(action.payload))
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
            let sortedCountries = state.selectedCountries;
            if (action.payload === 'A-Z') {
                sortedCountries = state.selectedCountries.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'Z-A') {
                state.selectedCountries.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                selectedCountries: sortedCountries
            }
        }

        case ORDER_BY_POPULATION: {

            let sortedCountries = state.selectedCountries;
            if (action.payload === 'ASC') {
                state.selectedCountries.sort((a, b) => a.population - b.population)
            }
            if (action.payload === 'DESC') {
                state.selectedCountries.sort((a, b) => b.population - a.population);
            }
            return {
                ...state,
                selectedCountries: sortedCountries
            }
        }


        // case FILTER_COUNTRIES: {
        //     const search = action.payload.search.toLowerCase();
        //     const filter = action.payload.filter.toLowerCase();

        //     if (!search || !filter || filter === "" || !search.lenght)
        //         return {
        //             ...state,
        //             selectedCountries: state.allCountries
        //         }
        //     if (search && !filter)
        //         return {
        //             ...state,
        //             selectedCountries: state.allCountries.filter(e => e.name.toLowerCase().includes(search))
        //         }
        //     break
        // };

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        default: return state;
    }
};

// function order() {
// };

// const interseccion = arr1.filter((x) => arr2.includes(x))


function sortArray(array, sort) {
    const sortAZ = (a, b) => {
        if (a > b) { return 1 }
        if (a < b) { return -1 }
        return 0;
    }
    const sortZA = (a, b) => { return sortAZ(b, a) }

    const sortMinor = (a, b) => { return a - b }

    const sortMajor = (a, b) => { return sortMinor(b, a) }

    if (sort === "A-Z") { return array.sort((a, b) => sortAZ(a.name, b.name)) }
    if (sort === "Z-A") { return array.sort((a, b) => sortZA(a.name, b.name)) }

    if (sort === "ASC") { return array.sort((a, b) => sortMajor(a.population, b.population)) }
    if (sort === "DESC") { return array.sort((a, b) => sortMinor(a.population, b.population)) }
}


export default rootReducer;