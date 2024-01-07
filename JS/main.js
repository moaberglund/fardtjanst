"use strict";

//MENYN

//element
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//lyssnare
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

//funktion
function toggleMenu() {
    //hitta menyn
    let navMenuEl = document.getElementById("nav-menu");

    //kolla vad display är inställt som (none/block)
    let style = window.getComputedStyle(navMenuEl);

    //ändra mellan none/block beroende på
    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }


}

// BOKADE RESOR listan, visa dölj

//element
let chevronDown = document.getElementById("chevron-down");
let chevronUp = document.getElementById("chevron-up");

//lyssnare
chevronDown.addEventListener("click", listDisplay);
chevronUp.addEventListener("click", listDisplay);

//function
function listDisplay() {
    //hitta diven
    let listEl = document.getElementById("trips-list");
    //hitta orginal knappen
    let chevEl = document.getElementById("chevron-down");

    //display settings 
    let listStyle = window.getComputedStyle(listEl);
    let chevStyle = window.getComputedStyle(chevEl);

    //ändra mellan none/block för visa eller ej (drop-down listan)
    if (listStyle.display === "none") {
        listEl.style.display = "block";
    } else {
        listEl.style.display = "none";
    }
    //ändra mellan att visa eller ej (orginal knappen)
    if (chevStyle.display === "block") {
        chevEl.style.display = "none";
    } else {
        chevEl.style.display = "block";
    }
}
//boka ny resa
function confirmFunction() {
    confirm("Är du säker?");
}

//bokade resor-lista
function editFunction() {
    confirm("Vill du göra ändringar för markerad resa?");
}
function deleteFunction() {
    confirm("Är du säker på att du vill ta bort denna resa?");
}

//profil-sidan pop-up
function skoj() {
    confirm("Det går för närvarande inte att göra ändringar, sidan är under uppehåll.");
}