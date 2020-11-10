import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './tailwind.generated.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const store = createStore(
    reducers,//todo los reducers
    {}, //estado inicial
    applyMiddleware(reduxThunk) //Middleware
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
