import React from "react";

function Progress({ strength = 0 }) { 
    return (  
        <section>
            <progress
                value={strength}
                max="100"   
            >
            </progress>
        </section>
    );
}

export default Progress;