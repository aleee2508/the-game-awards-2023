
let targetDate = new Date(new Date().getFullYear(), 11, 7);

function updateCountDown() {
    let currentDate = new Date();
    let diffDays = targetDate - currentDate;
    
    const days = Math.floor(diffDays / (1000 * 60 * 60 * 24));

    // Actualiza el contenido del elemento "cuentaAtras"
    document.querySelector(".signup__top span").innerHTML = days + " days until live show";

    if (days <= 0) {
        document.querySelector(".signup__top span").innerHTML = "¡Live now!";
    }
}

updateCountDown();

setInterval(updateCountDown, 3600000);

let buttonModal = document.querySelector(".header__login");
let closeModal = document.querySelector(".modal__close");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");
let buns = document.querySelector(".header__buns");

buttonModal.addEventListener('click', function(){
    body.classList.toggle('overflow')
    modal.classList.toggle('modal--active')
    buns.classList.toggle('active')
})

closeModal.addEventListener('click', function(){
    body.classList.toggle('overflow')
    modal.classList.toggle('modal--active')
    buns.classList.toggle('active')
})
