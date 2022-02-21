//*RECUPERO L'ELEMENTO DAL DOM

let elementName = document.getElementById("name");
let elementLastName = document.getElementById("last-name");
let elementColor = document.getElementById("my-color");
let elementPassword = document.getElementById("password-generator");


//* CHIEDO ALL'UTENTE DI INSERIRE I DATI
const userName = prompt("Qual'è il tuo Nome ?", "Salvatore");
console.log(userName);

const userLastName = prompt("Qual'è il tuo Cognome ?", "Cascone");
console.log(userLastName);

const userColor = prompt("Qual'è il tuo colore preferito ?", "Verde");
console.log(userColor);


//* INSERISCO I DATI DEL DOM

elementName.innerHTML = userName;
elementLastName.innerHTML = userLastName;
elementColor.innerHTML = userColor;
elementPassword.innerHTML = userName + userLastName + userColor + "21";
