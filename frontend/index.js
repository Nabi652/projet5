let url = "http://localhost:3000/api/teddies";

fetch(url)
  .then((response) => response.json())
  .then((tableau) => {
    console.log(tableau);
    afficheList(tableau);
  });

function afficheList(tableau) {
  for (let ours of tableau) {
    // creation d'une div : <div></div>
    let div = document.createElement("div");

    // <div class="cell"></div>
    div.setAttribute(
      "class",
      "cell box-norbert box-arnold box-lenny box-gustav box-garfunkel"
    );

    //creation h2
    let h2 = document.createElement("h2");

    //contenu h2 :<h2>Norbert</h2>
    h2.textContent = ours.name;

    //mettre la balise h2 dans la div
    div.appendChild(h2);

    //creation d'une balise image
    let image = document.createElement("img");
    image.setAttribute("src", ours.imageUrl);

    //ajout de l'image dans la div
    div.appendChild(image);

    //mettre la div cell dans le container
    document.getElementById("list").appendChild(div);

    // creation de la variable boxImage
    let boxImage = document.createElement("div");

    // ajout de boxImage à la div cell
    div.appendChild(boxImage);

    //ajout de l'image à la div boxImage
    boxImage.appendChild(image);

    // j'ai donné une class à la variable boxImage => "box.img"
    boxImage.setAttribute("class", "box-img");

    //creation d'une balise <p> pour description
    let description = document.createElement("p");

    // contenu du p (description)
    description.textContent = ours.description;

    // ajout du <p> à la div
    div.appendChild(description);

    //creation du <h3> pour le prix
    let prix = document.createElement("h3");

    //contenu du <h3> (prix)
    prix.textContent = parseFloat(ours.price / 100) + "€";

    //ajout du <h3> à la div cell
    div.appendChild(prix);

    //création du symbole + à côté des prix qui sera cliquable
    //creation d'une balise <a>
    let lien = document.createElement("a");

    //ajout du <a> à la div cell
    div.appendChild(lien);

    // ajout d'un hrf avec le lien de la page produit
    lien.setAttribute("href", "../frontend/produit.html?id=" + ours._id);

    //ajouter du texte au lien a
    lien.textContent = "+";

    //création d'un bouton pour le lien
    let bouton = document.createElement("button");
    //ajout du bouton à la div cell
    div.appendChild(bouton);

    //ajout du lien <a> au bouton
    bouton.appendChild(lien);
  }
}

//------------------------------------------------------------------
// ----------------AJOUT AU PANIER -----------------------------------------------

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
