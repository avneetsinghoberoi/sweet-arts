const sampleProducts = [
  { id: "cake01", name: "Chocolate Truffle Cake", price: 699, img: "https://via.placeholder.com/300" },
  { id: "pastry01", name: "Choco Pastry", price: 99, img: "https://via.placeholder.com/300" },
  { id: "cookie01", name: "Butter Cookies", price: 199, img: "https://via.placeholder.com/300" },
];
function showCartBanner() {
  const banner = document.getElementById("cartBanner");
  banner.classList.add("show");

  // Auto-hide after 5 seconds
  setTimeout(() => {
    banner.classList.remove("show");
  }, 5000);
}


function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === item.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartBanner();
}

const container = document.getElementById("products");
container.innerHTML = sampleProducts.map(p => `
  <div class="card">
    <img src="${p.img}" class="card-img"/>
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button class="btn" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
  </div>
`).join("");
