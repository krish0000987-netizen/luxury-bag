import { PRODUCTS } from "../data/products.js";
import { formatINR, getProductWhatsAppUrl } from "../services/whatsapp.js";
import { cart } from "../services/cart.js";
import { wishlist } from "../services/wishlist.js";
import { renderProductCard } from "../components/ProductCard.js";
import { updateFloatingWhatsAppTarget } from "../components/FloatingWhatsApp.js";

export function renderProductDetailPage(productId) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const isWishlisted = wishlist.has(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  // Update floating concierge context
  setTimeout(() => {
    updateFloatingWhatsAppTarget(product);
  }, 50);

  return `
    <main class="page-product-detail" style="padding-bottom:6rem;">
      <!-- Breadcrumb -->
      <div style="background:var(--color-champagne); padding:0.85rem 0; border-bottom:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container" style="font-size:0.75rem; color:var(--color-text-secondary); letter-spacing:0.12em; text-transform:uppercase;">
          <a href="#/" style="color:var(--color-text-secondary);">Home</a> / 
          <a href="#/shop" style="color:var(--color-text-secondary);">Shop</a> / 
          <span style="color:var(--color-gold-deep); font-weight:600;">${product.name}</span>
        </div>
      </div>

      <div class="luxury-container">
        <div class="pdp-layout">
          <!-- LEFT: Image Gallery with Zoom & Thumbnails -->
          <div class="pdp-gallery">
            <div class="pdp-main-image-wrap" id="pdp-zoom-container">
              <img src="${product.images[0]}" alt="${product.name}" class="pdp-main-image" id="pdp-active-image" />
              ${product.badge ? `<span class="product-badge" style="top:1.5rem; left:1.5rem;">${product.badge}</span>` : ""}
            </div>

            <!-- Image Thumbnails -->
            <div class="pdp-thumbnails">
              ${product.images.map((img, idx) => `
                <div class="pdp-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-img="${img}">
                  <img src="${img}" alt="${product.name} view ${idx + 1}" />
                </div>
              `).join("")}
            </div>

            <div style="display:flex; justify-content:center; gap:2rem; font-size:0.75rem; color:var(--color-text-muted); margin-top:0.5rem; letter-spacing:0.15em; text-transform:uppercase;">
              <span>✦ Hover to zoom</span>
              <span>✦ Handcrafted in Jaipur</span>
              <span>✦ Genuine Antique Finish</span>
            </div>
          </div>

          <!-- RIGHT: Product Info Sticky Column -->
          <div class="pdp-info-sticky">
            <div class="pdp-badge-wrap">
              <span class="eyebrow-tag" style="margin-bottom:0;">${product.material}</span>
              <span style="color:var(--color-gold);">&bull;</span>
              <span style="font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--color-text-muted);">SKU: ${product.sku}</span>
            </div>

            <h1 class="pdp-title">${product.name}</h1>
            <div class="pdp-tagline">${product.tagline}</div>

            <div class="pdp-price-box">
              <span class="pdp-price-main">${formatINR(product.price)}</span>
              ${product.comparePrice ? `<span class="pdp-price-compare">${formatINR(product.comparePrice)}</span>` : ""}
              <span class="pdp-tax-note">(Inclusive of all taxes &bull; Insured Delivery)</span>
            </div>

            <p class="pdp-desc-lead">
              ${product.description}
            </p>

            <!-- Quantity & Actions -->
            <div class="pdp-actions-box">
              <div class="pdp-qty-row">
                <span style="font-size:0.75rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase;">Quantity:</span>
                <div class="qty-control">
                  <button class="qty-btn" id="pdp-qty-minus">-</button>
                  <span class="qty-display" id="pdp-qty-value">1</span>
                  <button class="qty-btn" id="pdp-qty-plus">+</button>
                </div>
                <span style="font-size:0.8rem; color:#27AE60; font-weight:600;">In Stock &bull; Ready for Atelier Dispatch</span>
              </div>

              <!-- Primary WhatsApp Order Button (Crucial) -->
              <a href="${getProductWhatsAppUrl(product, 1)}" target="_blank" rel="noopener" class="btn-whatsapp" id="pdp-whatsapp-btn" style="width:100%; padding:1.1rem; font-size:0.85rem;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
                ORDER ON WHATSAPP
              </a>

              <div style="display:flex; gap:0.75rem;">
                <button class="btn-luxury btn-luxury-primary" id="pdp-add-bag-btn" style="flex:1;">
                  Add to Bag
                </button>
                <button class="btn-luxury btn-luxury-outline" id="pdp-wishlist-toggle" style="padding:0 1.25rem;" title="Wishlist">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWishlisted ? 'var(--color-gold)' : 'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
            </div>

            <!-- Product Information Tabs -->
            <div class="pdp-tabs">
              <!-- Tab 1: Description -->
              <div class="pdp-tab-item open">
                <div class="pdp-tab-header">
                  <span>Description &amp; Story</span>
                  <span class="tab-icon">+</span>
                </div>
                <div class="pdp-tab-content">
                  <p>${product.description}</p>
                </div>
              </div>

              <!-- Tab 2: Dimensions & Specifications -->
              <div class="pdp-tab-item">
                <div class="pdp-tab-header">
                  <span>Specifications &amp; Capacity</span>
                  <span class="tab-icon">+</span>
                </div>
                <div class="pdp-tab-content">
                  <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
                    <li><strong>Dimensions:</strong> ${product.specifications.dimensions}</li>
                    <li><strong>Weight:</strong> ${product.specifications.weight}</li>
                    <li><strong>Chain / Strap:</strong> ${product.specifications.chainLength}</li>
                    <li><strong>Interior Lining:</strong> ${product.specifications.lining}</li>
                    <li><strong>Clasp Mechanism:</strong> ${product.specifications.closure}</li>
                    <li><strong>Device Fit:</strong> ${product.specifications.fits}</li>
                  </ul>
                </div>
              </div>

              <!-- Tab 3: Craftsmanship & Materials -->
              <div class="pdp-tab-item">
                <div class="pdp-tab-header">
                  <span>Craftsmanship &amp; Materials</span>
                  <span class="tab-icon">+</span>
                </div>
                <div class="pdp-tab-content">
                  <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
                    ${product.craftsmanshipDetails.map(d => `<li>&bull; ${d}</li>`).join("")}
                  </ul>
                </div>
              </div>

              <!-- Tab 4: Care Instructions -->
              <div class="pdp-tab-item">
                <div class="pdp-tab-header">
                  <span>Care &amp; Preservation</span>
                  <span class="tab-icon">+</span>
                </div>
                <div class="pdp-tab-content">
                  <p>
                    Store in the provided velvet keepsake case when not in use. Avoid direct contact with perfumes, alcohol sprays, and excessive moisture. Clean delicate pearls and kundan facets with a dry microfiber jewelry cloth.
                  </p>
                </div>
              </div>

              <!-- Tab 5: Shipping & Delivery -->
              <div class="pdp-tab-item">
                <div class="pdp-tab-header">
                  <span>Complimentary Delivery &amp; Packaging</span>
                  <span class="tab-icon">+</span>
                </div>
                <div class="pdp-tab-content">
                  <p>
                    Complimentary insured express delivery across India. Each bag is packaged in our signature royal velvet-padded gift box with authenticity card and dust pouch. Dispatched within 24–48 hours from Jaipur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Complete Your Look Section -->
        <section style="margin-top:5rem; padding-top:4rem; border-top:1px solid var(--color-gold-border-subtle);">
          <div style="text-align:center; margin-bottom:3rem;">
            <div class="eyebrow-tag">Haute Styling</div>
            <h2 class="section-title">Complete Your Look</h2>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center;" class="editorial-split">
            <div style="aspect-ratio:4/3; overflow:hidden; border:1px solid var(--color-gold-border);">
              <img src="/images/editorial/hero_bride_jaipur_couture.jpg" alt="Bridal Styling Look" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div>
              <h3 style="font-family:var(--font-serif); font-size:1.85rem; margin-bottom:0.75rem;">The Royal Bridal Curation</h3>
              <p style="color:var(--color-text-secondary); line-height:1.7; margin-bottom:1.5rem;">
                Pair <strong>${product.name}</strong> with champagne gold and ivory couture for a breathtaking heirloom presence. Ask our Jaipur atelier for matching hair accessory recommendations.
              </p>
              <a href="${getProductWhatsAppUrl(product, 1)}" target="_blank" rel="noopener" class="btn-whatsapp">
                Consult Jaipur Stylist via WhatsApp
              </a>
            </div>
          </div>
        </section>

        <!-- You May Also Like Section -->
        <section style="margin-top:5rem; padding-top:4rem; border-top:1px solid var(--color-gold-border-subtle);">
          <div style="text-align:center; margin-bottom:3rem;">
            <div class="eyebrow-tag">Curated Recommendations</div>
            <h2 class="section-title">You May Also Like</h2>
            <div class="gold-divider"></div>
          </div>

          <div class="products-grid">
            ${relatedProducts.map(p => renderProductCard(p)).join("")}
          </div>
        </section>
      </div>
    </main>
  `;
}

export function initProductDetailEvents(productId) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  let qty = 1;

  const mainImg = document.getElementById("pdp-active-image");
  const thumbs = document.querySelectorAll(".pdp-thumb");
  const zoomWrap = document.getElementById("pdp-zoom-container");
  const qtyMinus = document.getElementById("pdp-qty-minus");
  const qtyPlus = document.getElementById("pdp-qty-plus");
  const qtyDisplay = document.getElementById("pdp-qty-value");
  const whatsappBtn = document.getElementById("pdp-whatsapp-btn");
  const addBagBtn = document.getElementById("pdp-add-bag-btn");
  const wishlistBtn = document.getElementById("pdp-wishlist-toggle");

  // Thumbnail switching
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      if (mainImg) mainImg.src = thumb.dataset.img;
    });
  });

  // Image zoom effect
  zoomWrap?.addEventListener("mousemove", (e) => {
    const rect = zoomWrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (mainImg) {
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = "scale(1.75)";
    }
  });

  zoomWrap?.addEventListener("mouseleave", () => {
    if (mainImg) {
      mainImg.style.transform = "scale(1)";
    }
  });

  // Quantity controls
  qtyMinus?.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      if (qtyDisplay) qtyDisplay.textContent = qty;
      if (whatsappBtn) whatsappBtn.href = getProductWhatsAppUrl(product, qty);
    }
  });

  qtyPlus?.addEventListener("click", () => {
    qty++;
    if (qtyDisplay) qtyDisplay.textContent = qty;
    if (whatsappBtn) whatsappBtn.href = getProductWhatsAppUrl(product, qty);
  });

  // Add to Bag
  addBagBtn?.addEventListener("click", () => {
    cart.addItem(product, qty);
  });

  // Wishlist toggle
  wishlistBtn?.addEventListener("click", () => {
    wishlist.toggle(product);
    const hasItem = wishlist.has(product.id);
    const svg = wishlistBtn.querySelector("svg");
    if (svg) svg.setAttribute("fill", hasItem ? "var(--color-gold)" : "none");
  });

  // Accordion Tabs
  document.querySelectorAll(".pdp-tab-header").forEach(header => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      parent?.classList.toggle("open");
    });
  });
}
