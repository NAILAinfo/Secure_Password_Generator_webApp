import './App.css'
import InputBar from './components/InputBar'
import OutputBar from './components/OutputBar'
import React, { useState } from 'react';

function App() {
  const [options, setOptions] = useState({
    value: 6,
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  
  return (
    <section id="App">
      <h1>Générateur de mot de passe sécurisé</h1>
      <p style={{ marginBottom: "0px" }}>
        Choisis la longueur et les types de caractères, puis génère un mot de passe fort et copie-le en un clic
      </p>
      <div id="DansApp">
          <InputBar onOptionsChange={setOptions}/>
          <OutputBar  options={options} />
      </div>
    </section>
  )
}
export default App
