const productsByCategory = {
  cakes: [
    { id: "cake01", name: "Chocolate Truffle Cake", price: 699, img: "assets/images/choco truffle cake.png"},
    {id: "cake02", name: "Chocolate Cake", price: 799, img: "assets/images/chocolate_cake.png" },
    {id: "cake03", name: "Red Velvet Cake", price: 799, img: "assets/images/red velvet cake.png" },
    {id: "cake04", name: "Assorted Fruits Cake", price: 799, img: "assets/images/Fruit cake.webp" },
    {id: "cake05", name: "Blueberry Cake", price: 799, img: "assets/images/blueberry cake.jpeg" },
    {id: "cake06", name: "Ferrero Rocher Cake", price: 799, img: "assets/images/ferrero rocher cake.png" },
    {id: "cake07", name: "KitKat Cake", price: 799, img: "assets/images/kit kat cake.webp" },
    {id: "cake08", name: "Nutella Cake", price: 799, img: "assets/images/nutella cake.webp" },
    {id: "cake09", name: "Rasmalai Cake", price: 799, img: "assets/images/rasmalai_cake.jpg" },
    {id: "cake10", name: "Rainbow Cake", price: 799, img: "assets/images/rainbow cake.webp" },
    {id: "cake11", name: "Lotus Biscoff Cake", price: 799, img: "assets/images/lotus biscoff cake.jpeg" },
    {id: "cake12", name: "Hazelnut Cake", price: 799, img: "assets/images/hazelnut cake.jpg" },
    {id: "cake13", name: "Walnut Vanilla Cake", price: 799, img: "assets/images/walnut_vanilla.png" },
    {id: "cake14", name: "ButterScotch Cake", price: 799, img: "assets/images/butterscotch.webp" },
    {id: "cake15", name: "Black Forest Cake", price: 799, img: "assets/images/black forest cake.jpg" },
    {id: "cake16", name: "Pineapple Cake", price: 799, img: "assets/images/Pineapple_Fruit_cake.webp" },
    {id: "cake17", name: "Mango Cake", price: 799, img: "assets/images/mango cake.png" },
    {id: "cake18", name: "Orange Cake", price: 799, img: "assets/images/orange cake.jpg" },
    {id: "cake19", name: "Strawberry Cake", price: 799, img: "assets/images/strawberry cake.png" },
    {id: "cake20", name: "Gulab Jamun Cake", price: 799, img: "assets/images/gulab jamun cake.jpg" },
  ],
  pastries: [
    { id: "pastry01", name: "Chocolate Pastry", price: 99, img: "assets/images/chocolate pastry.webp" },
    { id: "pastry02", name: "Chocolate Truffle Pastry", price: 99, img: "assets/images/Chocolate_Truffle_Pastry.webp" },
    { id: "pastry03", name: "Pineapple Pastry", price: 99, img: "assets/images/PineapplePastry.webp" },
    { id: "pastry04", name: "Mango Pastry", price: 99, img: "assets/images/mango pastry.jpg" },
    { id: "pastry05", name: "Black forest Pastry", price: 99, img: "assets/images/BlackForestPastry.webp" },
    { id: "pastry06", name: "Butterscotch Pastry", price: 99, img: "assets/images/Butterscotch-Pastry.jpg" },
    { id: "pastry07", name: "rasmalai Pastry", price: 99, img: "assets/images/RasmalaiPastry.webp" },
    { id: "pastry08", name: "Fruit Pastry", price: 99, img: "assets/images/fruit_pastry.webp" },

  ],
  dryCakes: [
    { id: "dry01", name: "Butter Dry Cake", price: 199, img: "assets/images/dry cakes/butter_dry_cake.jpg" },
    { id: "dry02", name: "Marble Dry Cake", price: 199, img: "assets/images/dry cakes/marble_cake.jpeg" },
    { id: "dry03", name: "Dry Fruit Cake", price: 199, img: "assets/images/dry cakes/dryfruit_drycake.jpg" },
    { id: "dry04", name: "Vanilla Dry Cake", price: 199, img: "assets/images/dry cakes/vanilla_dry_cake.webp" },
    { id: "dry05", name: "Plum Dry Cake", price: 199, img: "assets/images/dry cakes/plum-cake.jpg" },
    { id: "dry06", name: "Carrot Cinnamon Dry Cake", price: 199, img: "assets/images/dry cakes/carrot_cinammon.jpg" },
    { id: "dry07", name: "Whole Wheat Dry Cake", price: 199, img: "assets/images/dry cakes/whole_wheat.jpg" },
    { id: "dry08", name: "Pineapple Upside Down Dry Cake", price: 199, img: "assets/images/dry cakes/pineapple_ud.jpg" },
    { id: "dry09", name: "Choco Mud Dry Cake", price: 199, img: "assets/images/dry cakes/choco_mud.jpeg" },
    { id: "dry10", name: "Mawa Dry Cake", price: 199, img: "assets/images/dry cakes/mawa.jpg" },
    { id: "dry11", name: "Orange Cranberry Dry Cake", price: 199, img: "assets/images/dry cakes/orange-cranberry.webp" },
    { id: "dry12", name: "Fruit Pound Dry Cake", price: 199, img: "assets/images/dry cakes/fruit_pound.jpg" },

  ],
  Gifting: [
    { id: "muffin01", name: "Assorted Muffins (Pack of 4)", price: 79, img: "https://via.placeholder.com/300" },
    { id: "muffin02", name: "Assorted Muffins (Pack of 6)", price: 79, img: "https://via.placeholder.com/300" },
    { id: "muffin03", name: "Assorted Muffins (Pack of 8)", price: 79, img: "https://via.placeholder.com/300" },
    { id: "muffin04", name: "Chocolate Balls (Pack of 4)", price: 79, img: "https://via.placeholder.com/300" },
    { id: "muffin05", name: "Chocolate Balls (Pack of 6)", price: 79, img: "https://via.placeholder.com/300" },

  ],
};
const categoryList = [
  { key: "cakes", label: "CAKES" },
  { key: "pastries", label: "PASTRIES" },
  { key: "dryCakes", label: "DRY CAKES" },
  { key: "Gifting", label: "GIFTS" },
];

function showCartBanner() {
  const banner = document.getElementById("cartBanner");
  banner.classList.add("show");

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

// ✅ Render products for selected category
const container = document.getElementById("products");

function renderProducts(categoryKey) {
  const items = productsByCategory[categoryKey] || [];

  container.innerHTML = items.map(p => `
    <div class="card">
      <img src="${p.img}" class="card-img"/>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button class="btn" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    </div>
  `).join("");

  if (items.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; opacity:0.7;">No products in this category yet.</p>`;
  }
}

// ✅ Category Switch UI
const categoryBar = document.getElementById("categoryBar");

function setActiveButton(activeKey) {
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === activeKey);
  });
}

categoryBar.innerHTML = categoryList.map(c => `
  <button class="cat-btn" data-key="${c.key}">${c.label}</button>
`).join("");

// click handler
categoryBar.addEventListener("click", (e) => {
  if (!e.target.classList.contains("cat-btn")) return;
  const key = e.target.dataset.key;
  setActiveButton(key);
  renderProducts(key);
});

// ✅ Default category load
const defaultKey = "cakes";
setActiveButton(defaultKey);
renderProducts(defaultKey);


