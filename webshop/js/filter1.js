let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);//zet window naar boven bij refresh

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let black = document.getElementById("checkbox-black");
let white = document.getElementById("checkbox-white");
let blue = document.getElementById("checkbox-blue");

black.onchange = function(){
    if(black.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "black"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "black"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

white.onchange = function(){
    if(white.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "white"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "white"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

blue.onchange = function(){
    if(blue.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "blue"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "blue"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}