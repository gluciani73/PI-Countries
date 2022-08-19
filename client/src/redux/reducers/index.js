import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL } from "../actions";


// Estado Global Inicial

const initialState = {
    allCountries: [], // contiene todos los paises
    selectedCountries: [],  // contiene paises seleccionados
    countryDetail: {}, // detalle de un pais
    pageCurr: 1,
    filter: "",
    order: ""
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

        default: return state;
    }
};

export default rootReducer;