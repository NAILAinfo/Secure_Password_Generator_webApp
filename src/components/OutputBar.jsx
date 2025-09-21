import React from 'react';

function OutputBar() {
   return(
        <section id="youyou" >
            <p>Résultat</p>

            <div id="resultat">
                               
                <button>Générer</button> 
                <button>Copier</button>
            </div>

            <div>
                <p>Force</p>
                <p>Fort :  </p>
            </div>

            <p>Options avancées <br />Tu peux régénérer autant que nécessaire. Clique Copier pour coller dans ton gestionnaire de mots de passe.</p>
        </section>
    )
}

export default OutputBar;