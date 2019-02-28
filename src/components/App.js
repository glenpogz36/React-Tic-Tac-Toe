import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import { Provider } from 'react-redux';
import gamereducer from '../reducers/gamereducer';

class App extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                    <Game />
            </div>
        );
    }
}





export default App;