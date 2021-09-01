// test

let panierStr = localStorage.getItem("panier"); // panier n'est pas un objet mais une chaine
//
if (panierStr == null) {
  panier = [];
} else {
  panier = JSON.parse(panierStr);
}
//dans notre panier on aura un objet ligne
//tableau ligne sur une ligne
let ligne = {};
ligne.qte = document.getElementById("quantites").value;

ligne.produit = produit; //prix
ligne.couleur = document.getElementById("couleurs").value;

// panier vide //
// let panier = localStorage.getItem("panier");
let panierVide = `<div class="container-panier-vide">
<div>Le panier est vide </div>
</div>`;

// if (panier === null) {
//   boxPanier.innerHTML = panierVide;
// }

// for (i = 0; i < panier.length; i++) {
//   console.log("ezan" + panier.length);
// }

// for (i = 0; i < panier.length; i++) {
//   if (panier === null) {
//     let panierVide = `
//         <div class="container-panier-vide">
//         <div>Le panier est vide </div>
//         </div>`;
//     boxPanier.innerHTML = panierVide;
//   }
// }
// let panierPhysique = localStorage.getItem("panier");

// if (panierPhysique === null) {
//   let panierVide = `
// <div class="container-panier-vide">
// <div>Le panier est vide </div>
// </div>`;
//   boxPanier.innerHTML = panierVide;
// } else {
//   boxPanier.innerHTML = "khra";
// }
/* ------------------- afficher le panier vide -------------*/

// console.log(boxPanier);

// let panierElement = localStorage.getItem("panier");
// if (panierElement === null) {
//   // si le localstorage est vide alors
//   //   console.log("je suis vide");
//   // alors je crée une div qui affichera "le panier est vide"
//   let panierVide = `
// <div class="container-panier-vide">
// <div>Le panier est vide </div>
// </div>`;
//   boxPanier.innerHTML = panierVide;
// } else {
//   // sinon il faut afficher les produits
//   //je crée une variable (tableau) dans lequel il y aura le code html (pour l'instant vide)
//   let structureProduitPanier = [];
//   for (i = 0; i < panierElement.length; i++) {
//     console.log(panierElement.length);
//   }
// }
// console.log(boxPanier);
// console.log(localStorage.getItem("panier"));
