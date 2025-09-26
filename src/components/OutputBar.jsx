import React from 'react';
import PasswordStrength from './passwordStrength';
function OutputBar({ password, onGenerate }) {
    const handleCopy = () => {
        if (!password) {
            alert("Aucun mot de passe à copier.");
            return;
        }
        navigator.clipboard.writeText(password)
            .then(() => alert("Mot de passe copié dans le presse-papiers ✅"))
            .catch(() => alert("Erreur lors de la copie ❌"));
    };

   return(
        <section id="youyou">
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Résultat</p>
            <div id="resultat">
                  <input id="final" type="text" readOnly value={password} />
            </div>
            <div id="buttons">
            <button id="gnr"onClick={onGenerate} >Générer</button> 
            <button id="copy" onClick={handleCopy}>Copier</button>
            </div>
            <PasswordStrength password={password} />
        </section>
    );
}

export default OutputBar;