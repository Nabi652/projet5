let titre = document.getElementById("titre");

// titre.textContent = Math.floor(100000 + Math.random() * 900000);
let url = window.location.href;
let order = url.substring(url.lastIndexOf("=") + 1); // pour récuperer depuis l'url le numéro de commande - pour récupérer on enlève la chaine de caractères après le égal
titre.textContent = order;
console.log(url);

//si le tableau n'existe c'est 0
let nbItem = document.getElementById("nombreItem");
let tab = []; // on appelle

// vider le panier dès que je clique sur 'retour page d'accueil'

function retour() {
  localStorage.clear();
  nbItem.innerHTML = 0;
}

//test pour prouver qu'il marche avec des captures
//power point pour la soutenance
