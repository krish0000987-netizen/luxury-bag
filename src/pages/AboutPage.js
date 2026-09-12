import { STORE_DETAILS } from "../data/collections.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderAboutPage() {
  return `
    <main class="page-about" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:6.5rem 0 5.5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">The Maison Narrative</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.5rem, 5vw, 4.4rem); margin-bottom:1.25rem;">
            Born in Jaipur. Designed for the Extraordinary.
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.15rem;">
            Inspired by the royal palaces, gemstone ateliers, and courtly adornments of Rajasthan, LUXURY BAGS crafts heirloom accessories for discerning women worldwide.
          </p>
        </div>
      </section>

      <!-- Brand Story Split -->
      <section style="padding:6rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <div>
              <div class="eyebrow-tag">Our Heritage &amp; Philosophy</div>
              <h2 class="section-title">Royal Spirit. Modern Sophistication.</h2>
              <div class="gold-divider-left"></div>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:1.5rem;">
                Jaipur has always been synonymous with jewelry, architecture, and uncompromising royal aesthetics. For centuries, the city's master artisans have practiced the arts of Jadau stone setting, meenakari enamel, and intricate pearl stringing for the royal courts.
              </p>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:1.5rem;">
                <strong>LUXURY BAGS</strong> was founded on a singular vision: to translate this regal Rajasthani jewellery aesthetic into modern luxury handbags. We believe that an evening bag should not merely hold personal essentials; it should carry the dignity, craftsmanship, and poetry of an heirloom.
              </p>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:2rem;">
                Situated near the iconic Hawa Mahal in the heart of Jaipur, our workshop brings together generational jewelry artisans and master leatherworkers to produce pieces of singular distinction.
              </p>

              <div style="display:flex; gap:1.25rem; flex-wrap:wrap;">
                <a href="#/craftsmanship" class="btn-luxury btn-luxury-primary">Explore Our Craftsmanship</a>
                <a href="#/contact" class="btn-luxury btn-luxury-outline">Visit Our Boutique</a>
              </div>
            </div>

            <div style="position:relative;">
              <div class="editorial-image-frame">
                <img src="/images/editorial/jaipur_palace_golden_hour.jpg" alt="Hawa Mahal Jaipur Golden Hour" style="width:100%;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Large Visual Section: From the Pink City to Your Wardrobe -->
      <section style="padding:6rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle); border-bottom:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:800px; margin:0 auto 4rem;">
            <div class="eyebrow-tag">The Journey of Creation</div>
            <h2 class="section-title">From the Pink City to Your Wardrobe</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Each handbag travels from our Jaipur design desks through delicate hands that cut mirrors, set kundan, and stitch pure silk before reaching celebrations across the globe.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2rem;" class="about-grid-steps">
            <div style="background:#FFFDF9; border:1px solid var(--color-gold-border-subtle); padding:2.5rem 2rem; text-align:center;">
              <div style="font-family:var(--font-display); font-size:2rem; color:var(--color-gold); margin-bottom:1rem;">I</div>
              <h3 style="font-family:var(--font-serif); font-size:1.4rem; margin-bottom:0.75rem;">Archival Jaipur Motifs</h3>
              <p style="font-size:0.9rem; color:var(--color-text-secondary); line-height:1.7;">
                Floral medallions, jharokha silhouettes, and peacock arabesques drafted with symmetry and restraint.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--color-gold-border-subtle); padding:2.5rem 2rem; text-align:center;">
              <div style="font-family:var(--font-display); font-size:2rem; color:var(--color-gold); margin-bottom:1rem;">II</div>
              <h3 style="font-family:var(--font-serif); font-size:1.4rem; margin-bottom:0.75rem;">Generational Jewel Setting</h3>
              <p style="font-size:0.9rem; color:var(--color-text-secondary); line-height:1.7;">
                Set by hand-craft jewelers using antique gold foils, hand-beveled glass crystals, and natural pearl tiers.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--color-gold-border-subtle); padding:2.5rem 2rem; text-align:center;">
              <div style="font-family:var(--font-display); font-size:2rem; color:var(--color-gold); margin-bottom:1rem;">III</div>
              <h3 style="font-family:var(--font-serif); font-size:1.4rem; margin-bottom:0.75rem;">Heirloom Keepsake</h3>
              <p style="font-size:0.9rem; color:var(--color-text-secondary); line-height:1.7;">
                Packaged in velvet-lined cases with gold chains, ready to grace weddings, sangeets, and unforgettable evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Store & Atelier Location Highlight -->
      <section style="padding:5.5rem 0; background:#0E0D0C; color:var(--color-ivory); text-align:center;">
        <div class="luxury-container" style="max-width:750px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Our Jaipur Home</div>
          <h2 class="section-title" style="color:var(--color-ivory); margin-bottom:1rem;">Visit Us in Jaipur</h2>
          <p style="color:var(--color-text-light-muted); font-size:1.05rem; line-height:1.7; margin-bottom:2rem;">
            Experience the tactile luster of our bags in person. We welcome wedding shoppers, brides, and collectors to our boutique near the historic Hawa Mahal.
          </p>
          <div style="display:flex; justify-content:center; gap:1.25rem; flex-wrap:wrap;">
            <a href="#/contact" class="btn-luxury btn-luxury-gold">View Store Location &amp; Hours</a>
            <a href="${buildWhatsAppLink("Hello, I would like to schedule a visit to your store near Hawa Mahal, Jaipur.")}" target="_blank" rel="noopener" class="btn-whatsapp">
              WhatsApp Store: ${STORE_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}
