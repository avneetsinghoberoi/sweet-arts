import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

console.log("quote.js loaded");

const form = document.getElementById("quoteForm");
const msg = document.getElementById("quoteMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.innerText = "Submitting...";

  try {
    const data = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      orderType: document.getElementById("orderType").value,
      eventDate: document.getElementById("eventDate").value,
      details: document.getElementById("details").value.trim(),
      status: "New",
      createdAt: serverTimestamp()
    };

    await addDoc(collection(db, "special_orders"), data);

    msg.style.color = "green";
    msg.innerText = "✅ Request submitted!";
    form.reset();
  } catch (err) {
    console.error("QUOTE ERROR:", err);
    msg.style.color = "red";
    msg.innerText = `❌ ${err.code || "Something went wrong"}`;
  }
});


