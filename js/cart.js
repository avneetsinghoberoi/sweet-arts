let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cartItems");

function renderCart() {
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty.</p>";
    document.getElementById("total").innerText = "";
    return;
  }

  cartDiv.innerHTML = cart.map((p, i) => `
    <div class="card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div>
        <h3>${p.name}</h3>
        <p>₹${p.price} × ${p.qty}</p>
      </div>
      <div>
        <button class="btn" onclick="updateQty(${i}, -1)">-</button>
        <button class="btn" onclick="updateQty(${i}, 1)">+</button>
        <button class="btn" onclick="removeItem(${i})">Remove</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);
  document.getElementById("total").innerText = `Total: ₹${total}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQty(i, delta) {
  cart[i].qty += delta;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  renderCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

renderCart();
