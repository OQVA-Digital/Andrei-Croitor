
const paths = document.querySelectorAll('.logo_outline path')

const andreiVid = document.querySelector('.andrei_video')

for (i = 0; i < paths.length; i++) {
    paths[i].style.strokeDashoffset = `${window.scrollY * 1.5}px`

    paths[i].style.strokeDasharray = `${Math.random() * 250 + 120}rem`
}

window.addEventListener('scroll', function () {
    for (i = 0; i < paths.length; i++) {
        paths[i].style.strokeDashoffset = `${window.scrollY * 1.5}px`
    }
})

if (window.matchMedia('(min-width:650px)').matches) {
    window.addEventListener('scroll', function () {
        if (window.scrollY < window.innerHeight * 1.1) {
            andreiVid.style.transform = `translateY(calc(-12vw + ${window.scrollY / 3}px))`
        }
    })
}