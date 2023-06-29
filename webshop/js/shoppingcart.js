const adds = document.getElementsByClassName("sweaters__button");
let cart = 0;
const cartvalue = document.getElementsByClassName("shoppingCart__message")[0];
const modal = document.getElementById("js--shoppingModal");
let modalOpen = false;

let zwart = 0;
let blauw = 0;
let groen = 0;
let price_zwart = 0;
let price_blauw = 0;
let price_groen = 0;

for (let i = 0; i < adds.length; i++){
    adds[i].onclick = function () {
        cart += 1;
        cartvalue.innerHTML = cart;
        switch (adds[i].dataset.product) {
            case "zwart":
                zwart += 1;
                price_zwart = 999 * zwart;
                break;
            case "blauw":
                blauw += 1;
                price_blauw = 999 * blauw;
                break;
            case "groen":
                groen += 1;
                price_groen = 999 * groen;
                break;
        }
        if (modalOpen === false) {
            modal.style.display = "flex";
            modalOpen = true
            setTimeout(function(){
                modal.style.display = "none";
                modalOpen = false;
            }, 2000);
        }
    }
}

const checkout = document.getElementById("checkoutButton");
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block"
        icon_arrow.style.display = "block"
        icon_cart.style.display = "none"
        checkoutOpen = true;
        document.getElementById("js--zwart").innerHTML = zwart + "x  €" + price_zwart;
        document.getElementById("js--blauw").innerHTML = blauw + "x  €" + price_blauw;
        document.getElementById("js--groen").innerHTML = groen + "x  €" + price_groen;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    icon_arrow.style.display = "none"
    icon_cart.style.display = "block"
    checkoutOpen = false;
}