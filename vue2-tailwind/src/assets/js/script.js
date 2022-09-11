
// [MENU TOGGLE]
const sideBar = document.querySelector('.sidebar');
const btnToggle = document.querySelector('.btn-toggle')
btnToggle.addEventListener('click', () => {
    sideBar.toggleAttribute('open')
    btnToggle.toggleAttribute('open');
})
const dropdownBtn=document.querySelectorAll('.dropdown-link');
console.log(dropdownBtn);
const dropdown=document.querySelector('.dropdown');
for(let i=0;i<=dropdownBtn.length;i++){
    dropdownBtn[i].addEventListener('click',()=>{
        dropdownBtn[i].nextElementSibling.classList.toggle('dropdown-active');
    });
}