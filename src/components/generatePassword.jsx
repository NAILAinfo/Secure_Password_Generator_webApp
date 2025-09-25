import React from "react";
import InputBar from "./InputBar";
import OutputBar from "./OutputBar";

function E_ensemble({ includeLowercase, includeUppercase, includeNumbers, includeSymbols }) {
  let ensemble = "";
  if (includeLowercase) ensemble += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) ensemble += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) ensemble += "0123456789";
  if (includeSymbols) ensemble += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  return ensemble;
}

function generer(ensemble, length) {
  let resultat = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * ensemble.length);
    resultat += ensemble[index];
  }
  return resultat;
}

function exception() {
  throw new Error("Tu dois choisir au moins une option");
}

function GeneratePassword({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols }) {
  let mot = "";

  try {
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      exception();
    }

    mot = generer(
      E_ensemble({ includeLowercase, includeUppercase, includeNumbers, includeSymbols }),
      length
    );
  } catch (e) {
    console.error("Erreur attrapée :", e.message);
    mot = "⚠️ Aucune option sélectionnée !";
  }

  return (
    <div>
      <p>{mot}</p>
    </div>
  );
}

export default GeneratePassword;
