function toggleNavbar() {
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
        content.classList.remove('show-navbar');
    } else {
        navbar.style.display = 'block';
        content.classList.add('show-navbar');
    }
}