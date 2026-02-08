import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { collection, query, where, orderBy, onSnapshot,doc, getDoc } from
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";



const ordersDiv = document.getElementById("orders");
const logoutBtn = document.getElementById("logoutBtn");
const refreshBtn = document.getElementById("refreshBtn");
const searchInput = document.getElementById("searchInput");

const countChip = document.getElementById("countChip");
const statusChip = document.getElementById("statusChip");

const greetUser = document.getElementById("greetUser");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");


let cachedOrders = [];

logoutBtn?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});

refreshBtn?.addEventListener("click", () => {
  if (auth.currentUser) loadOrders(auth.currentUser.uid);
});


searchInput?.addEventListener("input", () => {
  renderOrders(filterOrders(searchInput.value));
});

function formatDate(ts) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString();
}

function toNiceStatus(status = "") {
  const s = status.toLowerCase();

  if (s.includes("completed") || s.includes("delivered")) {
    return { cls: "completed", label: "Completed" };
  }
  if (s.includes("pending") || s.includes("upcoming")) {
    return { cls: "pending", label: status || "Upcoming" };
  }
  if (s.includes("confirm")) return { cls: "confirmed", label: status };
  if (s.includes("cancel")) return { cls: "cancelled", label: status };

  return { cls: "default", label: status || "Processing" };
}


function safeMoney(n) {
  const num = Number(n || 0);
  return `₹${num.toFixed(0)}`;
}

function orderMatches(o, q) {
  const query = q.trim().toLowerCase();
  if (!query) return true;

  const hay = [
    o.status,
    o.deliveryDate,
    o.paymentMode,
    String(o.total ?? ""),
    ...(o.items || []).map(i => i.name)
  ]
    .join(" ")
    .toLowerCase();

  return hay.includes(query);
}

function filterOrders(q) {
  return cachedOrders.filter(o => orderMatches(o, q));
}

function renderState(title, subtitle) {
  ordersDiv.innerHTML = `
    <div class="state-card">
      <h3 style="margin:0;">${title}</h3>
      <p>${subtitle}</p>
    </div>
  `;
}

function renderOrders(list) {
  countChip.textContent = String(list.length || 0);

  const latest = list[0];
  statusChip.textContent = latest?.status || "—";

  if (!list.length) {
    renderState("No orders found", "Try searching something else or place your first order.");
    return;
  }

  ordersDiv.innerHTML = list.map((o, idx) => {
    const st = toNiceStatus(o.status);
    const items = o.items || [];

    const itemsHtml = items.map(it => `
      <div class="item">
        <div>
          <div class="item-name">${it.name}</div>
          <div class="item-meta">Qty: ${it.qty} • Unit: ${safeMoney(it.price)}</div>
        </div>
        <div class="item-price">${safeMoney((it.price || 0) * (it.qty || 0))}</div>
      </div>
    `).join("");

    const orderIdFake = `SA-${new Date().getFullYear()}-${String(idx + 1).padStart(5, "0")}`;

    return `
      <article class="order-card" data-idx="${idx}">
        <div class="order-top">
          <div>
            <div class="order-id">${orderIdFake} • Placed: ${formatDate(o.createdAt)}</div>

            <div class="order-row">
              <span class="badge ${st.cls}">
                <span class="dot"></span> ${st.label}
              </span>

              <div class="order-kv"><b>Delivery:</b> ${o.deliveryDate || "—"}</div>
              <div class="order-kv"><b>Payment:</b> ${o.paymentMode || "—"}</div>
            </div>
          </div>

          <div class="total-box">
            <div class="total">${safeMoney(o.total)}</div>
            <div class="payment">${items.length} item(s)</div>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-ghost small-btn" data-action="toggle">View items</button>
          <button class="btn btn-primary small-btn" data-action="reorder">Reorder</button>
        </div>

        <div class="order-items" data-items>
          <div style="font-weight:800;">Order items</div>
          <div class="items-grid">${itemsHtml || ""}</div>
        </div>
      </article>
    `;
  }).join("");

  // Card actions (toggle + reorder)
  ordersDiv.querySelectorAll(".order-card").forEach(card => {
    const idx = Number(card.getAttribute("data-idx"));
    const itemsBox = card.querySelector("[data-items]");

    card.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;

      const action = btn.getAttribute("data-action");
      const order = list[idx];

      if (action === "toggle") {
        itemsBox.classList.toggle("open");
        btn.textContent = itemsBox.classList.contains("open") ? "Hide items" : "View items";
      }

      if (action === "reorder") {
        // Put same items back into cart
        localStorage.setItem("cart", JSON.stringify(order.items || []));
        window.location.href = "cart.html";
      }
    });
  });
}
async function loadProfile(uid) {
  try {
    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) return;

    const u = snap.data();

    if (greetUser) greetUser.textContent = `Hi, ${u.fullName || "User"} 👋`;
    if (profileName) profileName.textContent = u.fullName || "—";
    if (profileEmail) profileEmail.textContent = u.email || auth.currentUser?.email || "—";
    if (profilePhone) profilePhone.textContent = u.phone || "—";
  } catch (e) {
    console.error("Profile fetch error:", e);
  }
}


let unsubscribeOrders = null;

function loadOrders(uid) {
  renderState("Loading your orders…", "Just a moment.");

  try {
    const q = query(
      collection(db, "orders"),
      where("uid", "==", uid),
      orderBy("createdAt", "desc")
    );

    // stop old listener if any
    if (unsubscribeOrders) unsubscribeOrders();

    unsubscribeOrders = onSnapshot(q, (snap) => {
      cachedOrders = [];
      snap.forEach(d => cachedOrders.push({ id: d.id, ...d.data() }));
      renderOrders(cachedOrders);
    });

  } catch (e) {
    console.error(e);
    renderState("Could not load orders", "Check Firestore rules and console errors.");
  }
}


onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  await loadProfile(user.uid);
  loadOrders(user.uid);
});


