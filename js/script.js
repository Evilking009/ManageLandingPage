const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {

    // Change animation of Menu Icon Mobile
    btn.classList.toggle('open');

    // Display Mobile Menu
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');

});