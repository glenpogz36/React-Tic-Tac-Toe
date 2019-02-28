import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './App.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-dom';


class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );


export default Game;