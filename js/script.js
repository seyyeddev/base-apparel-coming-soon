// To prevent default bahavior button
const submit = document.querySelector(".content__btn");

submit.addEventListener("click", (e) => {
    e.preventDefault();
})