const gomb = document.getElementById('gomb');
const cim = document.getElementById('cim');

gomb.addEventListener('click', () => {
    // Generálunk egy véletlen színt
    const randomSzin = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    cim.innerText = "Bumm! Megváltozott a szín! ✨";
    document.body.style.backgroundColor = randomSzin;
});