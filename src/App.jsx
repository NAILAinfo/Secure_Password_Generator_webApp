import './App.css'
import InputBar from './components/InputBar'
import OutputBar from './components/OutputBar'
import React, { useState } from 'react';

function App() {
  const [options, setOptions] = useState({
    value: 10,
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState("");

// === Fonction de génération ===
  const generatePassword = () => {
    const { value, lowercase, uppercase, numbers, symbols } = options;

    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("Veuillez sélectionner au moins une option.");
      return;
    }

    const sets = [];
    if (lowercase) sets.push("abcdefghijklmnopqrstuvwxyz");
    if (uppercase) sets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (numbers) sets.push("0123456789");
    if (symbols) sets.push("!@#$%^&*()_+[]{}|;:,.<>?/~`-=");

    const minRequired = sets.length;
    if (value < minRequired) {
      alert(`La longueur doit être au moins ${minRequired}.`);
      return;
    }

    // Helpers random sécurisé
    const secureRandomFloat = () => {
      const r = window.crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff;
      return Math.min(r, 0.9999999999999999);
    };
    const secureRandomInt = (max) => Math.floor(secureRandomFloat() * max);

    const shuffleArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    // au moins 1 char de chaque set choisi
    const requiredChars = sets.map(set => set[secureRandomInt(set.length)]);

    // pool totale
    const pool = sets.join("");

    // remplir le reste
    const remainingCount = value - requiredChars.length;
    const remainingChars = [];
    for (let i = 0; i < remainingCount; i++) {
      remainingChars.push(pool[secureRandomInt(pool.length)]);
    }

    // mélanger et créer le mot de passe
    const allChars = shuffleArray([...requiredChars, ...remainingChars]);
    const result = allChars.join("");
    setPassword(result);
  };


  return (
    <section id="App">

      <h1>Générateur de mot de passe sécurisé</h1>
      <p style={{ marginBottom: "0px" }}>
        Choisis la longueur et les types de caractères, puis génère un mot de passe fort et copie-le en un clic
      </p>

      <div id="DansApp">
          <InputBar options={options} onOptionsChange={setOptions} />
          <OutputBar  options={options} password={password} onGenerate={generatePassword} />
      </div>
    </section>
  )
}
export default App
