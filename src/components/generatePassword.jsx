function exception() {
  throw new Error("Tu dois choisir au moins une option");
}

function E_ensemble({ lowercase, uppercase, numbers, symbols }) { // Modifié ici
  let ensemble = "";

  if (lowercase) ensemble += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) ensemble += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) ensemble += "0123456789";
  if (symbols) ensemble += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

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

export function generatePassword({ length, lowercase, uppercase, numbers, symbols }) { // Modifié ici
  if (!lowercase && !uppercase && !numbers && !symbols) { // Modifié ici
    exception();
  }

  const pool = E_ensemble({ lowercase, uppercase, numbers, symbols }); // Modifié ici

  const resultat = [];

  // garantir au moins un caractère de chaque type choisi
  if (lowercase) resultat.push(pickRandomFrom("abcdefghijklmnopqrstuvwxyz")); // Modifié ici
  if (uppercase) resultat.push(pickRandomFrom("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Modifié ici
  if (numbers) resultat.push(pickRandomFrom("0123456789")); // Modifié ici
  if (symbols) resultat.push(pickRandomFrom("!@#$%^&*()_+~`|}{[]:;?><,./-=")); // Modifié ici

  // compléter jusqu'à la longueur demandée
  while (resultat.length < length) {
    resultat.push(pickRandomFrom(pool));
  }

  return shuffle(resultat).join("");
}