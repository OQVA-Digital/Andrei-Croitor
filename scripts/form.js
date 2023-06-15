

// NETLIFY FORM

const allInputs = document.querySelectorAll('input, textarea')

// Create error warning
const errorWarning = document.createElement('span')
document.body.appendChild(errorWarning)
errorWarning.classList.add('warning', 'error')
errorWarning.innerHTML = 'Something went wrong. Please, try again later!'

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => success())
    .catch((error) => error());
};


document.querySelector("form").addEventListener("submit", handleSubmit);

const formBt = document.querySelector('form button[type="submit"]')

function success() {
  formBt.innerHTML = 'Successfully sent. Thanks!'
}

function error() {
  errorWarning.classList.add('visible')

  setTimeout(() => {
    errorWarning.classList.remove('visible')
  }, 2500);
}