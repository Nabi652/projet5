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

//ajout de contenu à li1
li1.textContent = "Produit";

//ajout de <li> à <ul>
ligne1.appendChild(li1);

//creation du deuxième <li>
let li2 = document.createElement("li");

//ajout de contenu à li1
li2.textContent = "Quantité";

//ajout de <li> à <ul>
ligne1.appendChild(li2);

//creation du troisième <li>
let li3 = document.createElement("li");

//ajout de contenu à li1
li3.textContent = "Prix";

//ajout de <li> à <ul>
ligne1.appendChild(li3);

//creation du quatrième <li>
let li4 = document.createElement("li");

//ajout de contenu à li1
li4.textContent = "Total";

//ajout de <li> à <ul>
ligne1.appendChild(li4);

//----------------- creation de <ul>

//creation balise <ul>
let ligne2 = document.createElement("ul");

//ajouter ul à box-prix (variable boxPrix)
boxPanier.appendChild(ligne2);

//creation du cinquieme <li>
let li5 = document.createElement("li");

//ajout de contenu à li1
li5.textContent = "Total";

//ajout de <li> à <ul>
ligne2.appendChild(li5);

//creation du sixième <li>
let li6 = document.createElement("li");

//ajout de contenu à li1
li6.textContent = "Quantité";

//ajout de <li> à <ul>
ligne2.appendChild(li6);

// ---------------------- selection de balise aside
let aside = document.querySelector("aside");

//création div class=formulaire
let formulaire = document.createElement("div");

//ajouter class (class = formulaire) à la div
formulaire.setAttribute("class", "formulaire");

//ajouter la div à aside
aside.appendChild(formulaire);

//creation balise <h3>
let titreH3 = document.createElement("h3");

//ajouter contenu à h3
titreH3.textContent = "Passer commande";

//ajouter à la div
formulaire.appendChild(titreH3);

//création d'un <form>
let form = document.createElement("form");

//ajouter à la div class formulaire (variable : formulaire)
formulaire.appendChild(form);

//---------------------------- box1 (label+input)

//création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm1 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm1.setAttribute("class", "box1 box");

//ajout de boxForm à <form>
form.appendChild(boxForm1);

//creation label for prenom
let label1 = document.createElement("label");

//ajout for à label
label1.setAttribute("for", "prenom");

//ajout valeur à label
label1.textContent = "Prénom";

//ajout de label à box1 box
boxForm1.appendChild(label1);

//création input type nom avec id nom
let input1 = document.createElement("input");

//ajouter id (nom)à input
input1.setAttribute("id", "prenom");

//ajouter type à input
input1.setAttribute("type", "prenom");

//ajout à la div box1 (variable: boxForm)
boxForm1.appendChild(input1);

//------------------- box2  (label + input)

// //création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm2 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm2.setAttribute("class", "box2 box");

//ajout de boxForm à <form>
form.appendChild(boxForm2);

//creation label for prenom
let label2 = document.createElement("label");

//ajout for à label
label2.setAttribute("for", "nom");

//ajout valeur à label
label2.textContent = "Nom";

//ajout de label à box1 box
boxForm2.appendChild(label2);

//création input type nom avec id nom
let input2 = document.createElement("input");

//ajouter id (nom)à input
input2.setAttribute("id", "nom");

//ajouter type à input
input2.setAttribute("type", "nom");

//ajout à la div box1 (variable: boxForm)
boxForm2.appendChild(input2);

// ----------------------- box3

//création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm3 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm3.setAttribute("class", "box3 box");

//ajout de boxForm à <form>
form.appendChild(boxForm3);

//creation label for prenom
let label3 = document.createElement("label");

//ajout for à label
label3.setAttribute("for", "mail");

//ajout valeur à label
label3.textContent = "Mail";

//ajout de label à box1 box
boxForm3.appendChild(label3);

//création input type nom avec id nom
let input3 = document.createElement("input");

//ajouter id (nom)à input
input3.setAttribute("id", "mail");

//ajouter type à input
input3.setAttribute("type", "mail");

//ajout à la div box1 (variable: boxForm)
boxForm3.appendChild(input3);

//--------------------------- box4

//création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm4 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm4.setAttribute("class", "box4 box");

//ajout de boxForm à <form>
form.appendChild(boxForm4);

//creation label for prenom
let label4 = document.createElement("label");

//ajout for à label
label4.setAttribute("for", "adresse");

//ajout valeur à label
label4.textContent = "Adresse";

//ajout de label à box1 box
boxForm4.appendChild(label4);

//création input type nom avec id nom
let input4 = document.createElement("input");

//ajouter id (nom)à input
input4.setAttribute("id", "adresse");

//ajouter type à input
input4.setAttribute("type", "adresse");

//ajout à la div box1 (variable: boxForm)
boxForm4.appendChild(input4);

// --------------------- box5

//création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm5 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm5.setAttribute("class", "box5 box");

//ajout de boxForm à <form>
form.appendChild(boxForm5);

//creation label for prenom
let label5 = document.createElement("label");

//ajout for à label
label5.setAttribute("for", "code");

//ajout valeur à label
label5.textContent = "Code postal";

//ajout de label à box1 box
boxForm5.appendChild(label5);

//création input type nom avec id nom
let input5 = document.createElement("input");

//ajouter id (nom)à input
input5.setAttribute("id", "code");

//ajouter type à input
input5.setAttribute("type", "code");

//ajout à la div box1 (variable: boxForm)
boxForm5.appendChild(input5);

// -------------------------------- box6

//création d'une div qui ira dans <form> et qui regroupera label et input
let boxForm6 = document.createElement("div");

//ajout d'une class à cette div (variable : boxForm)
boxForm6.setAttribute("class", "box6 box");

//ajout de boxForm à <form>
form.appendChild(boxForm6);

//creation label for prenom
let label6 = document.createElement("label");

//ajout for à label
label6.setAttribute("for", "ville");

//ajout valeur à label
label6.textContent = "Ville";

//ajout de label à box1 box
boxForm6.appendChild(label6);

//création input type nom avec id nom
let input6 = document.createElement("input");

//ajouter id (nom)à input
input6.setAttribute("id", "code");

//ajouter type à input
input6.setAttribute("type", "code");

//ajout à la div box1 (variable: boxForm)
boxForm6.appendChild(input6);

// -----------------------div pour box7 (<button>)

// creation div
let boxButton7 = document.createElement("div");

//ajout class à la div (class: box7 box)
boxButton7.setAttribute("class", "box7 box");

//ajout de boxButton à <form>
form.appendChild(boxButton7);

//creation balise <button>
let buttonBoxButton7 = document.createElement("button");

//ajout de contenu au bouton
buttonBoxButton7.textContent = "Valider pour paiement";

//ajout du bouton à la div (class: boxButton7)
boxButton7.appendChild(buttonBoxButton7);

//-----------panier pas perdu au rechargement de la page
// création d'une variable carts
let carts = document.querySelectorAll(".ajouter-panier");
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
