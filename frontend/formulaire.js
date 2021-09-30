// function closeForm() {
//   location.href = "./remerciements.html";
// }

//données du formulaire //

// function closeForm() {
//   // document.getElementById("popupForm").style.display = "block";
//   location.href = "./remerciements.html";
// }

document.getElementById("inscription").addEventListener("submit", (e) => {
  e.preventDefault(); // va empecher le rechargement de la page.
  let erreur;

  let inputs = document.getElementsByTagName("input"); //on met un selecteur sur tous les champs input on aurait pu mettre queryselectorall
  for (let i = 0; i < inputs.length; i++) {
    // boucle sur le tableau. si un champ n'est pas défini, on va mettre une erreuer
    // i inférieur a input de lengh cad i inférieur à la taille du tableau.tant qu'i est inférieur a la longueur du tableau ça continue sinon ça s'arrête
    if (!inputs[i].value) {
      // [i]indice du tableau - si par .value n'existe pas, il faut remplir le tableau
      erreur = "Veuillez renseigner tous les champs ! ";
    }
  }
  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    //il faut envoyer les données à l'api
    let url = "http://localhost:3000/api/teddies/order";

    // let form = objet
    let form = {
      // bjet form contient 2 attribut contact et product
      contact: {
        firstName: document.getElementById("prenom"),
        lastName: document.getElementById("nom"),
        address: document.getElementById("adresse"),
        city: document.getElementById("ville"),
        email: document.getElementById("email"),
      },
      products: [],
      // JSON.parse(localStorage.panier),
    };
    console.log(form);
    let param = {
      // let param = objet qui faudra envoyer avec un fetch
      //quand on fait le fetch, on doit envoyer des param pour préciser que c'est un post et pas un get, et envoyer les données et préciser le type (json ou autre chse)
      method: "POST",
      body: JSON.stringify(form), // on y embarque tous nos objets
      headers: { "Content-Type": "application/json; charset=utf-8" }, // inchangé, il faut définir cet objet param pour la method, le body et le header
    };

    fetch(url, param) // on envoie les paramètres à l'url // on utilise le param dans le fetch
      //les parme sont envoyés dans l'objet param mais dans l'objet body (ligne47)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let order = data.orderId;
        //envoi à l'url

        location.href = "./remerciements.html?order=" + order; // au clic, on arrive sur la page de remer et il ya  le numéro de commande
        // on récupere le numéro et on l'envoie sur la pge remerciement
      });
    // alert("envoi");
    // location.href = "./remerciements.html";
  }
  //il faut que j'envoie mon idOrder à ma page remerciements

  // let code = document.getElementById("code");

  // if (code.value.length < 5) {
  //   alert("Saisissez un code postal valide svp. Merci.");
  // }
});

// LIMITE

// document.getElementById("inscription").addEventListener("submit", (e) => {
//     e.preventDefault(); // va empecher le rechargement de la page.
//     let erreur;

//     let inputs = document.getElementsByTagName("input");
//     for (let i = 0; i < inputs.length; i++) {
//       if (!inputs[i].value) {
//         erreur = "Veuillez renseigner tous les champs ! ";
//       }
//     }
//     if (erreur) {
//       e.preventDefault();
//       document.getElementById("erreur").innerHTML = erreur;
//       return false;
//     } else {
//       alert("envoi");
//       location.href = "./remerciements.html";
//     }
//   });
