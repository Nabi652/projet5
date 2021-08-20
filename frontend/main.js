const spanPanierNumber = () => {
  let clickStorage = localStorage.getItem("produit");
  if (clickStorage) {
    document.querySelector("span").textContent = clickStorage;
  }
};

spanPanierNumber();
