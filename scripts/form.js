

// NETLIFY FORM

const allInputs = document.querySelectorAll('input, textarea')

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
    .catch((error) => alert(error));
};


document.querySelector("form").addEventListener("submit", handleSubmit);

const formBt = document.querySelector('form button[type="submit"]')

function success() {
  formBt.innerHTML = 'Successfully sent. Thanks!'
}