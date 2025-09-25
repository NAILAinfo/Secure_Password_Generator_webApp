import React from "react";
import InputBar from "./InputBar";
import OutputBar from "./OutputBar";

function exception() {
  throw new Error("Tu dois choisir au moins une option");
}

function E_ensemble({ includeLowercase, includeUppercase, includeNumbers, includeSymbols }) {
  let ensemble = "";

  if (includeLowercase) ensemble += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) ensemble += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) ensemble += "0123456789";
  if (includeSymbols) ensemble += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  return ensemble;
}

function pickRandomFrom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function generer({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols }) {
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    exception();
  }

  const pool = E_ensemble({ includeLowercase, includeUppercase, includeNumbers, includeSymbols });

  const resultat = [];

  if (includeLowercase) {
    resultat.push(pickRandomFrom("abcdefghijklmnopqrstuvwxyz"));
  }
  if (includeUppercase) {
    resultat.push(pickRandomFrom("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  }
  if (includeNumbers) {
    resultat.push(pickRandomFrom("0123456789"));
  }
  if (includeSymbols) {
    resultat.push(pickRandomFrom("!@#$%^&*()_+~`|}{[]:;?><,./-="));
  }

  while (resultat.length < length) {
    resultat.push(pickRandomFrom(pool));
  }

  return shuffle(resultat).join("");
}

function GeneratePassword({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols }) {
  let mot = "";

  try {
    mot = generer({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols });
  } catch (e) {
    alert(e.message);
    mot = "";
  }

  return (
    <div>
      <p>{mot}</p>
    </div>
  );
}

export default GeneratePassword;
