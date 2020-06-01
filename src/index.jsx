import React from 'react';
import ReactDOM from 'react-dom'; // Connect React to DOM
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
// import Card from './Card'; //<-- no suffix => js file assumed
import App from './PanelComponent/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './Reducers/reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // if logger first before thunk -> will get extra log outputs -> when thunk sees an action returns a function -> it will call the function immediately with passing dispatch as argument and pass it to logger

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
