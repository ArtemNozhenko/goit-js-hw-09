const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', handleInput);
window.addEventListener('load', checkLocalStorage);
feedbackForm.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;
  const formData = getFormData();

  formData[name] = value.trim();
  saveFormData(formData);
}

function checkLocalStorage() {
  const formData = getFormData();

  feedbackForm.elements['email'].value = formData.email || '';
  feedbackForm.elements['message'].value = formData.message || '';
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = getFormData();

  if (formData.email && formData.message) {
    console.log({
      email: formData.email,
      message: formData.message,
    });

    saveFormData({});
    feedbackForm.reset();
  } else {
    alert('Please fill out all fields before submitting!');
  }
}

function getFormData() {
  const storedData = localStorage.getItem('feedback-form-state');
  return storedData ? JSON.parse(storedData) : {};
}

function saveFormData(formData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
