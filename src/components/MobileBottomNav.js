import { cart } from "../services/cart.js";
import { getFloatingConciergeUrl } from "../services/whatsapp.js";

export function renderMobileBottomNav() {
  const count = cart.getCount();

  return `
    <div class="mobile-bottom-nav">
      <a href="#/" class="mobile-nav-item" data-route="/">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Home</span>
      </a>

      <a href="#/shop" class="mobile-nav-item" data-route="/shop">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Shop</span>
      </a>

      <button class="mobile-nav-item" id="mobile-cart-btn" style="position:relative;">
        <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <span>Cart</span>
        <span class="badge-counter" id="mobile-cart-badge" style="top:-3px; right:12px; ${count > 0 ? '' : 'display:none;'}">${count}</span>
      </button>

      <a href="${getFloatingConciergeUrl()}" target="_blank" rel="noopener" class="mobile-nav-item whatsapp-item">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
        <span>WhatsApp</span>
      </a>
    </div>
  `;
}

export function initMobileNavEvents() {
  document.getElementById("mobile-cart-btn")?.addEventListener("click", () => {
    cart.openDrawer();
  });

  window.addEventListener("cart:updated", () => {
    const badge = document.getElementById("mobile-cart-badge");
    const count = cart.getCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  });
}
