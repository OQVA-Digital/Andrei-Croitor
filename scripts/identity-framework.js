let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = true;

let resultCtnr = document.querySelector('.result');
let resultCtnrOffset;

let maxScore = 0;

for (i = 0; i < answers.length; i++) {

    maxScore += Number(answers[i].getAttribute('max'))

    if (i == answers.length - 1) {
        console.log(maxScore + " is the max score")

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
        resultCtnrOffset = resultCtnr.offsetTop

        document.querySelector('.score .current').innerHTML = score

        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight)
        }, 400);
    }

    // if (answers) {
    //     score = parseInt(answers.value);

    //     // Perform further calculations or actions based on the score
    //     console.log("Selected score: " + score);
    // } else {
    //     console.log("Please select the answers.");
    // }
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
    });

    answers[i].addEventListener("mousedown", updateThumb);
    answers[i].addEventListener("touchstart", updateThumb);
}