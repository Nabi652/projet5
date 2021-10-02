let url = "http://localhost:3000/api/teddies";

fetch(url)
  .then((response) => response.json())
  .then((tableau) => {
    console.log(tableau);
    afficheList(tableau);
  });

function afficheList(tableau) {
  for (let ours of tableau) {
    let div = document.createElement("div");

    div.setAttribute(
      "class",
      "cell box-norbert box-arnold box-lenny box-gustav box-garfunkel"
    );

    let h2 = document.createElement("h2");

    h2.textContent = ours.name;

    div.appendChild(h2);

    let image = document.createElement("img");
    image.setAttribute("src", ours.imageUrl);

    div.appendChild(image);

    document.getElementById("list").appendChild(div);

    let boxImage = document.createElement("div");

    div.appendChild(boxImage);

    boxImage.appendChild(image);

    boxImage.setAttribute("class", "box-img");

    let description = document.createElement("p");

    description.textContent = ours.description;

    div.appendChild(description);

    let prix = document.createElement("h3");

    prix.textContent = parseFloat(ours.price / 100) + "€";

    div.appendChild(prix);

    let lien = document.createElement("a");
    div.appendChild(lien);
    lien.setAttribute("href", "frontend/html/produit.html?id=" + ours._id);
    lien.textContent = "+";

    let bouton = document.createElement("button");

    div.appendChild(bouton);

    bouton.appendChild(lien);
  }

  let nbItem = document.getElementById("nombreItem");
  if (localStorage.getItem("panier") == null) {
    nbItem.innerHTML = 0;
  } else {
    let tab = JSON.parse(localStorage.getItem("panier"));
    nbItem.innerHTML = tab.length;
  }
}
