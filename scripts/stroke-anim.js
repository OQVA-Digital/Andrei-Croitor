

const outlineCtnr = document.createElement("div");

// outlineCtnr.classList.add('stroke_ctnr')

outlineCtnr.innerHTML = `
<svg class="logo_outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 753.54 590.04"
    preserveAspectRatio="xMinYMin slice">
    <defs></defs>
    <g id="background">
        <path class="path01"
            d="m209.75,588.04H22.03c-11.06,0-20.03-13.82-20.03-30.84v-109.55c0-17.78,9.75-31.92,21.27-30.8,40.58,3.98,76.32,15.73,108.56,35.61,35.65,21.99,62.64,50.84,88.75,78.77.2.21.39.41.58.62,16.12,17.23,8.21,56.2-11.42,56.2Z" />
        <path class="path01"
            d="m595.54,588.04h-218.77c-64.41,0-101.12-39.24-143.62-84.69-49.12-52.53-104.27-111.49-212.28-120.72-10.59-.91-18.87-14.45-18.87-30.8v-110.84c0-17.78,9.75-31.92,21.27-30.8,40.58,3.98,76.32,15.73,108.56,35.61,35.65,21.99,62.64,50.84,88.75,78.77,43.65,46.67,84.88,90.75,156.19,90.75,54.25,0,100.32,12.14,140.85,37.13,35.65,21.99,62.65,50.85,88.75,78.77.2.21.39.41.58.62,16.12,17.23,8.21,56.2-11.42,56.2Z" />
        <path class="path01"
            d="m751.54,443.4v110.08c0,18.94-10.99,33.52-23.14,30.47-44.5-11.16-75.08-43.86-109.46-80.61-53.47-57.17-114.06-121.96-242.17-121.96-64.41,0-101.12-39.24-143.62-84.69-49.12-52.53-104.27-111.49-212.28-120.72-10.59-.91-18.87-14.45-18.87-30.8V34.32C2,16.54,11.75,2.4,23.27,3.53c40.58,3.98,76.32,15.73,108.56,35.61,35.65,21.99,62.64,50.85,88.75,78.78,43.65,46.67,84.88,90.75,156.19,90.75,54.25,0,100.32,12.14,140.85,37.14,35.65,21.99,62.65,50.85,88.75,78.77,37.48,40.07,73.16,78.22,127.63,88.22,10.03,1.84,17.53,15.07,17.53,30.61Z" />
        <path class="path01"
            d="m751.54,236.75v110.08c0,18.94-10.99,33.52-23.14,30.47-44.5-11.15-75.08-43.86-109.46-80.61-53.47-57.17-114.06-121.96-242.17-121.96-64.41,0-101.12-39.26-143.62-84.69-9.63-10.3-19.5-20.86-29.96-31.23-16.8-16.69-9.17-56.81,10.83-56.81h162.75c54.25,0,100.32,12.14,140.85,37.14,35.65,21.99,62.65,50.85,88.75,78.78,37.48,40.07,73.16,78.22,127.63,88.22,10.03,1.84,17.53,15.05,17.53,30.61Z" />
        <path class="path01"
            d="m751.54,32.84v107.33c0,18.94-10.99,33.52-23.14,30.47-44.5-11.16-75.08-43.86-109.46-80.61-9.63-10.3-19.5-20.86-29.96-31.23-16.8-16.69-9.17-56.81,10.83-56.81h131.7c11.06,0,20.03,13.82,20.03,30.84Z" />
    </g>
</svg>`

document.querySelector('main').appendChild(outlineCtnr);

const paths = document.querySelectorAll('.logo_outline path')

for (i = 0; i < paths.length; i++) {
    paths[i].style.strokeDashoffset = `${window.scrollY * 1.5}px`

    paths[i].style.strokeDasharray = `${Math.random() * 250 + 120}rem`
}

window.addEventListener('scroll', function () {
    for (i = 0; i < paths.length; i++) {
        paths[i].style.strokeDashoffset = `${window.scrollY * 1.5}px`
    }
})