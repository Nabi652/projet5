//création d'une balise <main>
let main = document.querySelector("main");

//creation div class= box-panier
let boxPanier = document.createElement("div");

//ajout class = box-prix à la div (variable)
boxPanier.setAttribute("class", "box-panier");

//ajout de la div à <main>
main.appendChild(boxPanier);

//creation balise <ul>
let ligne1 = document.createElement("ul");

//ajouter ul à box-prix (variable boxPanier)
boxPanier.appendChild(ligne1);

//creation du premier <li>
let li1 = document.createElement("li");

//ajout class à <li>
li1.setAttribute("class", "produit");

//ajout de contenu à li1
li1.textContent = "Produit";

//ajout de <li> à <ul>
ligne1.appendChild(li1);

//creation du deuxième <li>
let li2 = document.createElement("li");

//ajout class à <li>
li2.setAttribute("class", "quantite");

//ajout de contenu à li1
li2.textContent = "Quantité";

//ajout de <li> à <ul>
ligne1.appendChild(li2);

//creation du troisième <li>
let li3 = document.createElement("li");

//ajout class à <li>
li3.setAttribute("class", "prix");

//ajout de contenu à li3
li3.textContent = "Prix";

//ajout de <li> à <ul>
ligne1.appendChild(li3);

// //creation du quatrième <li>
// let li4 = document.createElement("li");

// //ajout de contenu à li1
// li4.textContent = "Total";

// //ajout de <li> à <ul>
// ligne1.appendChild(li4);

//creation du 5ème <li>
let li5 = document.createElement("li");

//ajout class à <li>
li5.setAttribute("class", "supprimer");

//ajout de contenu à li1
li5.textContent = "Supprimer";

//ajout de <li> à <ul>
ligne1.appendChild(li5);
let boutonNumeroCommande = document.getElementsByClassName("paiementBtn");
let boutonPoursuivre = document.getElementsByClassName("poursuivreBtn");
console.log(boutonPoursuivre);
let numeroCommande = document.querySelector("h1");

// formulaire
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";

  //si on ferme le popup alors le h1 (numero de commande)apparait:
  if (closeForm) {
    numeroCommande.style = "display:inherit";
    numeroCommande.style.textAlign = "center";
    numeroCommande.innerHTML =
      /*genérer numéro aléatoire */
      "Merci pour votre Commande <br> Numéro de commande " +
      Math.floor(100000 + Math.random() * 900000);
    let tableau = document.getElementById("tableau");
    let template = document.getElementById("ligne");
    /* disparation du panier quand on clique sur aller vers paiement*/
    tableau.style.display = "none";
    template.style.display = "none";
    boxPanier.style.display = "none";
    let boutonTest = document.getElementById("btnRetour");
    boutonTest.innerHTML = "retour à l'accueil";
    boutonTest.style.padding = "10px";
    // boutonTest.style.display = "none";
  }
}

//si le tableau n'existe c'est 0
let nbItem = document.getElementById("nombreItem");
let tab = []; // on appelle
if (localStorage.getItem("panier") == null) {
  nbItem.innerHTML = 0;
} else {
  tab = JSON.parse(localStorage.getItem("panier"));
  nbItem.innerHTML = tab.length; // longueur du tableau
  //quand on vient ajouter un produit
}

//dfinir une zone d'accueil //
let tableau = document.getElementById("tableau");
let template = document.getElementById("ligne");
let total = 0;
for (let ligne of tab) {
  // tab = local storage qui s'affiche
  //ci dessous on va cloner le tableau :
  let clone = template.content.cloneNode(true);
  //on selectionn tous les td dans un tableau
  let td = clone.querySelectorAll("td"); // on selectionne dans le clone
  td[0].innerHTML = ligne.produit.name + "<br><i>" + ligne.couleur + "</i>";
  td[1].textContent = ligne.qte;
  let totalLigne = (ligne.qte * ligne.produit.price) / 100;
  td[2].textContent = ligne.produit.price / 100 + "€";
  td[3].textContent = totalLigne;
  total += totalLigne;
  //on met le clone dans le tableau
  tableau.appendChild(clone);
}

let clone = template.content.cloneNode(true);
//on selectionn tous les td dans un tableau
let td = clone.querySelectorAll("td"); // on selectionne dans le clone
td[2].innerHTML = "<b>TOTAL</b>";
td[3].innerHTML = "<b>" + total + "</b>";
td[4].innerHTML = ""; //enlever le bouton devant total
tableau.appendChild(clone);

//on a refait une ligne pour avoir le total

//bouton
function enlever(btn) {
  // btn.remove();
  //btn parent element = td == > tr : btn.parentElement(=td).parentElement(=tr)
  let tr = btn.parentElement.parentElement;

  let indice = tr.rowIndex;
  tr.remove();
  tab.splice(indice, 1);
  localStorage.panier = JSON.stringify(tab); // a la place de setItem
  location.reload();
}

// au clic un numéro de commande apparait //
