const showModalButton = document.getElementById("contact")
const modalElement = document.getElementById("modal")
const modalCloseButton = document.getElementById("modal-close")

showModalButton.addEventListener("click", function () {
    modalElement.classList.add("active-modal")
})

modalCloseButton.addEventListener("click", function () {
    modalElement.classList.remove("active-modal")
})

const showNavButton = document.getElementById("nav__button-mob")
const navElement = document.getElementById("nav-mob")
const body = document.getElementById("body")

showNavButton.addEventListener("click", function () {
    showNavButton.classList.toggle("if-nav-mob-open")
    navElement.classList.toggle("nav-mob-container-open")
    body.classList.toggle("no-overflow")
})

const showModalButtonMob = document.getElementById("contact-mob")

showModalButtonMob.addEventListener("click", function () {
    modalElement.classList.add("active-modal")
})

modalCloseButton.addEventListener("click", function () {
    modalElement.classList.remove("active-modal")
})

const newsButton = document.getElementById("button-news")
const newsArticles = document.getElementById("button-articles")

newsButton.addEventListener("click", function () {
    newsButton.classList.add("segment-active")
    newsArticles.classList.remove("segment-active")
})

newsArticles.addEventListener("click", function () {
    newsArticles.classList.add("segment-active")
    newsButton.classList.remove("segment-active")
})