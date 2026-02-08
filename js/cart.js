function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartDiv = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

function renderCart() {
  const cart = getCart();

  if (!cartDiv || !totalEl) return;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty.</p>";
    totalEl.innerText = "";
    return;
  }

  cartDiv.innerHTML = cart
    .map(
      (p, i) => `
      <div class="card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div>
          <h3>${p.name}</h3>
          <p>₹${p.price} × ${p.qty}</p>
        </div>
        <div>
          <button class="btn qty-btn" data-index="${i}" data-delta="-1">-</button>
          <button class="btn qty-btn" data-index="${i}" data-delta="1">+</button>
          <button class="btn remove-btn" data-index="${i}">Remove</button>
        </div>
      </div>
    `
    )
    .join("");

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
  totalEl.innerText = `Total: ₹${total}`;
}

// Use event delegation instead of inline onclick
cartDiv?.addEventListener("click", (e) => {
  const cart = getCart();

  const qtyBtn = e.target.closest(".qty-btn");
  const removeBtn = e.target.closest(".remove-btn");

  if (qtyBtn) {
    const i = Number(qtyBtn.dataset.index);
    const delta = Number(qtyBtn.dataset.delta);

    if (!cart[i]) return;

    cart[i].qty += delta;
    if (cart[i].qty <= 0) cart.splice(i, 1);

    setCart(cart);
    renderCart();
    return;
  }

  if (removeBtn) {
    const i = Number(removeBtn.dataset.index);
    if (!cart[i]) return;

    cart.splice(i, 1);
    setCart(cart);
    renderCart();
  }
});

// If cart updates in another tab/page, auto refresh here
window.addEventListener("storage", (e) => {
  if (e.key === "cart") renderCart();
});

renderCart();


