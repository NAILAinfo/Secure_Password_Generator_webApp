import React from "react";

function Progress({ strength = 0 }) { 
    const getColor = () => {
    if (strength < 30) return "red";
    if (strength < 60) return "orange";
    return "green";
  };
  return (  
    <section>
        <progress
        value={strength}
        max="100"
        style={{ accentColor: getColor() }} 
      ></progress>
    </section>)
 }
 export default Progress;