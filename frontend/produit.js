let url = window.location.href;
//"./produit.html?id=1234"

//substring découper une chaine de caractères à partir d'une position.
//On lui donne à partir de quand on la découpe. On va récuperer le caractère
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

//-------------------------------------------------------
// création fonction ours pour les images
function afficher(ours) {
  // création div class=ensemble-photo-infos qui va regrouper la photo et les infos
  let boxEnsemble = document.createElement("div");

  //donner une class à boxEnsemble (class = ensemble-photo-infos)
  boxEnsemble.setAttribute("class", "ensemble-photo-infos");

  //selection main
  let main = document.querySelector("main");

  //ajout de la div class= ensemble-photo-infos à main
  main.appendChild(boxEnsemble);

  //création de la div box-img qui regroupera l'image
  let boxImage = document.createElement("div");

  //donner une class à boxImage (class = box-img)
  boxImage.setAttribute("class", "box-img");

  //ajout de la div class box-img à la div ensemble-photo-infos (variable: boxEnsemble)
  boxEnsemble.appendChild(boxImage);

  //creation de la balise img
  let img = document.createElement("img");

  //donner id à image
  img.setAttribute("id", "oursImage");

  //attribution d'un src (ours.imageUrl) à la variable img
  img.setAttribute("src", ours.imageUrl);

  // ajouter à la div box-img(variable boxImage)
  boxImage.appendChild(img);

  //creation div class=ensemble-informations
  let ensembleInfos = document.createElement("div");

  //ajout d'une class div (variable ensembleInfos)
  ensembleInfos.setAttribute("class", "ensemble-informations");

  //ajout de la div à  la div photos-infos-photos(variable:boxEnsemble)
  boxEnsemble.appendChild(ensembleInfos);

  //création d'une balise <h2> pour le nom des ours
  let nomOurs = document.createElement("h2");

  //donner une class à h2
  nomOurs.setAttribute("class", "nom-ours");

  //attribution valeur à h2
  nomOurs.textContent = ours.name;

  //ajout du h2 à la div ensemble-informations
  ensembleInfos.appendChild(nomOurs);

  //créaton d'une balise <p> pour la description
  let description = document.createElement("p");

  //ajout d'une class à la balise <p> (class= description)
  description.setAttribute("class", "description");

  //ajout d'une valeur à p
  description.textContent = ours.description;

  //ajout de p à la balise ensemble-informations (variable:ensembleInfos)
  ensembleInfos.appendChild(description);
}
