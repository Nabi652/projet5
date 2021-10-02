let url = window.location.href;

let id = url.substring(url.lastIndexOf("=") + 1);

let produit;
let url2 = "http://localhost:3000/api/teddies/" + id;
fetch(url2)
  .then((response) => response.json())
  .then((ours) => {
    console.log(ours);
    afficher(ours);
    produit = ours;
  });

function afficher(ours) {
  let boxEnsemble = document.createElement("div");

  boxEnsemble.setAttribute("class", "ensemble-photo-infos");

  let main = document.querySelector("main");

  main.appendChild(boxEnsemble);

  let boxImage = document.createElement("div");

  boxImage.setAttribute("class", "box-img");

  boxEnsemble.appendChild(boxImage);

  let img = document.createElement("img");

  img.setAttribute("id", "oursImage");

  img.setAttribute("src", ours.imageUrl);

  boxImage.appendChild(img);

  let ensembleInfos = document.createElement("div");

  ensembleInfos.setAttribute("class", "ensemble-informations");

  boxEnsemble.appendChild(ensembleInfos);

  let nomOurs = document.createElement("h2");

  nomOurs.setAttribute("class", "nom-ours");

  nomOurs.textContent = ours.name;

  ensembleInfos.appendChild(nomOurs);

  let description = document.createElement("p");

  description.setAttribute("class", "description");

  description.textContent = ours.description;

  ensembleInfos.appendChild(description);

  let boxPrixBouton = document.createElement("div");

  boxPrixBouton.setAttribute("class", "box-prix-bouton");

  ensembleInfos.appendChild(boxPrixBouton);

  let couleurProduit = document.createElement("p");

  couleurProduit.setAttribute("class", "couleur-produit");

  boxPrixBouton.appendChild(couleurProduit);

  couleurProduit.textContent = "Choisir la couleur du produit";

  let selection = document.createElement("select");

  selection.setAttribute("id", "couleurs");

  couleurProduit.appendChild(selection);

  let tableauCouleur = ours.colors;

  for (let couleur of tableauCouleur) {
    let option = document.createElement("option");

    option.textContent = couleur;

    option.setAttribute("value", couleur);

    selection.appendChild(option);
  }

  let price = document.createElement("h3");

  price.setAttribute("class", "prix");

  boxPrixBouton.appendChild(price);

  price.textContent = parseFloat(ours.price / 100) + "€";

  let bouton = document.createElement("button");

  bouton.textContent = "Ajouter au panier";

  bouton.setAttribute("onclick", "maFonctionAjout()");

  boxPrixBouton.appendChild(bouton);

  let ajouterAuPanier = document.createElement("a");

  ajouterAuPanier.setAttribute("class", "ajouter-panier");

  boxPrixBouton.appendChild(ajouterAuPanier);

  ajouterAuPanier.appendChild(bouton);

  let deroulant = document.getElementById("quantites");

  boxPrixBouton.appendChild(deroulant);

  let boxEnsemble1 = document.createElement("div");
  boxEnsemble1.setAttribute("class", "ensemble1");
  ensembleInfos.appendChild(boxEnsemble1);
  boxEnsemble1.appendChild(ajouterAuPanier);
  boxEnsemble1.appendChild(deroulant);

  let nbItem = document.getElementById("nombreItem");
  if (localStorage.getItem("panier") == null) {
    nbItem.innerHTML = 0;
  } else {
    let tab = JSON.parse(localStorage.getItem("panier"));
    nbItem.innerHTML = tab.length;
  }
}

const maFonctionAjout = () => {
  let panierStr = localStorage.getItem("panier");
  //
  if (panierStr == null) {
    panier = [];
  } else {
    panier = JSON.parse(panierStr);
  }
  let ligne = {};
  ligne.qte = document.getElementById("quantites").value;
  ligne.produit = produit;
  ligne.couleur = document.getElementById("couleurs").value;

  panier.push(ligne);
  let nbItem = document.getElementById("nombreItem");
  nbItem.innerHTML = panier.length;
  localStorage.panier = JSON.stringify(panier);
};
