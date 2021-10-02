let main = document.querySelector("main");

let boxPanier = document.createElement("div");

boxPanier.setAttribute("class", "box-panier");

main.appendChild(boxPanier);

let ligne1 = document.createElement("ul");

boxPanier.appendChild(ligne1);

let li1 = document.createElement("li");

li1.setAttribute("class", "produit");

li1.textContent = "Produit";

ligne1.appendChild(li1);

let li2 = document.createElement("li");

li2.setAttribute("class", "quantite");

li2.textContent = "Quantité";

ligne1.appendChild(li2);

let li3 = document.createElement("li");

li3.setAttribute("class", "prix");

li3.textContent = "Prix";

ligne1.appendChild(li3);

let li5 = document.createElement("li");

li5.setAttribute("class", "supprimer");

li5.textContent = "Supprimer";

ligne1.appendChild(li5);

let nbItem = document.getElementById("nombreItem");
let tab = []; // on appelle
if (localStorage.getItem("panier") == null) {
  nbItem.innerHTML = 0;
} else {
  tab = JSON.parse(localStorage.getItem("panier"));
  nbItem.innerHTML = tab.length;
}

function openForm() {
  location.href = "./formulaire.html";
}

let tableau = document.getElementById("tableau");
let template = document.getElementById("ligne");
let total = 0;
for (let ligne of tab) {
  let clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[1].textContent = ligne.qte;
  td[0].innerHTML = ligne.produit.name + "<br><i>" + ligne.couleur + "</i>";
  let totalLigne = (ligne.qte * ligne.produit.price) / 100;
  td[2].textContent = ligne.produit.price / 100 + "€";
  td[3].textContent = totalLigne + "€";
  total += totalLigne;

  tableau.appendChild(clone);
}

let clone = template.content.cloneNode(true);

let td = clone.querySelectorAll("td");
td[2].innerHTML = "<b>TOTAL</b>";
td[3].innerHTML = "<b>" + total + "€</b>";
td[4].innerHTML = "";
tableau.appendChild(clone);

function enlever(btn) {
  let tr = btn.parentElement.parentElement;
  let indice = tr.rowIndex;
  tr.remove();
  tab.splice(indice, 1);
  localStorage.panier = JSON.stringify(tab);
  location.reload();
}
