import React from 'react';
import logo from './logo.svg';
import './App.css';
import Telegram from "./task1/Telegram";

function App() {
  return (
    <div className="App">
    <Telegram name='Sasha' surName='Yudintsev' age={11}/>
    </div>
  );
}

export default App;
