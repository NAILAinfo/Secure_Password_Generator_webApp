(function(){
  // Jeu de caractères
  const sets = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+[]{};:,.<>/?|~"
  };

  // Elements
  const lengthEl = document.getElementById('length');
  const lenLabel = document.getElementById('lenLabel');
  const lowerEl = document.getElementById('lower');
  const upperEl = document.getElementById('upper');
  const numbersEl = document.getElementById('numbers');
  const symbolsEl = document.getElementById('symbols');
  const pwdEl = document.getElementById('password');
  const generateBtn = document.getElementById('generate');
  const copyBtn = document.getElementById('copyBtn');
  const strengthBar = document.getElementById('strengthBar');
  const strengthText = document.getElementById('strengthText');

  // Initial label
  lenLabel.textContent = lengthEl.value;

  lengthEl.addEventListener('input', ()=> lenLabel.textContent = lengthEl.value);

  function secureRandomInt(max){
    // Utilise crypto.getRandomValues si disponible
    if(window.crypto && crypto.getRandomValues){
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    }
    // Fallback (moins sécurisé)
    return Math.floor(Math.random()*max);
  }

  function generatePassword(options){
    const {length, useLower, useUpper, useNumbers, useSymbols} = options;
    let pool = "";
    if(useLower) pool += sets.lower;
    if(useUpper) pool += sets.upper;
    if(useNumbers) pool += sets.numbers;
    if(useSymbols) pool += sets.symbols;

    if(!pool) return "";

    // Assurer au moins un caractère de chaque catégorie cochée (meilleure pratique)
    const required = [];
    if(useLower) required.push(randomChar(sets.lower));
    if(useUpper) required.push(randomChar(sets.upper));
    if(useNumbers) required.push(randomChar(sets.numbers));
    if(useSymbols) required.push(randomChar(sets.symbols));

    const remaining = length - required.length;
    const result = [];

    for(let i=0;i<remaining;i++){
      result.push(randomChar(pool));
    }
    // Mélanger et insérer les requis
    for(const ch of required) result.push(ch);
    shuffleArray(result);
    return result.join('');
  }

  function randomChar(str){
    return str.charAt(secureRandomInt(str.length));
  }

  function shuffleArray(arr){
    // Fisher-Yates sécurisé
    for(let i = arr.length -1; i>0; i--){
      const j = secureRandomInt(i+1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function scorePassword(pwd){
    if(!pwd) return {score:0,label:'Aucun'};
    // Simple heuristique : longueur + types de caractères
    const length = pwd.length;
    let types = 0;
    if(/[a-z]/.test(pwd)) types++;
    if(/[A-Z]/.test(pwd)) types++;
    if(/[0-9]/.test(pwd)) types++;
    if(/[^A-Za-z0-9]/.test(pwd)) types++;
    // score de 0 à 100
    const score = Math.min(100, Math.round((Math.min(length,30)/30)*60 + (types/4)*40));
    let label = 'Faible';
    if(score>80) label='Excellent';
    else if(score>60) label='Fort';
    else if(score>40) label='Moyen';
    return {score,label};
  }

  function updateStrengthUI(pwd){
    const s = scorePassword(pwd);
    strengthBar.style.width = s.score + '%';
    // color map: simple gradient via inline style
    const red = Math.max(0, Math.round(255 - (s.score*2.2)));
    const green = Math.max(0, Math.round((s.score*2.2)));
    strengthBar.style.background = `linear-gradient(90deg, rgb(${red},80,80), rgb(80,${green},120))`;
    strengthText.textContent = s.label + " — " + s.score + "%";
  }

  // Event handlers
  generateBtn.addEventListener('click', ()=>{
    const options = {
      length: parseInt(lengthEl.value,10),
      useLower: lowerEl.checked,
      useUpper: upperEl.checked,
      useNumbers: numbersEl.checked,
      useSymbols: symbolsEl.checked
    };
    const pwd = generatePassword(options);
    if(!pwd){
      pwdEl.textContent = 'Choisis au moins un type de caractères';
      updateStrengthUI('');
      return;
    }
    pwdEl.textContent = pwd;
    updateStrengthUI(pwd);
  });

  copyBtn.addEventListener('click', async ()=>{
    const text = pwdEl.textContent;
    if(!text || text.startsWith('—') || text.includes('Choisis')) return;
    try{
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copié ✓';
      setTimeout(()=> copyBtn.textContent = 'Copier', 1500);
    }catch(e){
      // Fallback: sélection de texte
      const range = document.createRange();
      range.selectNodeContents(pwdEl);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      try{
        document.execCommand('copy');
        copyBtn.textContent = 'Copié ✓';
        setTimeout(()=> copyBtn.textContent = 'Copier', 1500);
      }catch(err){
        alert('Impossible de copier automatiquement. Sélectionne le mot de passe et copie manuellement.');
      }finally{
        sel.removeAllRanges();
      }
    }
  });

  // Génération initiale
  generateBtn.click();

})();