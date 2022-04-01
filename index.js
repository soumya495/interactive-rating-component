const ratingForm = document.querySelector('form')
const radioInputs = document.querySelectorAll('.input-radio')
const button = document.querySelector('button')
const main = document.querySelector('main')
const icon = document.querySelector('.icon')
const star = document.querySelector('.star-image')

function addThankyou(val) {
  icon.classList.remove('expand-main')
  star.classList.remove('rotate')
  main.innerHTML = ''
  main.innerHTML = `
    <div class="thank-you-wrapper">
    <img
      src="./images/illustration-thank-you.svg"
      alt="thank-you-image"
      class="thank-you-image"
    />
    <div class="rating-text">You selected ${val} out of 5</div>
    <h1>Thank You!</h1>
    <p class="thank-you-message">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>
    `
}

radioInputs.forEach((radioInput) => {
  radioInput.addEventListener('change', () => {
    if (radioInput.checked) {
      button.classList.remove('disabled-btn')
      button.disabled = false
    }
  })
})

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const ratingVal = ratingForm.elements.rating.value
  icon.classList.add('expand-icon')
  star.classList.add('rotate')
  setTimeout(function () {
    addThankyou(ratingVal)
  }, 2000)
  // reset
  radioInputs.forEach((radioInput) => {
    radioInput.checked = false
  })
  button.classList.add('disabled-btn')
  button.disabled = true
})
