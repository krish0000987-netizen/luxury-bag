import { PRODUCTS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";

export function renderHandbagsPage() {
  const handbags = PRODUCTS.filter(p => p.category === "handbags" || p.id.includes("structured") || p.id.includes("potli") || p.id.includes("frame"));

  return `
    <main class="page-handbags" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:6rem 0 5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Structured Bags &bull; Heritage Potlis</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.4rem, 5vw, 4.2rem); margin-bottom:1rem;">
            Luxury You Can Carry.
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.1rem;">
            Architectural silhouettes, sculpted pearl handles, and royal zardozi bullion needlework. Handcrafted in Jaipur for connoisseurs of timeless luxury.
          </p>
        </div>
      </section>

      <!-- Lifestyle Styling Showcase (Lehenga, Saree, Evening Dress) -->
      <section style="padding:5.5rem 0 4rem; background:#FFFDF9;">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">Haute Couture Pairings</div>
            <h2 class="section-title">The Art of the Ensemble</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Our luxury handbags and structured potlis are conceived to balance the rich textures of Indian and international couture.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2rem;" class="lifestyle-pairing-grid">
            <div style="background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); padding:1.5rem; text-align:center;">
              <div style="aspect-ratio:3/4; overflow:hidden; margin-bottom:1.25rem;">
                <img src="/images/lookbook/lookbook_royal_soiree.jpg" alt="Bag with Royal Silk Saree" style="width:100%; height:100%; object-fit:cover;" />
              </div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:0.4rem;">With Heritage Sarees</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); line-height:1.6;">
                Pair Banarasi and Kanjeevaram weaves with structured pearl clutches or antique gold zardozi potlis.
              </p>
            </div>

            <div style="background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); padding:1.5rem; text-align:center;">
              <div style="aspect-ratio:3/4; overflow:hidden; margin-bottom:1.25rem;">
                <img src="/images/editorial/hero_bride_jaipur_couture.jpg" alt="Bag with Bridal Lehenga" style="width:100%; height:100%; object-fit:cover;" />
              </div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:0.4rem;">With Bridal Lehengas</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); line-height:1.6;">
                Complement heavy zardozi and polki bridal sets with our flagship kundan and pearl minaudière.
              </p>
            </div>

            <div style="background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); padding:1.5rem; text-align:center;">
              <div style="aspect-ratio:3/4; overflow:hidden; margin-bottom:1.25rem;">
                <img src="/images/lookbook/lookbook_minimal_champagne.jpg" alt="Bag with Evening Wear" style="width:100%; height:100%; object-fit:cover;" />
              </div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:0.4rem;">With Contemporary Gowns</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); line-height:1.6;">
                Elevate slip gowns and minimalist cocktail silhouettes with faceted Swarovski crystal box bags.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Handbags Catalog -->
      <section style="padding:5.5rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">The Catalog</div>
            <h2 class="section-title">The Handbag Collection</h2>
            <div class="gold-divider"></div>
          </div>

          <div class="products-grid">
            ${handbags.map(p => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}
