const formCheckLabel = document.querySelector('.form-check-label');
formCheckLabel.addEventListener('click', () => {
  const formCheckInput = document.querySelector('.form-check-input');
  formCheckInput.checked = !formCheckInput.checked;
})