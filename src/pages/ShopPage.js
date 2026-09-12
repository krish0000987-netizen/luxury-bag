import { PRODUCTS, CATEGORIES, OCCASIONS, MATERIALS, COLORS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";

export function renderShopPage(initialFilters = {}) {
  return `
    <main class="page-shop" style="padding-bottom:6rem;">
      <!-- Shop Header Banner -->
      <section style="background:linear-gradient(to bottom, #181715, #11100F); color:var(--color-ivory); padding:4.5rem 0 3.5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Royal Jaipur Catalog</div>
          <h1 class="section-title" style="color:var(--color-ivory); margin-bottom:1rem;">The Complete Collection</h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted);">
            Handcrafted luxury handbags, embellished clutches, and royal potlis. Each bag is an heirloom piece conceived near Hawa Mahal.
          </p>
        </div>
      </section>

      <!-- Shop Content & Filters Grid -->
      <div class="luxury-container" style="margin-top:3.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--color-gold-border-subtle); flex-wrap:wrap; gap:1rem;">
          <div style="font-family:var(--font-sans); font-size:0.85rem; color:var(--color-text-secondary);">
            Showing <strong id="shop-count" style="color:var(--color-text-primary);">${PRODUCTS.length}</strong> Masterpieces
          </div>

          <div style="display:flex; align-items:center; gap:1.25rem;">
            <label for="shop-sort" style="font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600; color:var(--color-text-secondary);">Sort By:</label>
            <select id="shop-sort" style="padding:0.5rem 1rem; border:1px solid var(--color-gold-border); background:#FFF; font-size:0.82rem; font-family:var(--font-sans); cursor:pointer;">
              <option value="featured">Featured &amp; Curated</option>
              <option value="newest">Newest Creations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <button id="mobile-filter-toggle" class="btn-luxury btn-luxury-outline" style="padding:0.5rem 1rem; font-size:0.72rem; display:none;">
              Filters
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:260px 1fr; gap:3rem;" class="shop-layout-grid">
          <!-- Sidebar Filters -->
          <aside class="shop-filter-sidebar" id="shop-sidebar">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
              <span style="font-family:var(--font-sans); font-size:0.82rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;">Filter By</span>
              <button id="reset-filters-btn" style="font-size:0.75rem; color:var(--color-gold-deep); text-decoration:underline; cursor:pointer;">Reset All</button>
            </div>

            <!-- Category Filter -->
            <div style="margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--color-gold-border-subtle);">
              <div style="font-family:var(--font-sans); font-size:0.75rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.85rem; color:var(--color-text-primary);">
                Category
              </div>
              <div style="display:flex; flex-direction:column; gap:0.5rem;" id="filter-categories">
                ${CATEGORIES.map(cat => `
                  <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                    <input type="radio" name="cat-filter" value="${cat.id}" ${cat.id === "all" ? "checked" : ""} />
                    <span>${cat.name}</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <!-- Occasion Filter -->
            <div style="margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--color-gold-border-subtle);">
              <div style="font-family:var(--font-sans); font-size:0.75rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.85rem; color:var(--color-text-primary);">
                Occasion
              </div>
              <div style="display:flex; flex-direction:column; gap:0.5rem;" id="filter-occasions">
                ${OCCASIONS.map((occ, idx) => `
                  <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                    <input type="radio" name="occ-filter" value="${occ}" ${idx === 0 ? "checked" : ""} />
                    <span>${occ}</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <!-- Material / Embellishment Filter -->
            <div style="margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--color-gold-border-subtle);">
              <div style="font-family:var(--font-sans); font-size:0.75rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.85rem; color:var(--color-text-primary);">
                Material &amp; Craft
              </div>
              <div style="display:flex; flex-direction:column; gap:0.5rem;" id="filter-materials">
                ${MATERIALS.map((mat, idx) => `
                  <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                    <input type="radio" name="mat-filter" value="${mat}" ${idx === 0 ? "checked" : ""} />
                    <span>${mat}</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <!-- Price Tier Filter -->
            <div style="margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--color-gold-border-subtle);">
              <div style="font-family:var(--font-sans); font-size:0.75rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.85rem; color:var(--color-text-primary);">
                Price Range
              </div>
              <div style="display:flex; flex-direction:column; gap:0.5rem;">
                <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                  <input type="radio" name="price-filter" value="all" checked />
                  <span>All Prices</span>
                </label>
                <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                  <input type="radio" name="price-filter" value="under-6000" />
                  <span>Under ₹6,000</span>
                </label>
                <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                  <input type="radio" name="price-filter" value="6000-8000" />
                  <span>₹6,000 – ₹8,000</span>
                </label>
                <label style="font-size:0.85rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                  <input type="radio" name="price-filter" value="above-8000" />
                  <span>Above ₹8,000</span>
                </label>
              </div>
            </div>
          </aside>

          <!-- Products Output Grid -->
          <div>
            <div class="products-grid" id="shop-products-grid">
              ${PRODUCTS.map(product => renderProductCard(product)).join("")}
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}

export function initShopEvents() {
  const grid = document.getElementById("shop-products-grid");
  const countEl = document.getElementById("shop-count");
  const sortSelect = document.getElementById("shop-sort");
  const resetBtn = document.getElementById("reset-filters-btn");

  const filterAndRender = () => {
    const cat = document.querySelector('input[name="cat-filter"]:checked')?.value || "all";
    const occ = document.querySelector('input[name="occ-filter"]:checked')?.value || "All Occasions";
    const mat = document.querySelector('input[name="mat-filter"]:checked')?.value || "All Materials";
    const priceTier = document.querySelector('input[name="price-filter"]:checked')?.value || "all";
    const sortVal = sortSelect?.value || "featured";

    let results = [...PRODUCTS];

    // Filter category
    if (cat !== "all") {
      results = results.filter(p => p.category === cat || (cat === "bridal" && p.isBridal));
    }

    // Filter occasion
    if (occ !== "All Occasions") {
      results = results.filter(p => p.occasion.includes(occ));
    }

    // Filter material
    if (mat !== "All Materials") {
      results = results.filter(p => p.material === mat);
    }

    // Filter price
    if (priceTier === "under-6000") {
      results = results.filter(p => p.price < 6000);
    } else if (priceTier === "6000-8000") {
      results = results.filter(p => p.price >= 6000 && p.price <= 8000);
    } else if (priceTier === "above-8000") {
      results = results.filter(p => p.price > 8000);
    }

    // Sort
    if (sortVal === "price-asc") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-desc") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortVal === "newest") {
      results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    if (countEl) countEl.textContent = results.length;

    if (grid) {
      if (results.length === 0) {
        grid.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:4rem 1rem; color:var(--color-text-muted);">
            <p style="font-family:var(--font-serif); font-size:1.4rem; margin-bottom:0.5rem;">No handbags match the selected filters.</p>
            <p style="font-size:0.9rem; margin-bottom:1.5rem;">Try resetting your filters to explore the full collection.</p>
            <button class="btn-luxury btn-luxury-primary" id="empty-reset-btn">Reset All Filters</button>
          </div>
        `;
        document.getElementById("empty-reset-btn")?.addEventListener("click", resetAll);
      } else {
        grid.innerHTML = results.map(p => renderProductCard(p)).join("");
      }
    }
  };

  const resetAll = () => {
    document.querySelectorAll('input[name="cat-filter"]')[0].checked = true;
    document.querySelectorAll('input[name="occ-filter"]')[0].checked = true;
    document.querySelectorAll('input[name="mat-filter"]')[0].checked = true;
    document.querySelectorAll('input[name="price-filter"]')[0].checked = true;
    if (sortSelect) sortSelect.value = "featured";
    filterAndRender();
  };

  document.querySelectorAll('input[type="radio"]').forEach(r => {
    r.addEventListener("change", filterAndRender);
  });

  sortSelect?.addEventListener("change", filterAndRender);
  resetBtn?.addEventListener("click", resetAll);
}
