window.addEventListener('scroll', function () {
    const header = document.getElementById('my-header')

    if (window.scrollY > 500) {

        header.classList.add('active')
    } else {
        header.classList.remove('active')

    }


})
