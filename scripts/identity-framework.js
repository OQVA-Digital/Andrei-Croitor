let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

function calculateScore() {
    score = 0;

    for (i = 0; i < answers.length; i++) {
        score += Number(answers[i].value)
    }

    alert(score + " points")

    // if (answers) {
    //     score = parseInt(answers.value);

    //     // Perform further calculations or actions based on the score
    //     console.log("Selected score: " + score);
    // } else {
    //     console.log("Please select the answers.");
    // }
}

function showThumb() {
    this.classList.remove('unset')
}

for (i = 0; i < answers.length; i++) {
    answers[i].addEventListener("input", showThumb);
    // answers[i].addEventListener("change", showThumb);
}