const gomb = document.getElementById('gomb');
const cim = document.getElementById('cim');

gomb.addEventListener('click', () => {
    // Generálunk egy véletlen színt
    const randomSzin = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    cim.innerText = "Bumm! Megváltozott a szín! ✨";
    document.body.style.backgroundColor = randomSzin;
});

const gomb = document.getElementById('gomb');
const cim = document.getElementById('cim');
const valaszto = document.getElementById('funkcio-valaszto');
const kockaHelye = document.getElementById('kocka-helye');

gomb.addEventListener('click', () => {
    const kivalasztottFunkcio = valaszto.value;

    if (kivalasztottFunkcio === 'szin') {
        // --- Háttérszín funkció ---
        const randomSzin = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomSzin;
        cim.innerText = "Szín megváltoztatva! 🎨";
        kockaHelye.innerText = ""; // Töröljük a kockát, ha volt
    } 
    else if (kivalasztottFunkcio === 'kocka') {
        // --- Dobókocka funkció ---
        const dobas = Math.floor(Math.random() * 6) + 1;
        cim.innerText = `Dobás eredménye: ${dobas}`;
        
        // Emoji kockák használata a látvány kedvéért
        const kockak = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        kockaHelye.innerText = kockak[dobas];
        
        // Visszaállítjuk a hátteret valami fixre, hogy látszódjon a kocka
        document.body.style.backgroundColor = "#1a1a1a";
    }
});