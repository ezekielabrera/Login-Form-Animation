// For input-icon
const inputFields = document.querySelectorAll('.input-field');
const icons = document.querySelectorAll('.input-icon');

inputFields.forEach((inputField, index) => {
  const icon = icons[index];

  inputField.addEventListener('input', function() {
    if (inputField.value.trim() !== '') {
      icon.style.color = 'var(--link-color)';
    } else {
      icon.style.color = 'var(--text-color)';
    }
  });
});


//For show password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
// toggle the type attribute
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
// toggle the eye / eye slash icon
this.classList.toggle('bi-eye');
});


