
// Add interactivity using JavaScript
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
    item.addEventListener('click', () => {
        // You can customize this action based on your needs
        alert(`You clicked on ${item.querySelector('h3').textContent}`);
    });
});



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})