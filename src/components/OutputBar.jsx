import React from 'react';

function OutputBar({ password, onGenerate }) {
   return(
        <section id="youyou">
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Résultat</p>
            <div id="resultat">
                  <input type="text" readOnly value={password} />
                    <button id="gnr"onClick={onGenerate} >Générer</button> 
            </div>
            
        </section>
    );
}

export default OutputBar;