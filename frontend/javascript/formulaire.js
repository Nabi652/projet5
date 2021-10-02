document.getElementById("inscription").addEventListener("submit", (e) => {
  e.preventDefault();
  let erreur;

  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs ! ";
    }
  }
  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    let url = "http://localhost:3000/api/teddies/order";

    let form = {
      contact: {
        firstName: document.getElementById("prenom"),
        lastName: document.getElementById("nom"),
        address: document.getElementById("adresse"),
        city: document.getElementById("ville"),
        email: document.getElementById("email"),
      },
      products: [],
    };
    console.log(form);
    let param = {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    };

    fetch(url, param)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let order = data.orderId;

        location.href = "./remerciements.html?order=" + order;
      });
  }
});

let nbItem = document.getElementById("nombreItem");
if (localStorage.getItem("panier") == null) {
  nbItem.innerHTML = 0;
} else {
  let tab = JSON.parse(localStorage.getItem("panier"));
  nbItem.innerHTML = tab.length;
}
