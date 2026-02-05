import { db, auth } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

let currentUser = null;

// ✅ Mandate login for checkout page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please login to place an order.");
    localStorage.setItem("redirectAfterLogin", "checkout.html"); // optional UX
    window.location.href = "login.html";
    return;
  }
  currentUser = user;
});

// 🔒 Set minimum delivery date = today + 2 days (UI restriction)
const deliveryInput = document.getElementById("deliveryDate");

const today = new Date();
today.setDate(today.getDate() + 2);
today.setHours(0, 0, 0, 0);

const minDate = today.toISOString().split("T")[0];
deliveryInput.setAttribute("min", minDate);

document.getElementById("placeOrder").addEventListener("click", async () => {
  try {
    // ✅ Ensure user is logged in (extra safety)
    if (!currentUser) {
      alert("Please login again.");
      window.location.href = "login.html";
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    // 🔹 READ FORM VALUES
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const deliveryDate = document.getElementById("deliveryDate").value;

    const payEl = document.querySelector('input[name="pay"]:checked');
    if (!payEl) {
      alert("Please select payment mode.");
      return;
    }
    const paymentMode = payEl.value;

    if (!name || !phone || !address || !deliveryDate) {
      alert("Please fill all details");
      return;
    }

    // 🔒 STRICT DATE VALIDATION
    const selectedDate = new Date(deliveryDate);
    selectedDate.setHours(0, 0, 0, 0);

    const minAllowedDate = new Date();
    minAllowedDate.setDate(minAllowedDate.getDate() + 2);
    minAllowedDate.setHours(0, 0, 0, 0);

    if (selectedDate < minAllowedDate) {
      alert("Delivery date must be at least 2 days from today.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // ✅ ORDER DATA includes uid
    const orderData = {
      uid: currentUser.uid,
      customer: { name, phone, address },
      items: cart,
      total,
      deliveryDate,
      paymentMode,
      status: "Pending COD",
      createdAt: serverTimestamp()
    };

    // 🔹 WRITE TO FIRESTORE
    const docRef = await addDoc(collection(db, "orders"), orderData);

    console.log("✅ Order placed:", docRef.id);

    // 🔹 CLEANUP
    localStorage.removeItem("cart");
    window.location.href = "success.html";

  } catch (err) {
    console.error("❌ Firestore error:", err);
    alert("Something went wrong. Check console.");
  }
});




