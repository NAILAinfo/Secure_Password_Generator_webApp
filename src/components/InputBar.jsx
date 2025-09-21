import React, { useState } from 'react'; 

function InputBar() {

    const [value, setValue] = useState(6); 
    const handleChange = (e) => {
            setValue(e.target.value); 
        };

    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    return (
        <section id="youyou" >
            <p id="mot">Longueur : {value}</p>
            <input
                type="range"
                min="6"
                max="64"
                value={value}
                onChange={handleChange}
            />
            {/* Checkbox  */}
            <label>
                <input
                    type="checkbox"
                    checked={lowercase}
                    onChange={(e) => setLowercase(e.target.checked)}
                />
                Lettres minuscules (a-z)
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={uppercase}
                    onChange={(e) => setUppercase(e.target.checked)}
                />
                Lettres MAJUSCULES (A-Z)
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={numbers}
                    onChange={(e) => setNumbers(e.target.checked)}
                />
                Chiffres (0-9)
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={symbols}
                    onChange={(e) => setSymbols(e.target.checked)}
                />
                Caractères spéciaux (!@#...)
            </label>

            <p>
                Astuce : utilise au moins 12 caractères avec majuscules, chiffres et symboles pour un bon niveau de sécurité.
            </p>
        </section>
    );
}

export default InputBar;
