import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
  collection, query, where, orderBy, onSnapshot,
  doc, getDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const upcomingDiv = document.getElementById("upcoming");
const completedDiv = document.getElementById("completed");

document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "admin-login.html";
});

async function requireAdmin(user) {
  const adminSnap = await getDoc(doc(db, "admins", user.uid));
  if (!adminSnap.exists()) {
    alert("Access denied: Admin only.");
    await signOut(auth);
    window.location.href = "admin-login.html";
    return false;
  }
  return true;
}

function card(orderId, o, showBtn) {
  const items = (o.items || []).map(i => `${i.name} × ${i.qty}`).join(", ");
  return `
    <div class="card" style="padding:12px;margin:10px 0;">
      <div><b>Order:</b> ${orderId}</div>
      <div><b>Customer:</b> ${o.customer?.name || "-"} • ${o.customer?.phone || "-"}</div>
      <div><b>Delivery:</b> ${o.deliveryDate || "-"}</div>
      <div><b>Total:</b> ₹${o.total || 0} • <b>Pay:</b> ${o.paymentMode || "-"}</div>
      <div><b>Items:</b> ${items || "-"}</div>
      <div><b>Status:</b> ${o.status || "-"}</div>
      ${showBtn ? `<button class="btn" data-complete="${orderId}" style="margin-top:10px;">Mark Completed</button>` : ""}
    </div>
  `;
}

function attachHandlers(container) {
  container.querySelectorAll("button[data-complete]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-complete");
      await updateDoc(doc(db, "orders", id), { status: "completed" });
    });
  });
}

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "admin-login.html";
    return;
  }
  if (!(await requireAdmin(user))) return;

  // ✅ Upcoming
  const qUpcoming = query(
    collection(db, "orders"),
    where("status", "==", "upcoming"),
    orderBy("createdAt", "desc")
  );

  onSnapshot(qUpcoming, (snap) => {
    upcomingDiv.innerHTML = snap.empty
      ? "<p>No upcoming orders.</p>"
      : snap.docs.map(d => card(d.id, d.data(), true)).join("");
    attachHandlers(upcomingDiv);
  });

  // ✅ Completed
  const qCompleted = query(
    collection(db, "orders"),
    where("status", "==", "completed"),
    orderBy("createdAt", "desc")
  );

  onSnapshot(qCompleted, (snap) => {
    completedDiv.innerHTML = snap.empty
      ? "<p>No completed orders.</p>"
      : snap.docs.map(d => card(d.id, d.data(), false)).join("");
  });
});
