import { auth } from "./firebase.js";
import { onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    console.log("❌ Not logged in, redirecting");
    window.location.href = "admin-login.html";
  } else {
    console.log("✅ Admin authenticated:", user.email);
  }
});
