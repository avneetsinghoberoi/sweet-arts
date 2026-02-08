// js/checkout-gate.js
// Requires a button with id="checkoutBtn" on cart.html

import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const btn = document.getElementById("checkoutBtn");

if (!btn) {
  console.warn("❌ checkout-gate.js: #checkoutBtn not found on this page.");
} else {
  btn.addEventListener("click", () => {
    // 1) Ensure cart is not empty
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      cart = [];
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    // 2) Check login status once, then redirect
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub(); // important: run only once per click

      if (user) {
        window.location.href = "checkout.html";
      } else {
        localStorage.setItem("redirectAfterLogin", "checkout.html");
        window.location.href = "login.html";
      }
    });
  });
}

