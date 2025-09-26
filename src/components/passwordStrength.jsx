import React from "react";
import Progress from "./Progress";
function PasswordStrength({ password = "" }) {
  const calculeStrength = () => {
    let score = 0;
    const length = password.length;

    if (length >= 6) {
      const scoreLength = ((length - 6) / (64 - 6)) * 50;
      score += scoreLength;
    }

    if (/[a-z]/.test(password)) score += 10;  
    if (/[A-Z]/.test(password)) score += 10;  
    if (/[0-9]/.test(password)) score += 15;  
    if (/[^a-zA-Z0-9]/.test(password)) score += 15;  

    if (score > 100) score = 100;
    return Math.round(score);
  };

  const strength = calculeStrength();

  

  return (
    <section>
      <p id="force">Force: {strength}%</p>
      <Progress strength={strength} />
    </section>
  );
}

export default PasswordStrength;
