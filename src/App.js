import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Info from './components/Info';


function App() {
  return (
    <div className="App">
      <h1>Pasemos unos Props y states</h1>
      <Info 
        texto="este es mi texto"
        description="me la suda"
        otro="quien dijo yo"
        />
    </div>
  );
}

export default App;
