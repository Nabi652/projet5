// let tableau = [
//   {
//     name: "norbert",
//     price: "2900",
//     imageUrl: "https://dummyimage.com/100x100/ccc/555",
//   },

//   {
//     name: "nom2",
//     price: "5000",
//     imageUrl: "https://dummyimage.com/100x100/ccc/555",
//   },
// ];

// function afficheList(tableau) {
//   for (let ours of tableau) {
//     // console.log(ours.name);
//     // creation d'une div : <div></div>
//     let div = document.createElement("div");

//     // <div class="cell"></div>
//     div.setAttribute("class", "cell");

//     //creation h2
//     let h2 = document.createElement("h2");

//     //contenu h2 :<h2>Norbert</h2>
//     h2.textContent = ours.name;

//     //mettre la balise h2 dans la div
//     div.appendChild(h2);

//     //creation d'une balise image
//     let image = document.createElement("img");
//     image.setAttribute("src", ours.imageUrl);
//     image.setAttribute("width", "100");

//     //ajout de l'image dans la div
//     div.appendChild(image);

//     //mettre la div cell dans le container
//     document.getElementById("list").appendChild(div);
//   }
// }

// let url = "http://localhost:3000/api/teddies";

// fetch(url)
//   .then((response) => response.json())
//   .then((tableau) => {
//     console.log(tableau);
//     afficheList(tableau);
//   });
