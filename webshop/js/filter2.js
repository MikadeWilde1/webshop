document.getElementById("category").addEventListener("change", filterProducts);

function filterProducts() {
  const category = document.getElementById("category").value;
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (category === "all" || product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}