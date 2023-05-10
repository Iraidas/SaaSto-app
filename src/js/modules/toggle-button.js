export function toggle () {
    let button = document.querySelector('.toggle__button')
    
    button.addEventListener('click', function () {
        button.classList.toggle("toggle_active");
    })
}