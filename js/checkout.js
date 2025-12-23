import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// 🔒 Set minimum delivery date = today + 2 days (UI restriction)
const deliveryInput = document.getElementById("deliveryDate");

const today = new Date();
today.setDate(today.getDate() + 2);
today.setHours(0, 0, 0, 0);

const minDate = today.toISOString().split("T")[0];
deliveryInput.setAttribute("min", minDate);

document.getElementById("placeOrder").addEventListener("click", async () => {
  try {
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
    const paymentMode = document.querySelector(
      'input[name="pay"]:checked'
    ).value;

    if (!name || !phone || !address || !deliveryDate) {
      alert("Please fill all details");
      return;
    }

    // 🔒 STRICT DATE VALIDATION (backend-safe)
    const selectedDate = new Date(deliveryDate);
    selectedDate.setHours(0, 0, 0, 0);

    const minAllowedDate = new Date();
    minAllowedDate.setDate(minAllowedDate.getDate() + 2);
    minAllowedDate.setHours(0, 0, 0, 0);

    if (selectedDate < minAllowedDate) {
      alert("Delivery date must be at least 2 days from today.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // 🔹 ORDER DATA (NOW INCLUDES DELIVERY DATE)
    const orderData = {
      customer: {
        name,
        phone,
        address
      },
      items: cart,
      total,
      deliveryDate, // ✅ STORED
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



