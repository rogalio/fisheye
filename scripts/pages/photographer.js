//Mettre le code JavaScript lié à la page photographer.html
//on cherche url + enleve ?
const ID = window.location.search.substring(1);
console.log(ID);

const PhotographURL = "data/photographers.json";

let response = await fetch(PhotographURL);
// parse la reponse
let data = await response.json();
return data;
