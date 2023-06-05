let image = document.querySelector(".image__container img");
let submit = document.querySelector(".content__btn");


// To prevent default bahavior button
submit.addEventListener("click", (e) => {
    //e.preventDefault();
})

//change image
if (window.innerWidth > "1024") {
   image.setAttribute("src", "./images/hero-desktop.jpg")
}