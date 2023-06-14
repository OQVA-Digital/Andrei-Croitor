let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = true;

let resultCtnr = document.querySelector('.result');
let resultCtnrOffset;

let maxScore = 0;

const resultText = document.querySelector('.result .general.txt')

for (i = 0; i < answers.length; i++) {

    maxScore += Number(answers[i].getAttribute('max'))

    if (i == answers.length - 1) {
        console.log(maxScore + " is the max score")
        console.log(maxScore / 2)
        console.log(maxScore / 3)
        console.log(maxScore / 4)
        console.log(maxScore / 5)
        console.log(maxScore / 6)

        document.querySelector('.score .total').innerHTML = '/ ' + maxScore
    }
}

function calculateScore() {

    // for (i = 0; i < answers.length; i++) {
    //     if (answers[i].classList.contains('unset')) {
    //         alert("Please, answer all the fields.");
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
        resultCtnr.style.maxHeight = resultCtnr.scrollHeight + 100 + 'px'
        resultCtnrOffset = resultCtnr.offsetTop

        document.querySelector('.score .current').innerHTML = score

        setTimeout(() => {
            window.scrollTo(0, window.scrollY + (window.innerHeight / 2))
        }, 400);

        if (score < 60) {
            resultText.innerHTML = "<p>Your brand is in the early stages of developing its consciousness. <b>Don't worry - with focus and effort, you can build a strong brand consciousness.</b></p>"
        } else if (score >= 60 && score <= 89) {
            resultText.innerHTML = "<p>Your brand is on its way to <b>developing consciousness</b>, but there are many areas to improve. <b>A structured approach could help strengthen your brand's identity.</b></p>"
        } else if (score >= 90 && score <= 119) {
            resultText.innerHTML = "<p>Your brand has a <b>good level of consciousness</b>, but there's still room for improvement. <b>Consider focusing on areas where your score was lower.</b></p>"
        } else if (score >= 120) {
            resultText.innerHTML = "<p>Your brand has a <b>strong consciousness</b> and a <b>loyal tribe.</b></p>"
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