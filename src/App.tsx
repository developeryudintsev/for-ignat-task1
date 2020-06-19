import React from 'react';
import logo from './logo.svg';
import './App.css';
import Telegram from "./task1/Telegram";

function App() {

  let arQualities=[
    {id:1,qualities:'JS',className:'myQualities'},
    {id:2,qualities:'Bootstrap',className:'myQualities1'},
    {id:3,qualities:'React',className:'myQualities'},
    {id:4,qualities:'TS',className:'myQualities'},
  ]

  //
  // let filtered=arQualities.filter(f=>f.className!=='myQualities1')

  return (
    <div className="App">
    <Telegram name='Sasha' surName='Yudintsev'  arQualities={arQualities}/>
    </div>
  );
}

export default App;
