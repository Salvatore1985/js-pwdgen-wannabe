//*RECUPERO L'ELEMENTO DAL DOM

let elementName = document.getElementById("name");
let elementLastName = document.getElementById("last-name");
let elementColor = document.getElementById("my-color");
let elementPassword = document.getElementById("password-generator");


//* CHIEDO ALL'UTENTE DI INSERIRE I DATI
const userName = prompt("Qual'è il tuo Nome ?", "Salvatore");
console.log("Il tuo Nome è :", userName);

const userLastName = prompt("Qual'è il tuo Cognome ?", "Cascone");
console.log("Il tuo Cognome è :", userLastName);

const userColor = prompt("Qual'è il tuo colore preferito ?", "Verde");
console.log("Il tuo Colore preferito è :", userColor);


//* INSERISCO I DATI DEL DOM

elementName.innerHTML = userName;
elementLastName.innerHTML = userLastName;
elementColor.innerHTML = userColor;
elementPassword.innerHTML = userName + userLastName + userColor + "21";

console.log("La tua Password è :", elementPassword.innerHTML);