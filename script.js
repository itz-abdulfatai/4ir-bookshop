const nav = document.getElementById('naav')
const menu = document.getElementById('menuu')
window.addEventListener('scroll', function () {
    const header = document.getElementById('my-header')
    nav.classList.remove('active')


    if (window.scrollY > 300) {

        header.classList.add('active')
    } else {
        header.classList.remove('active')

    }


})


// console.log(nav)
// console.log(menu)


menu.addEventListener('click', function () {
    nav.classList.toggle('active')
})