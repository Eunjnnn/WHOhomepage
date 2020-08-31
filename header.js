const toggleBtn = document.querySelector('.navbarBtn');
const menu = document.querySelector('.navbarMenu');
const icons = document.querySelector('.navbarIcon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});