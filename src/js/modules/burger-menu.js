export function burgerMenu() {
    let burgerButton = document.querySelector(".menu__button")
    let burgerMenu = document.querySelector(".menu__body")
    
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle("body_lock");
        burgerButton.classList.toggle("menu_active");
        burgerMenu.classList.toggle("menu__body_active");
    })
}
