import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const snackReducer = (state = [], action) => {
    if(action.type === 'SNACK'){
        console.log('snackReducer ', action);
        return [...state, action.info];
    }
    return state;
}


const storeInstance = createStore(

    combineReducers({
        snackReducer 
    }),
    compose(
        applyMiddleware(logger),
    )
    
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));