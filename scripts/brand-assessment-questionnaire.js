let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = false;

let resultCtnr = document.querySelector('.result');
let resultCtnrOffset;

let maxScore = 0;
let totalStatements = 0;

let totalFilled = document.querySelectorAll('.answer input[type="range"][class="unset"]').length
let relativeFilled = 0;

const progressBar = document.querySelector('.progress .bar')
const progressRelative = document.querySelector('.progress .relative')
const progressTotal = document.querySelector('.progress .total')


const resultText = document.querySelector('.result .general.txt')

const ScoreDisplay = document.querySelector('.score .current')

const fillingWarning = document.querySelector('.warning.require_fields')




function vibrate() {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    window.navigator.vibrate(60);
}


function checkProgressBar() {
    if (allFilled == false) {
        totalFilled = document.querySelectorAll('.answer input[type="range"]:not([class="unset"])').length

        relativeFilled = Math.floor((totalFilled * 100) / totalStatements)

        progressBar.style.width = relativeFilled + "%"

        // console.log(relativeFilled)

        progressRelative.innerHTML = totalFilled;

        progressTotal.innerHTML = totalStatements
    }

    if (relativeFilled == 100) {
        progressBar.style.backgroundColor = 'var(--c2a)'
    }
}

for (i = 0; i < answers.length; i++) {

    maxScore += Number(answers[i].getAttribute('max'))

    totalStatements = answers.length;
    // console.log(totalStatements)

    if (i == answers.length - 1) {
        document.querySelector('.score .total').innerHTML = '/ ' + maxScore
    }

    answers[i].addEventListener("input", (event) => {
        updateThumb(event)
        resultCtnr.classList.add('hidden');
        resultCtnr.style.maxHeight = '0'
    });

    answers[i].addEventListener("mousedown", updateThumb);
    answers[i].addEventListener("touchstart", updateThumb);
}

progressRelative.innerHTML = relativeFilled;
progressTotal.innerHTML = totalStatements;

function calculateScore() {

    for (i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains('unset')) {
            fillingWarning.classList.add('visible')

            setTimeout(() => {
                fillingWarning.classList.remove('visible')
            }, 2500);

            allFilled = false;
            return
        } else {
            allFilled = true;
        }
    }

    if (allFilled == true) {
        score = 0;

        for (i = 0; i < answers.length; i++) {
            score += Number(answers[i].value)
        }

        resultCtnr.classList.remove('hidden')
        resultCtnr.style.maxHeight = resultCtnr.scrollHeight + 200 + 'px'
        resultCtnrOffset = resultCtnr.offsetTop

        ScoreDisplay.innerHTML = score

        setTimeout(() => {
            window.scrollTo(0, window.scrollY + (window.innerHeight / 2))
        }, 400);

        if (score < 60) {
            resultText.innerHTML = "<p>Your brand is in the early stages of developing its consciousness. <b>Don't worry - with focus and effort, you can build a strong brand consciousness.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 60 && score <= 89) {
            resultText.innerHTML = "<p>Your brand is on its way to <b>developing consciousness</b>, but there are many areas to improve. <b>A structured approach could help strengthen your brand's identity.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 90 && score <= 119) {
            resultText.innerHTML = "<p>Your brand has a <b>good level of consciousness</b>, but there's still room for improvement. <b>Consider focusing on areas where your score was lower.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 120) {
            resultText.innerHTML = "<p>Your brand has a <b>strong consciousness</b> and a <b>loyal tribe.</b></p>"

            ScoreDisplay.style.color = 'var(--c2a)'
        }
    }
}


let randomAudioNo;

let snap01 = new Audio(`../assets/sfx/snap01.mp3`)
let snap02 = new Audio(`../assets/sfx/snap02.mp3`)
let snap03 = new Audio(`../assets/sfx/snap03.mp3`)
let snap04 = new Audio(`../assets/sfx/snap04.mp3`)
let snap05 = new Audio(`../assets/sfx/snap05.mp3`)
let snap06 = new Audio(`../assets/sfx/snap06.mp3`)
let snap07 = new Audio(`../assets/sfx/snap07.mp3`)

function updateThumb(event) {
    const element = event.target;
    element.classList.remove('unset');
    element.setAttribute('value', element.value);

    checkProgressBar()

    randomAudioNo = Math.round(Math.random() * 6 + 1)
    if (randomAudioNo == 1) {
        snap01.play()
    } else if (randomAudioNo == 2) {
        snap02.play()
    } else if (randomAudioNo == 3) {
        snap03.play()
    } else if (randomAudioNo == 4) {
        snap04.play()
    } else if (randomAudioNo == 5) {
        snap05.play()
    } else if (randomAudioNo == 6) {
        snap06.play()
    } else if (randomAudioNo == 7) {
        snap07.play()
    }
    // new Audio(`../assets/sfx/snap0${randomAudioNo}.mp3`).play()

    vibrate()
}


// FORMFIELDS TOGGLING

const backBt = document.querySelector('.fieldset_controls .back')
const nextBt = document.querySelector('.fieldset_controls .next')

let formPosition = 0;

const formFieldsets = document.querySelectorAll('form fieldset')

formFieldsets[formPosition].classList.add('visible')

const lastFieldPos = formFieldsets.length - 1

const quizCtnrDistance = window.scrollY + document.querySelector('.quiz_ctnr').getBoundingClientRect().top

function checkFieldsets(direction) {
    if (direction == 'forwards') {
        if (!formFieldsets[lastFieldPos].classList.contains('visible')) {
            backBt.classList.remove('disabled');
            formFieldsets[formPosition].classList.remove('visible');
            formPosition++;
            formFieldsets[formPosition].classList.add('visible');

            window.scrollTo(0, quizCtnrDistance)

            if (formPosition === lastFieldPos) {
                nextBt.classList.add('disabled');
            }
        }
    } else if (direction == 'backwards') {
        if (!formFieldsets[0].classList.contains('visible')) {
            nextBt.classList.remove('disabled');
            formFieldsets[formPosition].classList.remove('visible');
            formPosition--;
            formFieldsets[formPosition].classList.add('visible');

            if (formPosition === 0) {
                backBt.classList.add('disabled');
            }
        }
    }
}


const firstFields = document.querySelectorAll('.contact fieldset:first-child input, .contact fieldset:first-child select')

for (i = 0; i < firstFields.length; i++) {
    firstFields[i].addEventListener('input', function () {
        const allFilled = Array.from(firstFields).every(input => input.value.trim() !== '');

        if (allFilled) {
            submitBt.classList.remove('disabled')
        } else {
            submitBt.classList.add('disabled')
        }
    })
}