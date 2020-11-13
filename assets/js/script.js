function menuToggle() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle('menu-in');

    let toggle = document.querySelector('#toggle');
    toggle.classList.toggle('active');
}