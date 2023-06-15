let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = true;

let resultCtnr = document.querySelector('.result');
let resultCtnrOffset;

let maxScore = 0;

const resultText = document.querySelector('.result .general.txt')

const ScoreDisplay = document.querySelector('.score .current')

const warning = document.querySelector('.warning')

for (i = 0; i < answers.length; i++) {

    maxScore += Number(answers[i].getAttribute('max'))

    if (i == answers.length - 1) {
        document.querySelector('.score .total').innerHTML = '/ ' + maxScore
    }
}

function calculateScore() {

    // for (i = 0; i < answers.length; i++) {
    //     if (answers[i].classList.contains('unset')) {
    //         warning.classList.add('visible')

    //         setTimeout(() => {
    //             warning.classList.remove('visible')
    //         }, 2000);

    //         allFilled = false;
    //         return
    //     } else {
    //         allFilled = true;
    //     }
    // }

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

            ScoreDisplay.style.color = 'orange'

        } else if (score >= 60 && score <= 89) {
            resultText.innerHTML = "<p>Your brand is on its way to <b>developing consciousness</b>, but there are many areas to improve. <b>A structured approach could help strengthen your brand's identity.</b></p>"

            ScoreDisplay.style.color = 'yellow'

        } else if (score >= 90 && score <= 119) {
            resultText.innerHTML = "<p>Your brand has a <b>good level of consciousness</b>, but there's still room for improvement. <b>Consider focusing on areas where your score was lower.</b></p>"

            ScoreDisplay.style.color = 'greenyellow'

        } else if (score >= 120) {
            resultText.innerHTML = "<p>Your brand has a <b>strong consciousness</b> and a <b>loyal tribe.</b></p>"

            ScoreDisplay.style.color = 'var(--c2a)'
        }
    }
}

function updateThumb(event) {
    const element = event.target;
    element.classList.remove('unset');
    element.setAttribute('value', element.value);
}

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("input", (event) => {
        updateThumb(event)
        resultCtnr.classList.add('hidden');
        resultCtnr.style.maxHeight = '0'
    });

    answers[i].addEventListener("mousedown", updateThumb);
    answers[i].addEventListener("touchstart", updateThumb);
}



// FORMFIELDS TOGGLING

// const backBt = document.querySelector('.fieldset_controls .back')
// const nextBt = document.querySelector('.fieldset_controls .next')

// let formPosition = 0;

// const formFieldsets = document.querySelectorAll('form fieldset')

// formFieldsets[formPosition].classList.add('visible')

// const lastFieldPos = formFieldsets.length - 1

// function checkFieldsets(direction) {
//     if (direction == 'forwards') {
//         if (!formFieldsets[lastFieldPos].classList.contains('visible')) {
//             backBt.classList.remove('disabled');
//             formFieldsets[formPosition].classList.remove('visible');
//             formPosition++;
//             formFieldsets[formPosition].classList.add('visible');

//             if (formPosition === lastFieldPos) {
//                 nextBt.classList.add('disabled');
//             }
//         }
//     } else if (direction == 'backwards') {
//         if (!formFieldsets[0].classList.contains('visible')) {
//             nextBt.classList.remove('disabled');
//             formFieldsets[formPosition].classList.remove('visible');
//             formPosition--;
//             formFieldsets[formPosition].classList.add('visible');

//             if (formPosition === 0) {
//                 backBt.classList.add('disabled');
//             }
//         }
//     }
// }


// const firstFields = document.querySelectorAll('.contact fieldset:first-child input, .contact fieldset:first-child select')

// for (i = 0; i < firstFields.length; i++) {
//     firstFields[i].addEventListener('input', function () {
//         const allFilled = Array.from(firstFields).every(input => input.value.trim() !== '');

//         if (allFilled) {
//             submitBt.classList.remove('disabled')
//         } else {
//             submitBt.classList.add('disabled')
//         }
//     })
// }