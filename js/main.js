"use strict"
// Array di oggetti
const immagini = [
    { url: "01.jpg", titolo: "Riflessioni al Tramonto", descrizione: "Un momento di quiete, seduto sul pontile, mentre il sole saluta il giorno e accoglie la notte." },
    { url: "02.jpg", titolo: "Villaggio sul Lago", descrizione: "Un villaggio colorato abbracciato tra le acque tranquille del lago e le verdi montagne, un ritratto di serenità." },
    { url: "03.jpg", titolo: "Crepuscolo sulla Città di Londra", descrizione: "Quando il sole saluta Londra, la città si illumina in un abbraccio caldo e accogliente.”" },
    { url: "04.jpg", titolo: "Luci Notturne sulla Città", descrizione: "La città si risveglia sotto un cielo stellato, riflettendo la sua bellezza nell’acqua sottostante" },
    { url: "05.jpg", titolo: "Rifugio Tropicale", descrizione: "Un angolo di paradiso dove il cielo azzurro incontra l’oceano cristallino, un luogo dove le palme danzano al ritmo della brezza marina." },
];
console.log({ immagini });

// Variabile Items Immagini
const elementItems = document.querySelector(".items");
console.log({ elementItems });

// Template per gli elementi del carosello
const template = document.querySelector('#item-template');

/* Ciclo per creare gli items con for
for (let i = 0; i < immagini.length; i++) {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector('img');
    const h2 = clone.querySelector('h2');
    const p = clone.querySelector('p');

    img.src = `img/${immagini[i].url}`;
    img.alt = immagini[i].titolo;
    h2.textContent = immagini[i].titolo;
    p.textContent = immagini[i].descrizione;

    elementItems.appendChild(clone);
} 
/* Ciclo per creare gli items con forEARCH */

immagini.forEach((element) => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector('img');
    const h2 = clone.querySelector('h2');
    const p = clone.querySelector('p');

    img.src = `img/${element.url}`;
    img.alt = element.titolo;
    h2.textContent = element.titolo;
    p.textContent = element.descrizione;

    elementItems.appendChild(clone);
})



//Variabile immagine corrente
let elementCorrente = 0;


const elementContainer = document.querySelector(".container");
elementContainer.innerHTML += (`<div class="items-thumb"></div>`);

// Aggiungo la classe Active
const elementActive = document.querySelectorAll(".item");
console.log(elementActive)

elementActive[elementCorrente].classList.add("active");
console.log({ elementCorrente })

// Creo le variabili collegate alle frecce
const elementUp = document.querySelector(".next");
const elementDown = document.querySelector(".prev");
console.log({ elementUp });
console.log({ elementDown });

// Pulsanti auto-play
let time = setInterval(nextFunc, 3000);

const start = document.querySelector(".start");
start.addEventListener("click", function () {
    if (!time) {
        console.log("ho cliccato start");
        time = setInterval(nextFunc, 3000);
    }
});

const stop = document.querySelector(".stop");
stop.addEventListener("click", function () {
    console.log("ho cliccato stop")
    clearInterval(time);
    time = null;
})

elementUp.addEventListener("click", nextFunc);
elementDown.addEventListener("click", prevFunc)



const elementImmagini = document.querySelector(".items-thumb");

/* Ciclo per creare gli items con for 
for (let i = 0; i < immagini.length; i++) {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector('img');
    img.src = `img/${immagini[i].url}`;
    img.alt = immagini[i].titolo;

    elementImmagini.appendChild(clone);
}*/

/* Ciclo per creare gli items con forEARCH */
immagini.forEach((element) => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector("img");
    img.src = `img/${element.url}`;
    img.alt = element.titolo;

    elementImmagini.appendChild(clone);
})


// Funzioni

function nextFunc() {
    elementActive[elementCorrente].classList.remove("active");
    if (elementCorrente === elementActive.length - 1) {
        elementCorrente = 0;
    } else {
        elementCorrente++
    }
    elementActive[elementCorrente].classList.add("active");
    console.log(elementCorrente)
}

function prevFunc() {
    elementActive[elementCorrente].classList.remove("active");
    if (elementCorrente === 0) {
        elementCorrente = elementActive.length - 1;
    } else {
        elementCorrente--
    }
    elementActive[elementCorrente].classList.add("active");
    console.log(elementCorrente)
}


