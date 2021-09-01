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
    lien.setAttribute("href", "/frontend/produit.html?id=" + ours._id);

    //ajouter du texte au lien a
    lien.textContent = "+";

    //création d'un bouton pour le lien
    let bouton = document.createElement("button");
    //ajout du bouton à la div cell
    div.appendChild(bouton);

    //ajout du lien <a> au bouton
    bouton.appendChild(lien);
  }

  //si le tableau n'existe c'est 0
  let nbItem = document.getElementById("nombreItem"); //#nombreItem c'est le span (chiffre) de l'icone panier
  if (localStorage.getItem("panier") == null) {
    nbItem.innerHTML = 0;
  } else {
    let tab = JSON.parse(localStorage.getItem("panier"));
    nbItem.innerHTML = tab.length; // longueur du tableau
    //quand on vient ajouter un produit
  }
}
