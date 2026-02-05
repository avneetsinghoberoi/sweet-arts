import { auth, db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

const signupFields = document.getElementById("signupFields");
const signupBtn = document.getElementById("signupBtn");

document.getElementById("loginBtn").addEventListener("click", async () => {
  msg.textContent = "";
  try {
    await signInWithEmailAndPassword(auth, email.value.trim(), password.value);
    window.location.href = "my-orders.html";
  } catch (e) {
    msg.textContent = e.message;
  }
});

signupBtn.addEventListener("click", async () => {
  msg.textContent = "";

  // 1st click: show signup fields only
  if (signupFields && signupFields.style.display === "none") {
    signupFields.style.display = "flex";
    signupBtn.textContent = "Register Now";
    return;
  }

  // 2nd click: register user + save profile
  const fullName = document.getElementById("fullName")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const address = document.getElementById("address")?.value.trim();

  if (!fullName || !phone || !address) {
    msg.textContent = "Please fill Full Name, Phone and Address.";
    return;
  }

  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email.value.trim(),
      password.value
    );

    const uid = userCred.user.uid;

    await setDoc(doc(db, "users", uid), {
      uid,
      email: email.value.trim(),
      fullName,
      phone,
      address,
      role: "customer",
      createdAt: serverTimestamp()
    });

    window.location.href = "my-orders.html";
  } catch (e) {
    msg.textContent = e.message;
  }
});
