

document.querySelector('#email').addEventListener('input', validateEmail);
document.querySelector('#name').addEventListener('input', validateName);
document.querySelector('#password').addEventListener('input', validatePassword);
document.querySelector('#cpassword').addEventListener('input', validatecPassword);
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.pass-input');
const login = document.querySelector('#submit')


login.disabled = true;


function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        emailInput.style.borderColor = 'red';
        login.disabled = true;
    } else {
        emailInput.style.borderColor = '#fff';
    }

}


function validatePassword() {
    const password = document.getElementById('password');
    const passwordInput = document.querySelector('.pass-input')

    if (password.value.length < 7) {
        passwordInput.style.borderColor = 'red';
        login.disabled = true;
    }
    else {
        passwordInput.style.borderColor = '#fff';

    }
}
function validatecPassword() {
    const password = document.getElementById('cpassword');
    const passwordInput = document.querySelector('.cpass-input')
    const passValue = document.querySelector('#password').value;

    if (password.value !== passValue) {
        passwordInput.style.borderColor = 'red';
        login.disabled=true;
    }
    else {
        console.log(passValue)
        passwordInput.style.borderColor = '#fff';
        login.disabled = false;
    }
}
function validateName() {
    const name = document.getElementById('name');
    const nameInput = document.querySelector('.name-input')

    if (name.value.length < 7) {
        nameInput.style.borderColor = 'red';
        login.disabled = true;
    }
    else {
        nameInput.style.borderColor = '#fff';
        

    }
}


login.addEventListener('click',(e)=>{

    e.preventDefault();
    window.location.href='/dashboard/dashboard.html'
})