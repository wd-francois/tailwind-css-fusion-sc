const scriptURL = 'https://script.google.com/macros/s/AKfycbzMrinVtFjV7zJa_feNSMaTy33G_cYw6yA801UXXSNsL43T77Aiwyn-wxCVxsoe83I3qA/exec'

const form = document.forms['sign_up_form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})