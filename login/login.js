


document.querySelector('#email').addEventListener('input',validateEmail);
document.querySelector('#password').addEventListener('input', validatePassword);
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.pass-input');
const login = document.querySelector('#submit')
login.disabled=true;

function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  if(!re.test(email.value)){
    emailInput.style.borderColor = 'red';
    login.disabled=true;
  } else {
    emailInput.style.borderColor = '#fff';
    
    
  }
  
    
  }
  function validatePassword(){
    const password = document.getElementById('password');
    
    if(password.value.length < 7){
      passwordInput.style.borderColor = 'red';
      login.disabled=true;
    }
    else{
      passwordInput.style.borderColor = '#fff';
      login.disabled=false;
      
    }
  
}


login.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log('button clicked');
  window.location.href='/dashboard/dashboard.html'
})