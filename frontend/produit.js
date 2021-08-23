let url = window.location.href;
//"./produit.html?id=1234"

//substring découper une chaine de caractères à partir d'une position.
//On lui donne à partir de quand on la découpe. On va récuperer le caractère
let id = url.substring(url.lastIndexOf("=") + 1);

//lastindexof retourne la position du caractère
// alert(id); //1234

let url2 = "http://localhost:3000/api/teddies/" + id;
fetch(url2)
  .then((response) => response.json())
  .then((ours) => {
    console.log(ours);
    afficher(ours);
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

  //ajout de du bouton (variable : bouton) à <a>
  ajouterAuPanier.appendChild(bouton);

  //local storage
  // déclarer la variable "produitenregistredslocalstorage" dans laquelle on met
  //les key et les valeurs qui sont dans le localstorage
  let produitEnregistreDansLocalStorage = JSON.parse(
    //au-dessus: on déclare json pour convertir les données au format json qui sont dans le lcoal storage en obet js
    localStorage.getItem("produits")
  );

  //s'il y a deja des produits enregistrés dans local storage
  if (produitEnregistreDansLocalStorage) {
    produitEnregistreDansLocalStorage.push(ours);
    localStorage.setItem(
      "produits",
      JSON.stringify(produitEnregistreDansLocalStorage)
    );
    console.log(produitEnregistreDansLocalStorage);

    //s'il n'y a pas de produit enregistré dans local storage
  } else {
    produitEnregistreDansLocalStorage = [];
    produitEnregistreDansLocalStorage.push(ours);
    localStorage.setItem(
      "produits",
      JSON.stringify(produitEnregistreDansLocalStorage)
    );
  }
}

const maFonctionAjout = () => {
  let clickStorage = localStorage.getItem("produit");
  //explications clickstorage demande à localstorage de voir si "produit" existe, pour l'instant, elle n'existe pas

  clickStorage = parseInt(clickStorage);
  // pour transformer le string en number

  // s'il y  a déjà des produits enregistrés dans local storage alors
  //si localStorage.getItem("produit") existe (si "produit" existe ) key = produit
  //alors il faut lui rajouter +1
  if (clickStorage) {
    localStorage.setItem("produit", clickStorage + 1);
    document.querySelector("span").textContent = clickStorage + 1;

    clickStorage + 1;
  } else {
    //s'il n'existe pas (produit existe pas, pas de valeur, si on n'a pas cliqué sur le bouton ajouté, on donnera une valeur de 1 à produit)
    //quand on va cliquer la première fois sur ajouter, ça va appeler else et quand on cliquera une 2ème fois, ça veut dire que produit existe
    //vraiment donc 'if'sera lancé
    localStorage.setItem("produit", 1);
    document.querySelector("span").textContent = 1;
  }
};

//---------------------------------------------------

//-------------------
// let ajout = document.getElementsByClassName(".ajout-panier");
// let panier = [
//   {
//     _id: "5be9c8541c9d440000665243",
//     name: "Norbert",
//     price: 2900,
//   },
// ];
// function afficherPanier(panier) {
//   for (let ours of panier) {
//     ajout.addEventListener("click", () => {
//       if (ajout) {
//         document.getElementsByClassName("produit").textContent = ours._id;
//       }
//     });
//   }
//   afficherPanier(panier);
// }
