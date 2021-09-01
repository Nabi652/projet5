let url = window.location.href;
//"./produit.html?id=1234"

//substring découper une chaine de caractères à partir d'une position.
//On lui donne à partir de quand on la découpe. On va récuperer le caractère
let id = url.substring(url.lastIndexOf("=") + 1);

//lastindexof retourne la position du caractère
// alert(id); //1234
//création de variable vide
let produit; // creation du produit vide
let url2 = "http://localhost:3000/api/teddies/" + id;
fetch(url2)
  .then((response) => response.json())
  .then((ours) => {
    console.log(ours);
    afficher(ours);
    //quand je recupere le produit, j'ai "ours" (ours stocké dans une ligne)
    produit = ours; /// fetch das le quel on recupere l'ours
  });

//-------------------------------------------------------
// création fonction ours pour les images
function afficher(ours) {
  // création div class=ensemble-photo-infos qui va regrouper la photo et les infos
  let boxEnsemble = document.createElement("div");

  //donner une class à boxEnsemble (class = ensemble-photo-infos)
  boxEnsemble.setAttribute("class", "ensemble-photo-infos");

  //selection main
  let main = document.querySelector("main");

  //ajout de la div class= ensemble-photo-infos à main
  main.appendChild(boxEnsemble);

  //création de la div box-img qui regroupera l'image
  let boxImage = document.createElement("div");

  //donner une class à boxImage (class = box-img)
  boxImage.setAttribute("class", "box-img");

  //ajout de la div class box-img à la div ensemble-photo-infos (variable: boxEnsemble)
  boxEnsemble.appendChild(boxImage);

  //creation de la balise img
  let img = document.createElement("img");

  //donner id à image
  img.setAttribute("id", "oursImage");

  //attribution d'un src (ours.imageUrl) à la variable img
  img.setAttribute("src", ours.imageUrl);

  // ajouter à la div box-img(variable boxImage)
  boxImage.appendChild(img);

  //creation div class=ensemble-informations
  let ensembleInfos = document.createElement("div");

  //ajout d'une class div (variable ensembleInfos)
  ensembleInfos.setAttribute("class", "ensemble-informations");

  //ajout de la div à  la div photos-infos-photos(variable:boxEnsemble)
  boxEnsemble.appendChild(ensembleInfos);

  //création d'une balise <h2> pour le nom des ours
  let nomOurs = document.createElement("h2");

  //donner une class à h2
  nomOurs.setAttribute("class", "nom-ours");

  //attribution valeur à h2
  nomOurs.textContent = ours.name;

  //ajout du h2 à la div ensemble-informations
  ensembleInfos.appendChild(nomOurs);

  //créaton d'une balise <p> pour la description
  let description = document.createElement("p");

  //ajout d'une class à la balise <p> (class= description)
  description.setAttribute("class", "description");

  //ajout d'une valeur à p
  description.textContent = ours.description;

  //ajout de p à la balise ensemble-informations (variable:ensembleInfos)
  ensembleInfos.appendChild(description);

  //création balise div class = box-prix-bouton
  let boxPrixBouton = document.createElement("div");

  //ajout d'une class à la div (class = box-prix-bouton)
  boxPrixBouton.setAttribute("class", "box-prix-bouton");

  //ajout de la div (class = box-prix-bouton variable : boxPrixBouton) à la
  //div class= ensemble-informations (variable ensembleInfos)
  ensembleInfos.appendChild(boxPrixBouton);

  //creation d'une balise <p> pour choisir la couleur (class = couleur-produit)
  let couleurProduit = document.createElement("p");

  //ajout d'une class à p (class couleur-produit)
  couleurProduit.setAttribute("class", "couleur-produit");

  //ajout du p à la div (class = box-prix-bouton ou variable boxPrixBouton)
  boxPrixBouton.appendChild(couleurProduit);

  //ajout du contenu au <p> class couleur-produit (variable couleurProduit)
  couleurProduit.textContent = "Choisir la couleur du produit";

  //création balise select pour menu déroulant couleur
  let selection = document.createElement("select");

  //ajout d'un ID à <select>
  selection.setAttribute("id", "couleurs");

  //ajout de select (id: couleurs, variable : selection) à la balise couleur-produit (variable couleurProduit)
  couleurProduit.appendChild(selection);

  //création d'une variable tableau pour les couleurs
  let tableauCouleur = ours.colors;

  // création d'un tableau de couleur et de la variable "couleur" qui représentera chaque couleur
  for (let couleur of tableauCouleur) {
    //création d'un menu déroulant pour les couleurs
    let option = document.createElement("option");

    //ajout de la variabel couleur à la balise option
    option.textContent = couleur;

    //ajout de la valeur et de la valuer à option
    option.setAttribute("value", couleur);

    //attribuer option à select
    selection.appendChild(option);
  }
  // //creation d'une balise <h3> pour le prix
  let price = document.createElement("h3");

  // //ajout d'une class à h3 (class :prix)
  price.setAttribute("class", "prix");
  // //ajout balise h3 à div box-prix-bouton (variable boxPrixBouton)
  boxPrixBouton.appendChild(price);

  //donner valeur à prix

  price.textContent = parseFloat(ours.price / 100) + "€";

  // creation balise <button>
  let bouton = document.createElement("button");

  // donner valeur à bouton
  bouton.textContent = "Ajouter au panier";

  //ajout onclick à bouton
  bouton.setAttribute("onclick", "maFonctionAjout()");

  //   ajouter <button> à div class="box-prix-bouton (variable boxPrixBouton)
  boxPrixBouton.appendChild(bouton);

  //création d'une balise <a> pour le bouton ajouter
  let ajouterAuPanier = document.createElement("a");

  //donner une class à la balise <a> (class = ajouter-panier)
  ajouterAuPanier.setAttribute("class", "ajouter-panier");

  //ajout de <a> à la div box-prix-bouton (variable boxPrixBouton)
  boxPrixBouton.appendChild(ajouterAuPanier);

  //ajout du bouton (variable : bouton) à <a>
  ajouterAuPanier.appendChild(bouton);

  //selection menu deroulant quantites
  let deroulant = document.getElementById("quantites");

  //ajout à box-prix
  boxPrixBouton.appendChild(deroulant);

  //creation div pour ensemle bouton et menu deroulant quantité

  let boxEnsemble1 = document.createElement("div");

  boxEnsemble1.setAttribute("class", "ensemble1");

  ensembleInfos.appendChild(boxEnsemble1);

  boxEnsemble1.appendChild(ajouterAuPanier);
  boxEnsemble1.appendChild(deroulant);

  //pour ne pas perdre le panier au chargement
  //si le tableau n'existe c'est 0
  let nbItem = document.getElementById("nombreItem"); // span qui contient numéro près du panier
  if (localStorage.getItem("panier") == null) {
    // si rien dans tableau alors renvoie null (0)
    nbItem.innerHTML = 0;
  } else {
    //si qqchose dans tableau alors renvoie la longueur du tableau
    let tab = JSON.parse(localStorage.getItem("panier"));
    nbItem.innerHTML = tab.length; // longueur du tableau
    //quand on vient ajouter un produit
  }
}

const maFonctionAjout = () => {
  let panierStr = localStorage.getItem("panier"); // panier n'est pas un objet mais une chaine
  //
  if (panierStr == null) {
    //si panierstr vide alors
    panier = []; //on crée tableau vide
  } else {
    //sinon : on ajoute au panier json.parse(panierstr)
    panier = JSON.parse(panierStr);
  }
  //dans notre panier on aura un objet ligne
  //tableau ligne sur une ligne
  let ligne = {};
  //menu déroulant : ligne.qte = docgetelementbyId(selecteur menu deourlant).value
  ligne.qte = document.getElementById("quantites").value;
  ligne.produit = produit; //le prix, les options
  ligne.couleur = document.getElementById("couleurs").value;

  // autre façon d'écrire un objet !!
  // let ligne = {
  //   qte : 1,
  //   produit: ours,
  //   couleur : "rouge"
  // }

  panier.push(ligne); // laligne est dans le tableau
  let nbItem = document.getElementById("nombreItem");
  nbItem.innerHTML = panier.length; // quand on ajoute on vient mettre à jour le chiffre du panier
  localStorage.panier = JSON.stringify(panier); // a la place de setItem

  for (i = 0; i < panier.length; i++) {
    if (panier == null) {
      boxPanier.innerHTML = panierVide;
    }
  }
};
