import { wishlist } from "../services/wishlist.js";
import { formatINR } from "../services/whatsapp.js";
import { cart } from "../services/cart.js";
import { PRODUCTS } from "../data/products.js";

export function showWishlistModal() {
  const existing = document.getElementById("wishlist-modal-backdrop");
  if (existing) existing.remove();

  const items = wishlist.getItems();

  const modalHtml = `
    <div class="modal-backdrop open" id="wishlist-modal-backdrop">
      <div class="modal-container" style="max-width:720px; padding:2.5rem 2rem;">
        <button class="modal-close-btn" id="wishlist-close-btn">&times;</button>
        <div class="eyebrow-tag">Your Curated Selection</div>
        <h3 style="font-family:var(--font-serif); font-size:2rem; margin-bottom:1.5rem;">Wishlist (${items.length})</h3>

        <div id="wishlist-items-container" style="display:flex; flex-direction:column; gap:1.25rem; max-height:450px; overflow-y:auto;">
          ${items.length === 0 ? `
            <div style="text-align:center; padding:3rem 1rem; color:var(--color-text-muted);">
              <p style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:0.5rem;">Your wishlist is currently empty.</p>
              <p style="font-size:0.85rem; margin-bottom:1.5rem;">Save your favorite handcrafted royal pieces as you explore.</p>
              <a href="#/shop" class="btn-luxury btn-luxury-primary wishlist-nav-link">Explore Collection</a>
            </div>
          ` : items.map(item => `
            <div style="display:grid; grid-template-columns:80px 1fr auto; gap:1rem; align-items:center; padding-bottom:1rem; border-bottom:1px solid var(--color-gold-border-subtle);">
              <img src="${item.image}" alt="${item.name}" style="width:80px; height:80px; object-fit:cover; border:1px solid var(--color-gold-border-subtle);" />
              <div>
                <a href="#/product/${item.id}" class="wishlist-nav-link" style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">${item.name}</a>
                <div style="font-family:var(--font-sans); font-size:0.95rem; font-weight:600; color:var(--color-gold-deep); margin:0.25rem 0 0.5rem;">${formatINR(item.price)}</div>
                <button class="btn-luxury btn-luxury-primary wishlist-move-btn" data-id="${item.id}" style="padding:0.45rem 1rem; font-size:0.68rem;">
                  Add to Bag
                </button>
              </div>
              <button class="wishlist-remove-btn" data-id="${item.id}" style="color:var(--color-text-muted); font-size:1.4rem; padding:0.5rem; cursor:pointer;" title="Remove">&times;</button>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  const div = document.createElement("div");
  div.id = "wishlist-wrapper";
  div.innerHTML = modalHtml;
  document.body.appendChild(div);

  const backdrop = document.getElementById("wishlist-modal-backdrop");
  const closeBtn = document.getElementById("wishlist-close-btn");

  const close = () => div.remove();
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });

  div.querySelectorAll(".wishlist-nav-link").forEach(l => l.addEventListener("click", close));

  div.querySelectorAll(".wishlist-remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const product = PRODUCTS.find(p => p.id === id);
      if (product) wishlist.toggle(product);
      close();
      showWishlistModal();
    });
  });

  div.querySelectorAll(".wishlist-move-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        cart.addItem(product, 1);
        wishlist.toggle(product);
      }
      close();
    });
  });
}
