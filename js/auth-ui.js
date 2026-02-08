import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");
const msg = document.getElementById("msg");

const signupFields = document.getElementById("signupFields");
const signupBtn = document.getElementById("signupBtn");

document.getElementById("loginBtn").addEventListener("click", async () => {
  msg.textContent = "";
  try {
    const em = email.value.trim();
    const pw = password.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      msg.textContent = "Enter a valid email (example: name@gmail.com)";
      return;
    }

    await signInWithEmailAndPassword(auth, em, pw);
    window.location.href = "my-orders.html";
  } catch (e) {
    msg.textContent = `${e.code || ""} ${e.message || e}`;
  }
});

signupBtn.addEventListener("click", async () => {
  msg.textContent = "";

  if (signupFields && signupFields.style.display === "none") {
    signupFields.style.display = "flex";
    signupBtn.textContent = "Register Now";
    return;
  }

  const em = email.value.trim();
  const pw = password.value;

  const fullName = document.getElementById("signupFullName")?.value.trim();
  const phone = document.getElementById("signupPhone")?.value.trim();
  const address = document.getElementById("signupAddress")?.value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    msg.textContent = "Enter a valid email (example: name@gmail.com)";
    return;
  }
  if (!pw || pw.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    return;
  }
  if (!fullName || !phone || !address) {
    msg.textContent = "Fill Full Name, Phone and Address.";
    return;
  }

  try {
    const userCred = await createUserWithEmailAndPassword(auth, em, pw);
    const uid = userCred.user.uid;

    await setDoc(doc(db, "users", uid), {
      uid,
      email: em,
      fullName,
      phone,
      address,
      role: "customer",
      createdAt: serverTimestamp()
    });

    window.location.href = "my-orders.html";
  } catch (e) {
    msg.textContent = `${e.code || ""} ${e.message || e}`;
  }
});






