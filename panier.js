//création d'une balise <main>
let main = document.querySelector("main");

//creation div class= box-prix
let boxPrix = document.createElement("div");

//ajout class = box-prix à la div (variable)
boxPrix.setAttribute("class", "box-prix");

//ajout de la div à <main>
main.appendChild(boxPrix);

//creation balise <ul>
let ligne1 = document.createElement("ul");

//ajouter ul à box-prix (variable boxPrix)
boxPrix.appendChild(ligne1);

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
boxPrix.appendChild(ligne2);

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

//AJOUTER contenu à h3
titreH3.textContent = "Passer commande";

//ajouter à la div
formulaire.appendChild(titreH3);
