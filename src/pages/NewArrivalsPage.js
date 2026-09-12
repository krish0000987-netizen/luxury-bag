import { PRODUCTS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderNewArrivalsPage() {
  const newItems = PRODUCTS.filter(p => p.isNew);
  const firstBatch = newItems.slice(0, 3);
  const secondBatch = newItems.slice(3);

  return `
    <main class="page-new-arrivals" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:5.5rem 0 4.5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Autumn / Winter Haute Couture</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.5rem, 5vw, 4.2rem); margin-bottom:1rem;">
            New Season. New Obsession.
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.1rem;">
            Unveiling our newest handcrafted creations. Sculptural silhouettes, emerald crystals, and intricate Jadau work conceived for the festive &amp; wedding calendar.
          </p>
        </div>
      </section>

      <!-- First Batch of New Arrivals -->
      <section style="padding:4.5rem 0 3rem;">
        <div class="luxury-container">
          <div class="products-grid">
            ${firstBatch.map(p => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>

      <!-- Luxury Editorial Intermezzo Banner -->
      <section style="margin:2rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle); border-bottom:1px solid var(--color-gold-border-subtle); padding:5rem 0;">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <div>
              <div class="eyebrow-tag">The Art of New Luxury</div>
              <h2 class="section-title">Designed for Unforgettable Entrances</h2>
              <div class="gold-divider-left"></div>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.75; margin-bottom:1.5rem;">
                Each new silhouette begins as a poetic study in Jaipur's royal palaces. From the delicate mirrorwork of Sheesh Mahal to the arched marble balconies of Amer Fort, our new arrivals celebrate timeless heritage translated into contemporary evening glamour.
              </p>
              <div style="display:flex; gap:1rem;">
                <a href="${buildWhatsAppLink("Hello, I would like to preview the upcoming new arrivals at your Jaipur atelier.")}" target="_blank" rel="noopener" class="btn-whatsapp">
                  Inquire on WhatsApp
                </a>
                <a href="#/lookbook" class="btn-luxury btn-luxury-outline">View Lookbook</a>
              </div>
            </div>

            <div style="position:relative;">
              <img src="/images/editorial/hero_gold_pearl_statement.jpg" alt="Luxury Handbag Showcase" style="width:100%; border:1px solid var(--color-gold-border); box-shadow:var(--shadow-luxury);" />
            </div>
          </div>
        </div>
      </section>

      <!-- Second Batch of New Arrivals -->
      <section style="padding:3rem 0 5rem;">
        <div class="luxury-container">
          <div class="products-grid">
            ${secondBatch.map(p => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}
