import React from 'react';

function OutputBar() {
   return(
        <section id="youyou" >
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Résultat</p>

            <div id="resultat">
                               
                <button>Générer</button> 
                <button>Copier</button>
            </div>

           
                <p>Force   </p>
                <p>Fort :  </p>
        
            <p>Options avancées <br />Tu peux régénérer autant que nécessaire. Clique Copier pour coller dans ton gestionnaire de mots de passe.</p>
        </section>
    )
}

export default OutputBar;