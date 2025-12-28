let cart = [];
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartItemsList = document.getElementById('cart-items-list');
const cartSidebar = document.getElementById('cart-sidebar');

function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    cartCount.innerText = cart.length;
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsList.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;
    });
    cartTotal.innerText = total;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function processPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Redirecting to Secure Payment Gateway...\nTotal Amount: ₹" + cartTotal.innerText);
    cart = [];
    updateCartUI();
    toggleCart();
    alert("Success! Your coffee will be ready in 10 minutes at our Jaipur branch.");
}

function openModal(type) {
    document.getElementById('auth-modal').style.display = 'flex';
    document.getElementById('modal-title').innerText = type === 'login' ? 'Sign In' : 'Sign Up';
}

function closeModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function toggleAuthMode() {
    const title = document.getElementById('modal-title');
    title.innerText = title.innerText === 'Sign In' ? 'Sign Up' : 'Sign In';
}



function toggleAuthMode() {
    const title = document.getElementById('modal-title');
    const subtitle = document.getElementById('modal-subtitle');
    const nameField = document.getElementById('username-field');
    const toggleDesc = document.getElementById('toggle-desc');
    const toggleLink = document.getElementById('toggle-link');

    if (title.innerText === 'Sign In') {
        title.innerText = 'Create Account';
        subtitle.innerText = 'Join our coffee community today.';
        nameField.style.display = 'block';
        toggleDesc.innerText = 'Already have an account?';
        toggleLink.innerText = 'Sign In';
    } else {
        title.innerText = 'Sign In';
        subtitle.innerText = 'Welcome back! Please enter your details.';
        nameField.style.display = 'none';
        toggleDesc.innerText = "Don't have an account?";
        toggleLink.innerText = 'Sign Up';
    }
}