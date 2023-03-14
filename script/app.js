const header = document.querySelector('.header')
const burger = document.querySelector('.burger__btn')

window.addEventListener('scroll', function () {
    if (scrollY > 10) {
        header.style = `background: black;   
        box-shadow: 0px 32px 20px 26px rgba(0, 0, 0, 0.39);;`
    }
    if (scrollY <= 10) {
        header.style = `background: transparent;
                        box-shadow: 0`
    }
})

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})
if (header.classList.contains('open')) {
    header.style.backgroundColor = 'transparent'
}