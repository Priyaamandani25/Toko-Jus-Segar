const products = [
  { id: 1, name: "Jus Mangga", price: 15000, image: "img/jus-mangga.jpg" },
  { id: 2, name: "Jus Alpukat", price: 18000, image: "img/jus-alpukat.jpg" },
  { id: 3, name: "Jus Jeruk", price: 12000, image: "img/jus-jeruk.jpg" },
  { id: 4, name: "Jus Semangka", price: 13000, image: "img/jus-semangka.jpg" },
  { id: 5, name: "Jus Stroberi", price: 16000, image: "img/jus-stroberi.jpg" },
  { id: 6, name: "Jus Melon", price: 14000, image: "img/jus-melon.jpg" },
  { id: 7, name: "Jus Nanas", price: 15000, image: "img/jus-nanas.jpg" }
];

const cart = [];
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart');
const totalDisplay = document.getElementById('total');

function renderProducts() {
  productList.innerHTML = ""; // bersihkan jika reload
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>Rp ${product.price}</p>
      <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = total;
}

// Toggle Cart Panel
const cartToggle = document.getElementById('cart-toggle');
const cartPanel = document.getElementById('cart-panel');
const closeCart = document.getElementById('close-cart');

cartToggle.addEventListener('click', () => {
  cartPanel.classList.add('show');
});

closeCart.addEventListener('click', () => {
  cartPanel.classList.remove('show');
});

renderProducts();
