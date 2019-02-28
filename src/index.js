import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import gameReducer from './reducers/gamereducer'

const store = createStore(gameReducer);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
