import { auth } from "./firebase.js";
import { signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const msg = document.getElementById("msg");

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    console.log("Attempting login:", email);

    await signInWithEmailAndPassword(auth, email, password);

    console.log("✅ Admin logged in");
    window.location.href = "admin-dashboard.html";

  } catch (err) {
    console.error("❌ Login error:", err);
    msg.innerText = err.message;
  }
});

