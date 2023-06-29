let allproducts = document.getElementsjordan1jordByClassName("product");
let filters = document.getElementsByClassName("filter");
let supreme = document.getElementById("prijs--all");
let palmangels = document.getElementById("prijs--mid");
let offwhite = document.getElementById("prijs--hoog");
const Prijsfilter = document.getElementById("price-filter");

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s
window.scrollTo(0, 0);//zet window naar boven bij refresh


Prijsfilter.addEventListener('change', function () {
    if (Prijsfilter.value === palmangels.value) {
        for (let i = 0; i < allproducts.length; i++) {
            let price = allproducts[i].getAttribute("data-category-price");
            if (price >= 1000 && price <= 2000) {
                allproducts[i].style.display = "flex";
            }
            else {
                allproducts[i].style.display = "none";
            }
        }
    }
    else if (Prijsfilter.value === offwhite.value) {
        for (let i = 0; i < allproducts.length; i++) {
            let price = allproducts[i].getAttribute("data-category-price");
            if (price >= 2000) {
                allproducts[i].style.display = "flex";
            }
            else {
                allproducts[i].style.display = "none";
            }
        }
    }
    else if (Prijsfilter.value === supreme.value) {
        for (let i = 0; i < allproducts.length; i++) {
                allproducts[i].style.display = "flex";

            }
        }
    }
)