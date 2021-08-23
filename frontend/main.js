// let panier = [
//   {
//     _id: "5be9c8541c9d440000665243",
//     name: "Norbert",
//     price: 2900,
//   },
// ];

// function afficherPanier(panier) {
//   for (let ours of panier) {
//     let ajout = document.getElementsByClassName("ajouter-panier");
//     ajout.addEventListener("click", () => {
//       console.log("ezan", ajout);
//       if (ajout) {
//         document.getElementsByClassName("produit").textContent = ours._id;
//       }
//     });
//   }
// }
//------------------------------------------------------------------

const spanPanierNumber = () => {
  let clickStorage = localStorage.getItem("produit");
  if (clickStorage) {
    document.querySelector("span").textContent = clickStorage;
    // document.querySelector(".produit") = ours_id;
    // // document.querySelector(".produit").textContent = ours_id;
    // document.querySelector('.produit') = push(0)
  }
};

spanPanierNumber();

//------------------------------------------------------------------

// let ajout = document.getElementsByClassName("ajouter-panier");
// let url4 = "http://localhost:3000/api/teddies";
// let cart = [];
// //j'ajoute cart au localstorage
// localStorage.setItem("cart", JSON.stringify("cart"));
// localStorage.getItem("cart");
//je crée un tableau pour ajouter les produits plus tard

//------------------------------------------------

// let panier1 = [
//   {
//     _id: "5be9c8541c9d440000665243",
//     name: "Norbert",
//     price: 2900,
//   },
// ];
// let ajouterAuPanier = document.getElementsByClassName("ajouter-panier");
// let panier = document.getElementsByClassName("box-panier");
// function afficherPanier(panier) {
//   for (let ours of panier) {
//     ajouterAuPanier.addEventListener("click", () => {
//       ajouterAuPanier = localStorage.getItem(produit);
//       panier.textContent = ours.ours_id;
//     });
//   }
// }
