const button = document.getElementById("button")

button.addEventListener('click', function () {
    console.log("test")
    var added = document.getElementById("added");
    added.classList.toggle("fadeIn");
    setTimeout(function () {
        added.classList.toggle("fadeOut")
    }, 1000);
})

