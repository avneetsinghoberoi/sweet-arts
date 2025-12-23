let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}

function loadCart() {
  const cartDiv = document.getElementById("cartItems");
  const totalSpan = document.getElementById("total");
  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  totalSpan.textContent = total;
}

function placeOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Please fill all details");
    return;
  }

  alert("🎉 Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

loadCart();
