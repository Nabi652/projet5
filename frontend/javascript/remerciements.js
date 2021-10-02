let titre = document.getElementById("titre");

let url = window.location.href;
let order = url.substring(url.lastIndexOf("=") + 1);
titre.textContent = order;
console.log(url);

let nbItem = document.getElementById("nombreItem");
let tab = [];

function retour() {
  localStorage.clear();
  nbItem.innerHTML = 0;
  window.location = "/index.html";
}
