import { LOOKBOOK_ITEMS } from "../data/collections.js";
import { PRODUCTS } from "../data/products.js";
import { showQuickViewModal } from "../components/QuickViewModal.js";

export function renderLookbookPage() {
  return `
    <main class="page-lookbook" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:6.5rem 0 5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Haute Couture Editorial</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.5rem, 5vw, 4.4rem); margin-bottom:1.25rem;">
            The Royal Lookbook
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.15rem;">
            Immerse yourself in our seasonal fashion editorial. Explore how Jaipur's regal artistry complements bridal lehengas, heritage silk sarees, and contemporary evening wear.
          </p>
        </div>
      </section>

      <!-- Lookbook Filter Tabs -->
      <section style="background:var(--color-champagne); padding:1.25rem 0; border-bottom:1px solid var(--color-gold-border); position:sticky; top:var(--header-height); z-index:40;">
        <div class="luxury-container" style="display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap;">
          <button class="lookbook-filter-btn active" data-cat="all" style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; cursor:pointer; padding:0.4rem 0.8rem; border-bottom:2px solid var(--color-gold); background:none;">All Edits</button>
          <button class="lookbook-filter-btn" data-cat="Bridal" style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; cursor:pointer; padding:0.4rem 0.8rem; border-bottom:2px solid transparent; background:none;">Bridal</button>
          <button class="lookbook-filter-btn" data-cat="Evening" style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; cursor:pointer; padding:0.4rem 0.8rem; border-bottom:2px solid transparent; background:none;">Evening</button>
          <button class="lookbook-filter-btn" data-cat="Royal" style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; cursor:pointer; padding:0.4rem 0.8rem; border-bottom:2px solid transparent; background:none;">Royal</button>
          <button class="lookbook-filter-btn" data-cat="Minimal Luxury" style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; cursor:pointer; padding:0.4rem 0.8rem; border-bottom:2px solid transparent; background:none;">Minimal Luxury</button>
        </div>
      </section>

      <!-- Asymmetrical Editorial Magazine Grid -->
      <section style="padding:4.5rem 0;">
        <div class="luxury-container">
          <div class="lookbook-grid" id="lookbook-items-grid">
            ${LOOKBOOK_ITEMS.map(item => `
              <div class="lookbook-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" class="lookbook-img" loading="lazy" />
                <div class="lookbook-overlay">
                  <span class="lookbook-cat">${item.category} Edit</span>
                  <h3 class="lookbook-title">${item.title}</h3>
                  <div class="lookbook-outfit">${item.outfit}</div>
                  
                  <div style="display:flex; align-items:center; gap:1rem; margin-top:0.5rem; flex-wrap:wrap;">
                    <button class="btn-luxury btn-luxury-gold lookbook-shop-btn" data-product-id="${item.featuredProductId}" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                      Shop The Look (${item.price})
                    </button>
                    <a href="#/product/${item.featuredProductId}" style="font-family:var(--font-sans); font-size:0.72rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--color-ivory); text-decoration:underline;">
                      View Piece &rarr;
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Lookbook Footer Callout -->
      <section style="padding:5.5rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle); text-align:center;">
        <div class="luxury-container" style="max-width:700px;">
          <div class="eyebrow-tag" style="justify-content:center;">Bespoke Styling</div>
          <h2 class="section-title">Find Your Signature Piece</h2>
          <p class="section-subtitle" style="margin:0 auto 2rem;">
            Whether you are curating your wedding trousseau or attending a black-tie gala, our Jaipur boutique stylists are available via WhatsApp to help you match your handbag to your couture.
          </p>
          <a href="#/shop" class="btn-luxury btn-luxury-primary">Shop The Entire Catalog</a>
        </div>
      </section>
    </main>
  `;
}

export function initLookbookEvents() {
  const filterBtns = document.querySelectorAll(".lookbook-filter-btn");
  const items = document.querySelectorAll(".lookbook-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.style.borderBottomColor = "transparent";
      });
      btn.classList.add("active");
      btn.style.borderBottomColor = "var(--color-gold)";

      const cat = btn.dataset.cat;
      items.forEach(item => {
        if (cat === "all" || item.dataset.category === cat) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  document.querySelectorAll(".lookbook-shop-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.productId;
      if (pid) showQuickViewModal(pid);
    });
  });
}
