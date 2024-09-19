import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserTouter} from 'react-router-dom';
import AppRouter from './Router'

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
