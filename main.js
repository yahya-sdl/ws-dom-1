// DOM Elements
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.getElementById('total-price');

// Helper function to update the total price
function updateTotalPrice() {
let totalPrice = 0;
cartItems.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').innerText.replace('$', ''));
    const quantity = parseInt(item.querySelector('.quantity').innerText, 10);
    totalPrice += price * quantity;
});
totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

// Add event listeners to each cart item
cartItems.forEach(item => {
const minusButton = item.querySelector('.btn-minus');
const plusButton = item.querySelector('.btn-plus');
const deleteButton = item.querySelector('.btn-delete');
const likeButton = item.querySelector('.btn-like');
const quantityElement = item.querySelector('.quantity');

  // Decrease quantity
minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText, 10);
    if (quantity > 1) {
    quantityElement.innerText = quantity - 1;
    updateTotalPrice();
    }
});

  // Increase quantity
plusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText, 10);
    quantityElement.innerText = quantity + 1;
    updateTotalPrice();
});

  // Delete item
deleteButton.addEventListener('click', () => {
    item.remove();
    updateTotalPrice();
});

  // Like item
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked'); // Assume the 'liked' class changes the color
});
});

// Initial total price calculation
updateTotalPrice();
