import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TicTacToeComponent } from './games/tic-tac-toe';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Mini Games
        <TicTacToeComponent/>
      </header>
    </div>
  );
}

export default App;
