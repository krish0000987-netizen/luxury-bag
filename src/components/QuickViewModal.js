import { PRODUCTS } from "../data/products.js";
import { formatINR, getProductWhatsAppUrl } from "../services/whatsapp.js";
import { cart } from "../services/cart.js";

export function showQuickViewModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = document.getElementById("quickview-modal-backdrop");
  if (existing) existing.remove();

  const modalHtml = `
    <div class="modal-backdrop open" id="quickview-modal-backdrop">
      <div class="modal-container" style="max-width:850px; padding:2rem;">
        <button class="modal-close-btn" id="quickview-close-btn">&times;</button>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2.5rem; align-items:center;" class="qv-grid">
          <div style="aspect-ratio:1/1; background:#F8F5EE; overflow:hidden; border:1px solid var(--color-gold-border-subtle);">
            <img src="${product.images[0]}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" id="qv-active-img" />
            <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
              ${product.images.slice(0, 4).map(img => `
                <img src="${img}" class="qv-thumb" style="width:50px; height:50px; object-fit:cover; border:1px solid var(--color-gold-border-subtle); cursor:pointer;" onclick="document.getElementById('qv-active-img').src='${img}'" />
              `).join("")}
            </div>
          </div>

          <div>
            ${product.badge ? `<span class="eyebrow-tag" style="margin-bottom:0.5rem;">${product.badge}</span>` : ""}
            <h2 style="font-family:var(--font-serif); font-size:1.85rem; font-weight:500; line-height:1.25; margin-bottom:0.4rem;">${product.name}</h2>
            <div style="font-size:0.85rem; color:var(--color-gold-deep); margin-bottom:1rem;">${product.tagline}</div>
            
            <div style="display:flex; align-items:baseline; gap:1rem; margin-bottom:1.25rem;">
              <span style="font-family:var(--font-sans); font-size:1.5rem; font-weight:700;">${formatINR(product.price)}</span>
              ${product.comparePrice ? `<span style="text-decoration:line-through; color:var(--color-text-muted);">${formatINR(product.comparePrice)}</span>` : ""}
            </div>

            <p style="font-size:0.9rem; color:var(--color-text-secondary); line-height:1.65; margin-bottom:1.5rem;">
              ${product.shortDescription}
            </p>

            <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1.5rem;">
              <button class="btn-luxury btn-luxury-primary" id="qv-add-bag-btn" style="width:100%;">
                Add to Shopping Bag
              </button>
              <a href="${getProductWhatsAppUrl(product)}" target="_blank" rel="noopener" class="btn-whatsapp" style="width:100%; justify-content:center;">
                Order on WhatsApp
              </a>
            </div>

            <a href="#/product/${product.id}" class="qv-view-full" style="font-family:var(--font-sans); font-size:0.78rem; text-transform:uppercase; letter-spacing:0.18em; text-decoration:underline; text-underline-offset:4px; color:var(--color-text-primary);">
              View Full Product Details &amp; Craftsmanship &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const div = document.createElement("div");
  div.id = "quickview-wrapper";
  div.innerHTML = modalHtml;
  document.body.appendChild(div);

  const backdrop = document.getElementById("quickview-modal-backdrop");
  const closeBtn = document.getElementById("quickview-close-btn");

  const close = () => {
    div.remove();
  };

  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });

  document.getElementById("qv-add-bag-btn")?.addEventListener("click", () => {
    cart.addItem(product, 1);
    close();
  });

  div.querySelector(".qv-view-full")?.addEventListener("click", () => {
    close();
  });
}
