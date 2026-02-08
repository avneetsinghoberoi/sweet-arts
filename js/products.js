const productsByCategory = {
  cakes: [
    { id: "cake01", name: "Chocolate Truffle Cake", price: 699, img: "assets/images/choco truffle cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ]},
    {id: "cake02", name: "Chocolate Cake", price: 799, img: "assets/images/chocolate_cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake03", name: "Red Velvet Cake", price: 799, img: "assets/images/red velvet cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake04", name: "Assorted Fruits Cake", price: 799, img: "assets/images/Fruit cake.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake05", name: "Blueberry Cake", price: 799, img: "assets/images/blueberry cake.jpeg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake06", name: "Ferrero Rocher Cake", price: 799, img: "assets/images/ferrero rocher cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake07", name: "KitKat Cake", price: 799, img: "assets/images/kit kat cake.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake08", name: "Nutella Cake", price: 799, img: "assets/images/nutella cake.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake09", name: "Rasmalai Cake", price: 799, img: "assets/images/rasmalai_cake.jpg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake10", name: "Rainbow Cake", price: 799, img: "assets/images/rainbow cake.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake11", name: "Lotus Biscoff Cake", price: 799, img: "assets/images/lotus biscoff cake.jpeg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake12", name: "Hazelnut Cake", price: 799, img: "assets/images/hazelnut cake.jpg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake13", name: "Walnut Vanilla Cake", price: 799, img: "assets/images/walnut_vanilla.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake14", name: "ButterScotch Cake", price: 799, img: "assets/images/butterscotch.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake15", name: "Black Forest Cake", price: 799, img: "assets/images/black forest cake.jpg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake16", name: "Pineapple Cake", price: 799, img: "assets/images/Pineapple_Fruit_cake.webp",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake17", name: "Mango Cake", price: 799, img: "assets/images/mango cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake18", name: "Orange Cake", price: 799, img: "assets/images/orange cake.jpg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake19", name: "Strawberry Cake", price: 799, img: "assets/images/strawberry cake.png",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
    {id: "cake20", name: "Gulab Jamun Cake", price: 799, img: "assets/images/gulab jamun cake.jpg",variants: [
    { label: "1 Pound", price: 699 },
    { label: "2 Pound", price: 1299 }
  ] },
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

function showCartBanner() {
  const banner = document.getElementById("cartBanner");
  if (!banner) return;
  banner.classList.add("show");
  setTimeout(() => banner.classList.remove("show"), 3000);
}

// Merge by id (variant-specific id)
function addToCart(item) {
  const cart = getCart();
  const existing = cart.find((p) => p.id === item.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  setCart(cart);
  showCartBanner();
}

// ===============================
// PRODUCT RENDERING
// ===============================
const container = document.getElementById("products");
const categoryBar = document.getElementById("categoryBar");

function setActiveButton(activeKey) {
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === activeKey);
  });
}

function renderProducts(categoryKey) {
  if (!container) return;

  const items = productsByCategory[categoryKey] || [];

  if (items.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; opacity:0.7;">No products in this category yet.</p>`;
    return;
  }

  container.innerHTML = items
    .map((p) => {
      const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;

      const initialPrice = hasVariants ? p.variants[0].price : p.price;

      const variantHtml = hasVariants
        ? `
          <select class="variant-select" data-product-id="${p.id}" data-category="${categoryKey}">
            ${p.variants
              .map((v) => `<option value="${v.label}">${v.label} - ₹${v.price}</option>`)
              .join("")}
          </select>
        `
        : "";

      return `
        <div class="card">
          <img src="${p.img}" class="card-img" alt="${p.name}"/>
          <h3>${p.name}</h3>
          <p class="price" id="price-${p.id}">₹${initialPrice}</p>
          ${variantHtml}
          <button class="btn add-btn" data-cat="${categoryKey}" data-id="${p.id}">
            Add to Cart
          </button>
        </div>
      `;
    })
    .join("");
}

// ===============================
// EVENT HANDLERS
// ===============================
if (container) {
  // 1) Add to cart (delegated)
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-btn");
    if (!btn) return;

    const cat = btn.dataset.cat;
    const id = btn.dataset.id;

    const product = (productsByCategory[cat] || []).find((p) => p.id === id);
    if (!product) {
      console.error("❌ Product not found:", cat, id);
      return;
    }

    // If variants exist, read the selected variant
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      const select = container.querySelector(
        `select.variant-select[data-product-id="${id}"][data-category="${cat}"]`
      );

      const selectedLabel = select?.value || product.variants[0].label;
      const selectedVariant =
        product.variants.find((v) => v.label === selectedLabel) || product.variants[0];

      addToCart({
        id: `${product.id}-${selectedVariant.label}`, // unique per variant
        name: `${product.name} (${selectedVariant.label})`,
        price: selectedVariant.price,
        img: product.img,
        baseId: product.id,
        variant: selectedVariant.label,
        category: cat,
      });
    } else {
      // No variants
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        baseId: product.id,
        category: cat,
      });
    }
  });

  // 2) Update price UI when variant dropdown changes
  container.addEventListener("change", (e) => {
    const sel = e.target.closest(".variant-select");
    if (!sel) return;

    const productId = sel.dataset.productId;
    const cat = sel.dataset.category;

    const product = (productsByCategory[cat] || []).find((p) => p.id === productId);
    if (!product || !product.variants) return;

    const selectedLabel = sel.value;
    const selectedVariant =
      product.variants.find((v) => v.label === selectedLabel) || product.variants[0];

    const priceEl = document.getElementById(`price-${productId}`);
    if (priceEl) priceEl.textContent = `₹${selectedVariant.price}`;
  });
}

// ===============================
// CATEGORY BAR
// ===============================
if (categoryBar) {
  categoryBar.innerHTML = categoryList
    .map((c) => `<button class="cat-btn" data-key="${c.key}">${c.label}</button>`)
    .join("");

  categoryBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;

    const key = btn.dataset.key;
    setActiveButton(key);
    renderProducts(key);
  });
}

// Default load
const defaultKey = "cakes";
setActiveButton(defaultKey);
renderProducts(defaultKey);