import React, { useState, useEffect } from 'react'; 

function InputBar({ onOptionsChange }) {
    const [length, setLength] = useState(10);
    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    useEffect(() => {
        onOptionsChange({
            value: length,
            lowercase,
            uppercase,
            numbers,
            symbols
        });
    }, [length, lowercase, uppercase, numbers, symbols, onOptionsChange]);

    return (
        <section id="youyou">
            <p id="mot">Longueur : {length}</p>
            <input
                id="input1"
                type="range"
                min="6"
                max="64"
                value={length}  
                onChange={(e) => setLength(parseInt(e.target.value, 10))}
            />

            <label>
                <input
                    type="checkbox"
                    checked={lowercase}
                    onChange={(e) => setLowercase(e.target.checked)}
                />
                <span style={{ marginLeft: "8px" }}>Lettres minuscules (a-z)</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={uppercase}
                    onChange={(e) => setUppercase(e.target.checked)}
                />
                <span style={{ marginLeft: "8px" }}>Lettres MAJUSCULES (A-Z)</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={numbers}
                    onChange={(e) => setNumbers(e.target.checked)}
                />
                <span style={{ marginLeft: "8px" }}>Chiffres (0-9)</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={symbols}
                    onChange={(e) => setSymbols(e.target.checked)}
                />
                <span style={{ marginLeft: "8px" }}>Caractères spéciaux (!@#...)</span>
            </label>

            <p>
                Astuce : utilise au moins 12 caractères avec majuscules, chiffres et symboles pour un bon niveau de sécurité.
            </p>
        </section>
    );
}

export default InputBar;
