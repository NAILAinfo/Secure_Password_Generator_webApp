import React from 'react';
import { useState } from 'react';

import { generatePassword } from './generatePassword';
function OutputBar({ options }) {

    const [password, setPassword] = useState('');

    const handleGenerate = () => {
        try {
            const pwd = generatePassword(options);
            setPassword(pwd);
        } catch (error) {
            alert(error.message); // Affiche l'exception si aucune option n'est choisie
        }
    };
     const handleCopy = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            alert('Mot de passe copié !');
        }
    };

   return(
        <section id="youyou">
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Résultat</p>
            <div id="resultat">
                <p id="final">{password}</p>   
                <button id="gnr"onClick={handleGenerate} >Générer</button> 
                <button id="copy" className="btn btn-primary" onClick={handleCopy}>
                </button>
            </div>
            
        </section>
    );
}

export default OutputBar;