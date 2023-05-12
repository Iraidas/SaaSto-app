export function toggle () {
    let button = document.querySelector('.toggle__button')
    let monthlyPriceList = document.querySelectorAll('.monthly-price')
    let yearlyPriceList = document.querySelectorAll('.yearly-price')
    
    button.addEventListener('click', function () {
        let buttonState = button.classList.toggle("toggle_active");

        if (buttonState == true) {
            for (let i = 0; i < monthlyPriceList.length; i++) {                
                monthlyPriceList[i].style.opacity = "0"
                monthlyPriceList[i].style.display = "none"
                yearlyPriceList[i].style.opacity = "1"
                yearlyPriceList[i].style.display = "flex"
            }
        }
        else {
            for (let i = 0; i < monthlyPriceList.length; i++) {                
                monthlyPriceList[i].style.opacity = "1"
                monthlyPriceList[i].style.display = "flex"
                yearlyPriceList[i].style.opacity = "0"
                yearlyPriceList[i].style.display = "none"
            }
        }
    })
}