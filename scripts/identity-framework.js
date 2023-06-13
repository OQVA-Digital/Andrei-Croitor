let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = false;

function calculateScore() {

    for (i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains('unset')) {
            alert("Please, answer all the fields.");
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

        alert(score + " points")
    }

    // if (answers) {
    //     score = parseInt(answers.value);

    //     // Perform further calculations or actions based on the score
    //     console.log("Selected score: " + score);
    // } else {
    //     console.log("Please select the answers.");
    // }
}

function updateThumb() {
    this.classList.remove('unset')
    this.setAttribute('value', this.value)
}

for (i = 0; i < answers.length; i++) {
    answers[i].addEventListener("input", updateThumb);
    answers[i].addEventListener("mousedown", updateThumb);
    answers[i].addEventListener("touchstart", updateThumb);
}