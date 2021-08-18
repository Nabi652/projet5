let url = window.location.href;
//"./produit.html?id=1234"
//substring découper une chaine de caractères à partir d'une position. On lui donne à partir de quand on la découpe. On va récuperer le caractère
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

// création fonction ours pour les images
function afficher(ours) {
  // création d'une balise image et selection de l'Id oursImage présente dans code html
  let img = document.getElementById("oursImage");
  //attribution d'un src (ours.imageUrl) à la variable img
  img.setAttribute("src", ours.imageUrl);

  // //ajout du nom pour chaque ours
  // let nomOurs = document.c;

  //---------------------------------------------------------------------------------------

  // tableau des couleurs
  let tab = ours.colors;
  let select = document.getElementById("couleurs");

  // création d'un tableau de couleur et de la variable "couleur" qui représentera chaque couleur
  for (let couleur of tab) {
    //création d'un menu déroulant pour les couleurs
    let option = document.createElement("option");
    //ajout de la variabel couleur à la balise option
    option.textContent = couleur;
    //ajout de la valeur et de la valuer à option
    option.setAttribute("value", couleur);
    //attribuer option à select
    select.appendChild(option);
  }
}
