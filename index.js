const email = document.getElementById('email');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if (isValid()) {
      form.submit();
    }
});
const isValid=() =>{
    email.parentElement.classList.contains('success') 
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs=()=>{
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } 
    else{
        setSuccess(text);
      }
}