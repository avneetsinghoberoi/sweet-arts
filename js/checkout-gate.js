import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const btn = document.getElementById("checkoutBtn");

btn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) {
    alert("Cart is empty");
    return;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "checkout.html";
    } else {
      localStorage.setItem("redirectAfterLogin", "checkout.html");
      window.location.href = "login.html";
    }
  });
});
