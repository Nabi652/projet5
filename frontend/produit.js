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

  //   ajouter <button> à div class="box-prix-bouton (variable boxPrixBouton)
  boxPrixBouton.appendChild(bouton);

  //création d'une balise <a>
  let ajouterAuPanier = document.createElement("a");

  //donner une class à la balise <a> (class = lienPanier)
  ajouterAuPanier.setAttribute("class", "ajouter-panier");

  //ajout de <a> à la div box-prix-bouton (variable boxPrixBouton)
  boxPrixBouton.appendChild(ajouterAuPanier);

  //ajout de du bouton (variable : bouton) à <a>
  ajouterAuPanier.appendChild(bouton);

  // création d'une variable carts
  let carts = document.querySelectorAll(".ajouter-panier");

  //-------------------------------------------------------------------------------------------------------------
  // pour savoir combien de fois le produit a été ajouté au panier
  let produits = [
    {
      name: "Norbert",
      tag: "tan",
      price: 2900,
      inCart: 0,
    },
    {
      name: "Arnold",
      tag: "white",
      price: 3900,
      inCart: 0,
    },
    {
      name: "Lenny and Carl",
      tag: "brown",
      price: 5900,
      inCart: 0,
    },
    {
      name: "Gustav",
      tag: "brown",
      price: 4500,
      inCart: 0,
    },
    {
      name: "Garfunkel",
      tag: "beige",
      price: 5500,
      inCart: 0,
    },
  ];

  //---------------------------------------------------------------------------------------

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      nombrePanier();
    });
  }

  //création fonction
  function nombrePanier() {
    let nombreProduit = localStorage.getItem("nombrePanier");
    console.log(nombreProduit);

    //ici on voit que quand on clique sur "ajouter au panier", le type est "string"
    // console.log(typeof nombreProduit);

    //changement de string en number
    nombreProduit = parseInt(nombreProduit);
    //quand on clique, on voit que c'est devenu un number
    // console.log(nombreProduit);

    if (nombreProduit) {
      localStorage.setItem("nombrePanier", nombreProduit + 1);
      document.querySelector("span").textContent = nombreProduit + 1;
    } else {
      localStorage.setItem("nombrePanier", 1);
      document.querySelector("span").textContent = 1;
    }
  }
}

// pour ne pas perdre le panier quand on recharge la page
//cette fonction ne se lancera pas tant qu'on l'apppelle pas
//pour se faire,on va appeler cette fonction à la fin (après le code)

function onLoadCartNumbers() {
  let nombreProduit = localStorage.getItem("nombrePanier");

  //s'il y a des clic dans le localstorage, je veux que mon doc

  if (nombreProduit) {
    document.querySelector("span").textContent = nombreProduit;
  }
}

onLoadCartNumbers();
