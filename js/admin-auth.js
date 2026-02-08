import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

document.getElementById("loginBtn").addEventListener("click", async () => {
  msg.textContent = "";
  try {
    const cred = await signInWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value
    );

    // ✅ Verify admin using admins/{uid}
    const uid = cred.user.uid;
    const adminSnap = await getDoc(doc(db, "admins", uid));

    if (!adminSnap.exists()) {
      msg.textContent = "Not an admin account.";
      // optional: sign out immediately
      await signOut(auth);
      return;
    }

    // ✅ Redirect to dashboard
    window.location.href = "admin.html";
  } catch (e) {
    msg.textContent = e.message;
  }
});


