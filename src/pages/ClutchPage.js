import { PRODUCTS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderClutchPage() {
  const clutches = PRODUCTS.filter(p => p.category === "clutches");

  return `
    <main class="page-clutches" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:linear-gradient(135deg, #11100F 0%, #1A1917 100%); color:var(--color-ivory); padding:6rem 0 5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Minaudières &amp; Box Clutches</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.4rem, 5vw, 4.2rem); margin-bottom:1rem;">
            Small in Size. Extraordinary in Presence.
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.1rem;">
            From shimmering Jaipur mirrorwork to cascading pearls and Swarovski crystal cages, explore the ultimate statement accessories for galas, receptions, and celebrations.
          </p>
        </div>
      </section>

      <!-- Statement Philosophy Section -->
      <section style="padding:4.5rem 0; background:#FFFDF9; border-bottom:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container" style="text-align:center; max-width:780px;">
          <div class="eyebrow-tag" style="justify-content:center;">The Signature Statement</div>
          <h2 style="font-family:var(--font-serif); font-size:clamp(1.8rem, 3vw, 2.5rem); font-weight:400; line-height:1.35; margin-bottom:1rem;">
            &ldquo;Every clutch is designed to become the statement piece of your outfit.&rdquo;
          </h2>
          <p style="font-size:0.95rem; color:var(--color-text-secondary); line-height:1.75;">
            Whether you choose to hold it in your hand as a sculpted jewel or drape it across your shoulder with our 24K gold serpent chain, our clutches are balanced to feel weightless while captivating every eye in the room.
          </p>
          <div class="gold-divider"></div>
        </div>
      </section>

      <!-- Clutch Catalog -->
      <section style="padding:5.5rem 0;">
        <div class="luxury-container">
          <div class="products-grid">
            ${clutches.map(p => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>

      <!-- Prominent WhatsApp Order Strip -->
      <section style="background:var(--color-champagne); padding:4rem 0; text-align:center; border-top:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:700px;">
          <h3 style="font-family:var(--font-serif); font-size:2rem; margin-bottom:0.75rem;">Need Assistance Choosing a Clutch?</h3>
          <p style="font-size:0.95rem; color:var(--color-text-secondary); margin-bottom:1.5rem;">
            Share your outfit color or event theme, and our Jaipur stylists will send you high-definition video recommendations on WhatsApp.
          </p>
          <a href="${buildWhatsAppLink("Hello, I need help selecting the perfect clutch for an upcoming occasion.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:1rem 2rem;">
            Chat on WhatsApp (+91 96029 57926)
          </a>
        </div>
      </section>
    </main>
  `;
}
