let tableau = [
  {
    name: "norbert",
    price: "2900",
    imageUrl: "https://dummyimage.com/100x100/ccc/555",
  },
];

function afficheList(tableau) {
  for (let ours of tableau) {
    // creation d'une div : <div></div>
    let div = document.createElement("div");

    // <div class="cell"></div>
    div.setAttribute("class", "cell");

    //creation h2
    let h2 = document.createElement("h2");

    //contenu h2 :<h2>Norbert</h2>
    h2.textContent = ours.name;

    //mettre la balise h2 dans la div
    div.appendChild(h2);

    //creation d'une balise image
    let image = document.createElement("img");
    image.setAttribute("src", ours.imageUrl);
    image.setAttribute("width", "100");

    //ajout de l'image dans la div
    div.appendChild(image);

    //mettre la div cell dans le container
    document.getElementById("list").appendChild(div);

    //creation d'une balise <p> pour description
    let description = document.createElement("p");

    // contenu du p (descriptinon)
    description.textContent = ours.description;

    // ajout du <p> à la div
    div.appendChild(description);

    //creation du <h3> pour le prix
    let prix = document.createElement("h3");

    //contenu du <h3> (prix)
    prix.textContent = ours.price;

    //ajout du <h3> à la div cell
    div.appendChild(prix);
  }
}

let url = "http://localhost:3000/api/teddies";

fetch(url)
  .then((response) => response.json())
  .then((tableau) => {
    console.log(tableau);
    afficheList(tableau);
  });
