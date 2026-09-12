import { CRAFTSMANSHIP_STEPS } from "../data/collections.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderCraftsmanshipPage() {
  return `
    <main class="page-craftsmanship" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:6.5rem 0 5.5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Artisanal Heritage</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.5rem, 5vw, 4.4rem); margin-bottom:1.25rem;">
            Where Artistry Becomes Luxury.
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.15rem;">
            Explore the painstaking human touch behind every kundan stone, mirror facet, and hand-knotted pearl strand that graces a LUXURY BAGS creation.
          </p>
        </div>
      </section>

      <!-- Artisan Atelier Visual Section -->
      <section style="padding:6rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <div style="position:relative;">
              <div class="editorial-image-frame">
                <img src="/images/editorial/craftsmanship_hands_pearl_setting.jpg" alt="Master artisan setting pearls in Jaipur workshop" style="width:100%;" />
              </div>
            </div>

            <div>
              <div class="eyebrow-tag">The Human Touch</div>
              <h2 class="section-title">Every Detail Has a Purpose.</h2>
              <div class="gold-divider-left"></div>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:1.5rem;">
                In an era of automated mass production, our workshop remains devoted to slow, deliberate craftsmanship. A single flagship minaudière requires up to 36 hours of handwork by skilled craftsmen who have inherited the jeweler's patience.
              </p>
              <p style="font-size:1.02rem; color:var(--color-text-secondary); line-height:1.8; margin-bottom:2rem;">
                From selecting unblemished pearls of uniform tone to angling faceted mirrors so they catch ambient ballroom chandeliers, nothing is left to chance. The result is a sculptural accessory that feels substantial, luxurious, and timeless.
              </p>
              
              <div class="flagship-specs-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; padding:1.25rem; background:var(--color-champagne-light); border-left:3px solid var(--color-gold);">
                <div>
                  <div style="font-size:0.7rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700;">Average Crafting Time</div>
                  <div style="font-size:1.1rem; font-family:var(--font-serif); font-weight:600;">24 to 36 Hours</div>
                </div>
                <div>
                  <div style="font-size:0.7rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700;">Hand-Set Gemstones</div>
                  <div style="font-size:1.1rem; font-family:var(--font-serif); font-weight:600;">100+ Pieces Per Bag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Step-by-Step Storytelling Section (01 to 06) -->
      <section style="padding:6rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle); border-bottom:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:750px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">The 6-Step Journey</div>
            <h2 class="section-title">The Anatomy of an Heirloom</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Follow the journey of how raw brass, crystals, and pearls transform into royal Jaipur luxury.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div class="craft-timeline">
            ${CRAFTSMANSHIP_STEPS.map(step => `
              <div class="craft-step-card">
                <div class="craft-step-number">${step.step}</div>
                <h3 class="craft-step-title">${step.title}</h3>
                <p class="craft-step-desc">${step.description}</p>
                <div class="craft-step-detail">
                  &bull; ${step.detail}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Macro Details Close-Up Gallery -->
      <section style="padding:5.5rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">Intricate Textures</div>
            <h2 class="section-title">Macro Perspectives</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Inspect the micro-embellishments, jewel clasps, and pure silk satin linings up close.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1.75rem;" class="macro-gallery-grid">
            <div style="border:1px solid var(--color-gold-border-subtle); overflow:hidden;">
              <img src="/images/products/flagship_detail.jpg" alt="Macro teardrop kundan crystals and pearl trim" style="width:100%; aspect-ratio:1/1; object-fit:cover; transition:transform 0.6s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" />
              <div style="padding:1.25rem; text-align:center; background:#FFF;">
                <div style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">Prong-Set Kundan Centerpiece</div>
                <div style="font-size:0.75rem; color:var(--color-gold-deep); text-transform:uppercase; letter-spacing:0.12em;">Solitaire Teardrop Crystal</div>
              </div>
            </div>

            <div style="border:1px solid var(--color-gold-border-subtle); overflow:hidden;">
              <img src="/images/products/flagship_side.jpg" alt="Structural side pearls and clasp" style="width:100%; aspect-ratio:1/1; object-fit:cover; transition:transform 0.6s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" />
              <div style="padding:1.25rem; text-align:center; background:#FFF;">
                <div style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">Dual-Tier Pearl Perimeter</div>
                <div style="font-size:0.75rem; color:var(--color-gold-deep); text-transform:uppercase; letter-spacing:0.12em;">High-Tensile Tension Setting</div>
              </div>
            </div>

            <div style="border:1px solid var(--color-gold-border-subtle); overflow:hidden;">
              <img src="/images/products/flagship_back.jpg" alt="Symmetrical back panel with gold chain" style="width:100%; aspect-ratio:1/1; object-fit:cover; transition:transform 0.6s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" />
              <div style="padding:1.25rem; text-align:center; background:#FFF;">
                <div style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">Antique 24K Gold Lacquer</div>
                <div style="font-size:0.75rem; color:var(--color-gold-deep); text-transform:uppercase; letter-spacing:0.12em;">Tarnish-Resistant Coating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Craftsmanship CTA -->
      <section style="padding:5rem 0; background:#0E0D0C; color:var(--color-ivory); text-align:center;">
        <div class="luxury-container" style="max-width:700px;">
          <h2 style="font-family:var(--font-serif); font-size:2.4rem; color:var(--color-gold-light); margin-bottom:1rem;">Experience the Mastery</h2>
          <p style="color:var(--color-text-light-muted); margin-bottom:2rem;">
            Order our signature handcrafted bags directly via WhatsApp with our Jaipur boutique.
          </p>
          <a href="#/shop" class="btn-luxury btn-luxury-gold">Explore The Collection</a>
        </div>
      </section>
    </main>
  `;
}
