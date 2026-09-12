import { cart } from "../services/cart.js";
import { formatINR, getCartWhatsAppUrl } from "../services/whatsapp.js";

export function renderCartDrawer() {
  return `
    <div class="cart-backdrop" id="cart-backdrop">
      <div class="cart-drawer" id="cart-drawer">
        <div class="cart-header">
          <div>
            <span class="cart-title">Your Shopping Bag</span>
            <div style="font-size:0.7rem; color:var(--color-gold-deep); letter-spacing:0.18em; text-transform:uppercase;">
              LUXURY BAGS &bull; Jaipur Concierge
            </div>
          </div>
          <button class="cart-close-btn" id="cart-close-btn" aria-label="Close Bag">&times;</button>
        </div>

        <div class="cart-items-body" id="cart-items-container">
          <!-- Rendered dynamically -->
        </div>

        <div class="cart-footer" id="cart-footer-container">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  `;
}

export function updateCartView() {
  const container = document.getElementById("cart-items-container");
  const footerContainer = document.getElementById("cart-footer-container");
  if (!container || !footerContainer) return;

  const items = cart.getItems();
  const subtotal = cart.getSubtotal();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color:var(--color-gold); margin-bottom:1rem;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <p style="font-family:var(--font-serif); font-size:1.35rem; margin-bottom:0.5rem;">Your bag is currently empty.</p>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:1.5rem;">Discover our handcrafted royal Jaipur collections.</p>
        <a href="#/shop" class="btn-luxury btn-luxury-primary" onclick="cart.closeDrawer()">Explore Catalog</a>
      </div>
    `;
    footerContainer.innerHTML = "";
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item-card" data-product-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div>
        <div class="cart-item-name"><a href="#/product/${item.id}" onclick="cart.closeDrawer()">${item.name}</a></div>
        <div class="cart-item-price">${formatINR(item.price)}</div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn cart-qty-minus" data-id="${item.id}">-</button>
          <span style="font-size:0.85rem; font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
          <button class="cart-qty-btn cart-qty-plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" title="Remove Item">&times;</button>
    </div>
  `).join("");

  footerContainer.innerHTML = `
    <div class="cart-subtotal-row">
      <span class="cart-subtotal-label">Subtotal</span>
      <span class="cart-subtotal-value">${formatINR(subtotal)}</span>
    </div>
    <p class="cart-note">&bull; Complimentary luxury velvet box & insured delivery included.</p>
    
    <div class="cart-actions">
      <a href="${getCartWhatsAppUrl(items)}" target="_blank" rel="noopener" class="btn-whatsapp" id="cart-whatsapp-order-btn" style="width:100%; justify-content:center; padding:1rem;">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
        ORDER ALL VIA WHATSAPP
      </a>
      <button class="btn-luxury btn-luxury-outline" id="cart-checkout-details-btn" style="width:100%;">
        Add Delivery Details & Order
      </button>
    </div>
  `;

  // Attach item quantity & remove events
  container.querySelectorAll(".cart-qty-minus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      cart.updateQuantity(id, -1);
    });
  });

  container.querySelectorAll(".cart-qty-plus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      cart.updateQuantity(id, 1);
    });
  });

  container.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      cart.removeItem(id);
    });
  });

  document.getElementById("cart-checkout-details-btn")?.addEventListener("click", () => {
    showCheckoutDetailsModal();
  });
}

function showCheckoutDetailsModal() {
  const items = cart.getItems();
  const subtotal = cart.getSubtotal();
  
  const modalHtml = `
    <div class="modal-backdrop open" id="checkout-modal-backdrop">
      <div class="modal-container" style="max-width:540px; padding:2.5rem 2rem;">
        <button class="modal-close-btn" id="checkout-modal-close">&times;</button>
        <div class="eyebrow-tag">Concierge Checkout</div>
        <h3 style="font-family:var(--font-serif); font-size:1.85rem; margin-bottom:0.5rem;">Delivery Information</h3>
        <p style="font-size:0.88rem; color:var(--color-text-secondary); margin-bottom:1.5rem;">
          Provide your details to create an instantly pre-filled WhatsApp order invoice for our Jaipur atelier.
        </p>

        <form id="checkout-details-form" style="display:flex; flex-direction:column; gap:1rem;">
          <div>
            <label style="display:block; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.35rem; font-weight:600;">Full Name *</label>
            <input type="text" id="chk-name" required placeholder="e.g. Maharani Gayatri" style="width:100%; padding:0.75rem; border:1px solid var(--color-gold-border); background:#FFF;" />
          </div>

          <div>
            <label style="display:block; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.35rem; font-weight:600;">Phone / WhatsApp *</label>
            <input type="tel" id="chk-phone" required placeholder="e.g. +91 98765 43210" style="width:100%; padding:0.75rem; border:1px solid var(--color-gold-border); background:#FFF;" />
          </div>

          <div>
            <label style="display:block; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.35rem; font-weight:600;">Delivery Address & City *</label>
            <textarea id="chk-address" required rows="3" placeholder="House / Flat, Street, City, State, PIN code" style="width:100%; padding:0.75rem; border:1px solid var(--color-gold-border); background:#FFF;"></textarea>
          </div>

          <div>
            <label style="display:block; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.35rem; font-weight:600;">Special Instructions / Gift Message</label>
            <input type="text" id="chk-notes" placeholder="Optional notes for our team" style="width:100%; padding:0.75rem; border:1px solid var(--color-gold-border); background:#FFF;" />
          </div>

          <div style="margin-top:0.5rem;">
            <button type="submit" class="btn-whatsapp" style="width:100%; padding:1rem; font-size:0.82rem; justify-content:center;">
              Confirm & Send Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const div = document.createElement("div");
  div.id = "checkout-modal-wrapper";
  div.innerHTML = modalHtml;
  document.body.appendChild(div);

  document.getElementById("checkout-modal-close")?.addEventListener("click", () => {
    div.remove();
  });

  document.getElementById("checkout-details-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const details = {
      name: document.getElementById("chk-name").value,
      phone: document.getElementById("chk-phone").value,
      address: document.getElementById("chk-address").value,
      notes: document.getElementById("chk-notes").value
    };
    const url = getCartWhatsAppUrl(items, details);
    window.open(url, "_blank");
    div.remove();
    cart.closeDrawer();
  });
}

export function initCartDrawerEvents() {
  const backdrop = document.getElementById("cart-backdrop");
  const closeBtn = document.getElementById("cart-close-btn");

  window.addEventListener("cart:drawer:open", () => {
    backdrop?.classList.add("open");
    updateCartView();
  });

  window.addEventListener("cart:drawer:close", () => {
    backdrop?.classList.remove("open");
  });

  window.addEventListener("cart:updated", () => {
    updateCartView();
  });

  closeBtn?.addEventListener("click", () => cart.closeDrawer());
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      cart.closeDrawer();
    }
  });
}
