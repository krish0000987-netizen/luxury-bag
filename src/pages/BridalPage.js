import { PRODUCTS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";
import { buildWhatsAppLink, getBridalAppointmentUrl } from "../services/whatsapp.js";
import { STORE_DETAILS } from "../data/collections.js";

export function renderBridalPage() {
  const bridalBags = PRODUCTS.filter(p => p.isBridal);

  return `
    <main class="page-bridal" style="padding-bottom:6rem;">
      <!-- Hero Section -->
      <section style="position:relative; height:75vh; min-height:550px; background:#0E0D0C; overflow:hidden; display:flex; align-items:center;">
        <img src="/images/editorial/hero_bride_jaipur_couture.jpg" alt="Indian Royal Bride in Jaipur Palace" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.65;" />
        <div class="hero-overlay" style="background:linear-gradient(to right, rgba(14,13,12,0.92) 0%, rgba(14,13,12,0.4) 60%, transparent 100%);"></div>
        
        <div class="luxury-container" style="position:relative; z-index:3; max-width:850px; margin-left:0;">
          <div class="eyebrow-tag" style="color:var(--color-gold-light);">The Imperial Bridal Trousseau</div>
          <h1 class="hero-title" style="font-size:clamp(2.5rem, 5vw, 4.5rem); text-align:left; color:var(--color-ivory); margin-bottom:1.25rem;">
            For the Bride Who Deserves the Extraordinary
          </h1>
          <p style="color:var(--color-champagne-light); font-size:1.15rem; line-height:1.7; margin-bottom:2.25rem; max-width:620px;">
            Handcrafted with multi-faceted kundan stones, thousands of hand-strung pearls, and 24K antique gold. Created to crown your most cherished wedding moments.
          </p>
          <div style="display:flex; gap:1.25rem; flex-wrap:wrap;">
            <a href="#bridal-catalog" class="btn-luxury btn-luxury-gold">Shop Bridal Collection</a>
            <a href="${getBridalAppointmentUrl()}" target="_blank" rel="noopener" class="btn-whatsapp">
              Book WhatsApp Styling Session
            </a>
          </div>
        </div>
      </section>

      <!-- Bridal Occasions Sub-Navigation -->
      <section style="background:var(--color-champagne); padding:2rem 0; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="display:flex; justify-content:center; gap:2.5rem; flex-wrap:wrap;">
          <span style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-text-primary); font-weight:600;">Bridal Clutches</span>
          <span style="color:var(--color-gold);">&bull;</span>
          <span style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-text-primary); font-weight:600;">Wedding Guest Bags</span>
          <span style="color:var(--color-gold);">&bull;</span>
          <span style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-text-primary); font-weight:600;">Reception Minaudières</span>
          <span style="color:var(--color-gold);">&bull;</span>
          <span style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-text-primary); font-weight:600;">Engagement &amp; Sangeet</span>
          <span style="color:var(--color-gold);">&bull;</span>
          <span style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-text-primary); font-weight:600;">Velvet Zardozi Potlis</span>
        </div>
      </section>

      <!-- Complete Your Bridal Look Interactive Feature -->
      <section style="padding:6rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div style="text-align:center; max-width:750px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">Haute Styling Edit</div>
            <h2 class="section-title">Complete Your Bridal Look</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Our Jaipur stylists curate the perfect synergy between our embellished bags, bridal polki jewelry, and designer wedding lehengas.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:3.5rem; align-items:center;" class="editorial-split">
            <div style="position:relative;">
              <img src="/images/lookbook/lookbook_bridal_veil.jpg" alt="Bridal Dupatta & Clutch Pairing" style="width:100%; border:1px solid var(--color-gold-border); box-shadow:var(--shadow-luxury);" />
            </div>

            <div>
              <span class="eyebrow-tag">The Wedding Ensemble</span>
              <h3 style="font-family:var(--font-serif); font-size:2.2rem; margin-bottom:1rem; font-weight:400;">The Crimson &amp; Pearl Symphony</h3>
              <p style="font-size:0.98rem; color:var(--color-text-secondary); line-height:1.75; margin-bottom:1.5rem;">
                When pairing with a classic red, deep maroon, or vermillion wedding lehenga, The Noor Ivory Pearl Box Minaudière offers a luminous contrast that echoes traditional polki and pearl mathapattis.
              </p>
              
              <div style="background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); padding:1.5rem; margin-bottom:2rem;">
                <div style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700; margin-bottom:0.75rem;">
                  Recommended Bridal Match
                </div>
                <div style="display:flex; gap:1rem; align-items:center;">
                  <img src="/images/products/bag_bridal_ivory_pearl.jpg" alt="The Noor Box Clutch" style="width:70px; height:70px; object-fit:cover; border:1px solid var(--color-gold-border);" />
                  <div>
                    <div style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">The Noor Ivory Pearl Box Minaudière</div>
                    <div style="font-size:0.85rem; color:var(--color-gold-deep); font-weight:600;">₹6,499 &bull; Handcrafted in Jaipur</div>
                  </div>
                </div>
              </div>

              <a href="#/product/noor-ivory-pearl-box-clutch" class="btn-luxury btn-luxury-primary">
                View Matched Bag &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Bridal Catalog Grid -->
      <section id="bridal-catalog" style="padding:5.5rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">The Wedding Catalog</div>
            <h2 class="section-title">The Bridal &amp; Wedding Collection</h2>
            <div class="gold-divider"></div>
          </div>

          <div class="products-grid">
            ${bridalBags.map(p => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>

      <!-- WhatsApp Concierge for Bridal Trousseaus -->
      <section style="padding:5rem 0; background:#181715; color:var(--color-ivory); text-align:center;">
        <div class="luxury-container" style="max-width:750px;">
          <h2 style="font-family:var(--font-serif); font-size:2.4rem; color:var(--color-gold-light); margin-bottom:1rem;">
            Curating a Complete Wedding Trousseau?
          </h2>
          <p style="color:var(--color-text-light-muted); line-height:1.7; margin-bottom:2rem;">
            We offer bespoke multi-bag wedding packages for the bride, mother of the bride, and bridesmaids. Connect with our senior Jaipur concierge for personal video walkthroughs and special bridal trousseau sets.
          </p>
          <a href="${buildWhatsAppLink("Hello, I am planning my wedding trousseau and would like personalized assistance for multiple bags.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:1rem 2rem; font-size:0.85rem;">
            WhatsApp Bridal Concierge (${STORE_DETAILS.phone})
          </a>
        </div>
      </section>
    </main>
  `;
}
