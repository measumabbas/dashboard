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
// page-drop-show
const page = document.querySelector('.page');
// console.log(page);
page.addEventListener('click',()=>{
    const pageDown = document.querySelector('.page-drop')
    pageDown.classList.toggle('page-drop-show')
    const pageChevron = document.querySelector('.page-chevron')
    pageChevron.classList.toggle('rotate')
})

const component = document.querySelector('.component')
    component.addEventListener('click',()=>{
    const pageDown = document.querySelector('.component-drop')
    pageDown.classList.toggle('component-drop-show')
    const pageChevron = document.querySelector('.component-chevron')
    pageChevron.classList.toggle('rotate')
})