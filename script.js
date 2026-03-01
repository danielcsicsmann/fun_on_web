// 1. Elemek kijelölése a HTML-ből
const inditoGomb = document.getElementById('gomb');
const cimsor = document.getElementById('cim');
const valasztoMenu = document.getElementById('funkcio-valaszto');
const kockaMegjelenito = document.getElementById('kocka-helye');

// 2. A fő funkció, ami a gombnyomásra indul
inditoGomb.addEventListener('click', () => {
    
    // Megnézzük, éppen mi van kiválasztva a menüben
    const aktualisValasztas = valasztoMenu.value;

    if (aktualisValasztas === 'szin') {
        // --- HÁTTÉRSZÍN VÁLTOZTATÁSA ---
        const hexSzamok = '0123456789ABCDEF';
        let szin = '#';
        for (let i = 0; i < 6; i++) {
            szin += hexSzamok[Math.floor(Math.random() * 16)];
        }
        
        document.body.style.backgroundColor = szin;
        cimsor.innerText = `Új szín: ${szin} 🎨`;
        kockaMegjelenito.innerText = ""; // Eltüntetjük a kockát, ha ott volt
    } 
    else if (aktualisValasztas === 'kocka') {
        // --- DOBÓKOCKA JÁTÉK ---
        const dobas = Math.floor(Math.random() * 6) + 1;
        const kockaEmoji = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        
        cimsor.innerText = "Dobás eredménye:";
        kockaMegjelenito.innerText = kockaEmoji[dobas];
        
        // Visszaállítjuk a hátteret semlegesre, hogy látszódjon a kocka
        document.body.style.backgroundColor = "#1a1a1a";
    }
});