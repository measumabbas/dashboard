console.log('Dashboard')

const tables = document.querySelector('.table');
tables.addEventListener('click',()=>{
    const bootstrap = document.querySelector('.bootstrap-drop');
    const chevron = document.querySelector('.fa-chevron-right')
    chevron.classList.toggle('rotate')
    bootstrap.classList.toggle('bootstrap-show')
    // bootstrap.style.paddingLeft='20px'
    console.log('clicked')
})