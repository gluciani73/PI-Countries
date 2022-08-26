import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';  //

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/index';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // const composeEnhancer =
// //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
// //     compose;

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;