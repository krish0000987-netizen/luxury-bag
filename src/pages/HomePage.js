import { HERO_SLIDES, FEATURED_COLLECTIONS, TRUST_POINTS, STORE_DETAILS } from "../data/collections.js";
import { PRODUCTS } from "../data/products.js";
import { renderProductCard } from "../components/ProductCard.js";
import { buildWhatsAppLink, formatINR, getProductWhatsAppUrl } from "../services/whatsapp.js";

function formatHeroHeadline(headline) {
  if (headline.includes(".")) {
    const parts = headline.split(".").map(s => s.trim()).filter(Boolean);
    if (parts.length === 2) {
      return `<span class="hero-title-phrase">${parts[0]}.</span> <span class="hero-title-phrase">${parts[1]}.</span>`;
    }
  }
  return `<span class="hero-title-phrase">${headline}</span>`;
}

export function renderHomePage() {
  const bestsellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);
  const flagship = PRODUCTS[0]; // The uploaded bag piece

  return `
    <main class="page-home">
      <!-- 1. Full-Screen Cinematic Hero Slideshow (Changes every 3s) -->
      <section class="hero-section" id="hero-slider" aria-label="Hero Showcase">
        ${HERO_SLIDES.map((slide, index) => `
          <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${slide.image}" alt="${slide.headline}" class="hero-slide-bg" />
            <div class="hero-overlay"></div>
            <div class="hero-content">
              <div class="hero-badge">
                <span>Royal Spirit &bull; Jaipur Heritage</span>
              </div>
              <h1 class="hero-title">${formatHeroHeadline(slide.headline)}</h1>
              <p class="hero-subtitle">${slide.subheading}</p>
              <div class="hero-actions">
                <a href="${slide.primaryLink}" class="btn-luxury btn-luxury-gold">${slide.primaryCta}</a>
                <a href="${slide.secondaryLink}" class="btn-luxury btn-luxury-outline-light">${slide.secondaryCta}</a>
              </div>
            </div>
          </div>
        `).join("")}

        <!-- Pagination Dots -->
        <div class="hero-pagination" id="hero-dots">
          ${HERO_SLIDES.map((_, index) => `
            <button class="hero-dot ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
          `).join("")}
        </div>

        <!-- Scroll Indicator -->
        <div class="hero-scroll-indicator">
          <span>Explore</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      <!-- 2. Featured Collections (4 Cards) -->
      <section style="padding:5.5rem 0 4.5rem; background:var(--color-champagne-light);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">Curated Edits</div>
            <h2 class="section-title">Iconic Collections</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Explore our hand-finished creations, inspired by the royal architectural contours, kundan stonecraft, and pearl traditions of Rajasthan.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div class="featured-collections-grid">
            ${FEATURED_COLLECTIONS.map(col => `
              <a href="${col.link}" class="collection-card">
                <img src="${col.image}" alt="${col.title}" class="collection-card-img" loading="lazy" />
                <div class="collection-card-overlay"></div>
                <div class="collection-card-content">
                  <div class="collection-card-subtitle">${col.subtitle}</div>
                  <h3 class="collection-card-title">${col.title}</h3>
                  <span class="collection-card-cta">
                    ${col.cta} &rarr;
                  </span>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 3. The Flagship Masterpiece (The Uploaded Reference Bag Showcase) -->
      <section style="padding:6rem 0; background:#FFFDF9; border-top:1px solid var(--color-gold-border-subtle); border-bottom:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div class="editorial-split">
            <div class="editorial-image-frame">
              <img src="/images/products/flagship_full.jpg" alt="The Royal Maharani Flagship Bag" style="width:100%; object-fit:cover;" />
              <div style="position:absolute; bottom:1.5rem; left:1.5rem; background:rgba(17,16,15,0.9); padding:0.6rem 1.25rem; color:var(--color-gold-light); font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase;">
                Flagship Creation &bull; Jaipur Atelier
              </div>
            </div>

            <div class="editorial-content-box">
              <div class="eyebrow-tag">The Flagship Silhouette</div>
              <h2 class="section-title" style="margin-bottom:0.75rem;">${flagship.name}</h2>
              <div style="font-family:var(--font-sans); font-size:1.35rem; font-weight:600; color:var(--color-gold-deep); margin-bottom:1.25rem;">
                ${formatINR(flagship.price)} <span style="font-size:0.95rem; text-decoration:line-through; color:var(--color-text-muted); font-weight:400;">${formatINR(flagship.comparePrice)}</span>
              </div>
              <p style="font-size:0.98rem; color:var(--color-text-secondary); line-height:1.75; margin-bottom:1.5rem;">
                The signature embodiment of our brand. Featuring hand-beveled teardrop crystal kundan stones, faceted circular mirrors, and double-tier pearl borders framed in 24K antique gold. Designed for unforgettable weddings, pheras, and royal galas.
              </p>
              
              <div class="flagship-specs-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2rem; padding:1.25rem; background:var(--color-champagne-light); border-left:3px solid var(--color-gold);">
                <div>
                  <div style="font-size:0.7rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:600;">Embellishment</div>
                  <div style="font-size:0.85rem; font-weight:500;">Prong-Set Kundan &amp; Pearls</div>
                </div>
                <div>
                  <div style="font-size:0.7rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:600;">Closure &amp; Chain</div>
                  <div style="font-size:0.85rem; font-weight:500;">Push-Snap with Gold Serpent Chain</div>
                </div>
              </div>

              <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                <a href="${getProductWhatsAppUrl(flagship)}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:0.95rem 1.75rem;">
                  Order via WhatsApp
                </a>
                <button class="btn-luxury btn-luxury-primary" data-bag-id="${flagship.id}">
                  Add to Bag
                </button>
                <a href="#/product/${flagship.id}" class="btn-luxury btn-luxury-outline">
                  View Multi-Angles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Best Sellers Grid -->
      <section style="padding:5.5rem 0; background:var(--color-champagne-light);">
        <div class="luxury-container">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:3rem; flex-wrap:wrap; gap:1.5rem;">
            <div>
              <div class="eyebrow-tag">Acclaimed Creations</div>
              <h2 class="section-title" style="margin-bottom:0;">The Best Sellers</h2>
            </div>
            <a href="#/shop" class="btn-luxury btn-luxury-outline">View All Pieces &rarr;</a>
          </div>

          <div class="products-grid">
            ${bestsellers.map(product => renderProductCard(product)).join("")}
          </div>
        </div>
      </section>

      <!-- 5. Luxury Bridal Collection Section -->
      <section style="padding:6rem 0; background:#0E0D0C; color:var(--color-ivory);">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <div>
              <div class="eyebrow-tag" style="color:var(--color-gold-light);">Bridal Couture Edit</div>
              <h2 class="section-title" style="color:var(--color-ivory); margin-bottom:1rem;">
                For the Bride Who Deserves the Extraordinary
              </h2>
              <div class="gold-divider-left"></div>
              <p style="color:var(--color-text-light-muted); line-height:1.75; font-size:1.02rem; margin-bottom:1.75rem;">
                An Indian wedding is a symphony of heritage and joy. Our bridal collection brings together opulent kundan filigree, hand-strung freshwater pearls, and zardozi detailing designed to harmonize flawlessly with heavy designer lehengas and wedding jewelry.
              </p>
              
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.85rem; margin-bottom:2.25rem;">
                <li style="display:flex; align-items:center; gap:0.75rem; font-size:0.9rem; color:var(--color-champagne-light);">
                  <span style="color:var(--color-gold);">&bull;</span> Hand-selected kundan crystals reflecting bridal chandeliers
                </li>
                <li style="display:flex; align-items:center; gap:0.75rem; font-size:0.9rem; color:var(--color-champagne-light);">
                  <span style="color:var(--color-gold);">&bull;</span> Dual styling: handheld minaudière or antique gold shoulder drape
                </li>
                <li style="display:flex; align-items:center; gap:0.75rem; font-size:0.9rem; color:var(--color-champagne-light);">
                  <span style="color:var(--color-gold);">&bull;</span> Velvet-lined keepsake chest perfect for wedding trousseaus
                </li>
              </ul>

              <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                <a href="#/bridal" class="btn-luxury btn-luxury-gold">Shop Bridal Collection</a>
                <a href="${buildWhatsAppLink("Hello, I would like to inquire about customized bridal handbag styling for my wedding.")}" target="_blank" rel="noopener" class="btn-whatsapp">
                  WhatsApp Bridal Stylist
                </a>
              </div>
            </div>

            <div style="position:relative;">
              <img src="/images/editorial/hero_bride_jaipur_couture.jpg" alt="Indian bride with luxury handbag in Jaipur palace" style="width:100%; border:1px solid rgba(197,160,89,0.4); box-shadow:0 25px 60px rgba(0,0,0,0.6);" />
              <div style="position:absolute; bottom:-1.5rem; right:-1.5rem; background:#181715; border:1px solid var(--color-gold); padding:1.25rem 1.75rem; max-width:260px;" class="hide-mobile">
                <div style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-gold-light); margin-bottom:0.25rem;">The Royal Trousseau</div>
                <div style="font-size:0.72rem; color:var(--color-text-light-muted); letter-spacing:0.12em; text-transform:uppercase;">Styled for Wedding Occasions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. New Arrivals Showcase -->
      <section style="padding:5.5rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">Seasonal Drops</div>
            <h2 class="section-title">New Arrivals</h2>
            <p class="section-subtitle" style="margin:0 auto;">
              Newly introduced handcrafted minaudières, emerald crystal clutches, and structured pearl frame bags.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div class="products-grid">
            ${newArrivals.map(product => renderProductCard(product)).join("")}
          </div>

          <div style="text-align:center; margin-top:3.5rem;">
            <a href="#/new-arrivals" class="btn-luxury btn-luxury-primary">Explore All New Arrivals</a>
          </div>
        </div>
      </section>

      <!-- 7. Crafted in Jaipur Royal Story & Craftsmanship Preview -->
      <section style="padding:6rem 0; background:var(--color-champagne-light); border-top:1px solid var(--color-gold-border-subtle);">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <div style="position:relative;">
              <img src="/images/editorial/craftsmanship_hands_pearl_setting.jpg" alt="Artisan hand-setting pearls and kundan on gold handbag" style="width:100%; border:1px solid var(--color-gold-border); box-shadow:var(--shadow-luxury);" />
            </div>

            <div>
              <div class="eyebrow-tag">Artisanal Heritage</div>
              <h2 class="section-title">Born in Jaipur. Inspired by Royalty.</h2>
              <div class="gold-divider-left"></div>
              <p style="font-size:1rem; color:var(--color-text-secondary); line-height:1.75; margin-bottom:1.5rem;">
                Located near the historic Hawa Mahal, our atelier preserves the time-honored jewelry and adornment arts of Rajasthan. Every bag is an homage to Rajputana court splendor — combining Jadau gem-setting, micro-mirror placement, and lustrous pearl embroidery with modern, lightweight silhouettes.
              </p>
              <p style="font-size:0.95rem; color:var(--color-text-secondary); line-height:1.7; margin-bottom:2rem;">
                We reject mass-produced shortcuts. Every stone is inspected, every pearl is tension-strung by hand, and every antique gold finish is lacquer-sealed to remain an enduring heirloom in your wardrobe.
              </p>
              <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                <a href="#/craftsmanship" class="btn-luxury btn-luxury-primary">The 6-Step Craft Story</a>
                <a href="#/about" class="btn-luxury btn-luxury-outline">Our Jaipur Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. Why Customers Choose Us (Trust without fake claims) -->
      <section style="padding:5rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div style="text-align:center; max-width:650px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag">The Maison Promise</div>
            <h2 class="section-title">Why Connoisseurs Choose Us</h2>
            <div class="gold-divider"></div>
          </div>

          <div class="trust-cards-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:2rem;">
            ${TRUST_POINTS.map(pt => `
              <div style="padding:2rem 1.5rem; background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); text-align:center;">
                <div style="width:50px; height:50px; margin:0 auto 1.25rem; border:1px solid var(--color-gold); display:flex; align-items:center; justify-content:center; border-radius:50%; color:var(--color-gold-deep); font-size:1.25rem;">
                  ✦
                </div>
                <h3 style="font-family:var(--font-serif); font-size:1.35rem; margin-bottom:0.75rem; font-weight:500;">${pt.title}</h3>
                <p style="font-size:0.88rem; color:var(--color-text-secondary); line-height:1.65;">${pt.description}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 9. Editorial Fashion & Lookbook Teaser -->
      <section style="padding:6rem 0; background:#0E0D0C; color:var(--color-ivory);">
        <div class="luxury-container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3.5rem;">
            <div class="eyebrow-tag" style="color:var(--color-gold-light);">Editorial Gallery</div>
            <h2 class="section-title" style="color:var(--color-ivory);">The Royal Lookbook</h2>
            <p style="color:var(--color-text-light-muted); margin:0 auto; font-size:1rem;">
              See how our signature bags transform bridal lehengas, silk sarees, and contemporary evening gowns.
            </p>
            <div class="gold-divider"></div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1.5rem;" class="lookbook-teaser-grid">
            <div style="position:relative; aspect-ratio:3/4; overflow:hidden;">
              <img src="/images/lookbook/lookbook_royal_soiree.jpg" alt="Emerald Saree with Gold Clutch" style="width:100%; height:100%; object-fit:cover;" />
              <div style="position:absolute; bottom:0; left:0; width:100%; padding:1.5rem; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent);">
                <div style="font-size:0.7rem; color:var(--color-gold-light); letter-spacing:0.2em; text-transform:uppercase;">Gala Evening</div>
                <div style="font-family:var(--font-serif); font-size:1.25rem;">Palace Soirée</div>
              </div>
            </div>

            <div style="position:relative; aspect-ratio:3/4; overflow:hidden;">
              <img src="/images/lookbook/lookbook_bridal_veil.jpg" alt="Indian Royal Bride with Pearl Clutch" style="width:100%; height:100%; object-fit:cover;" />
              <div style="position:absolute; bottom:0; left:0; width:100%; padding:1.5rem; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent);">
                <div style="font-size:0.7rem; color:var(--color-gold-light); letter-spacing:0.2em; text-transform:uppercase;">Bridal Pheras</div>
                <div style="font-family:var(--font-serif); font-size:1.25rem;">The Crimson Reverie</div>
              </div>
            </div>

            <div style="position:relative; aspect-ratio:3/4; overflow:hidden;">
              <img src="/images/lookbook/lookbook_minimal_champagne.jpg" alt="Modern Silk Gown with Gold Clutch" style="width:100%; height:100%; object-fit:cover;" />
              <div style="position:absolute; bottom:0; left:0; width:100%; padding:1.5rem; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent);">
                <div style="font-size:0.7rem; color:var(--color-gold-light); letter-spacing:0.2em; text-transform:uppercase;">Minimal Luxury</div>
                <div style="font-family:var(--font-serif); font-size:1.25rem;">Champagne Poise</div>
              </div>
            </div>
          </div>

          <div style="text-align:center; margin-top:3.5rem;">
            <a href="#/lookbook" class="btn-luxury btn-luxury-gold">Explore Full Lookbook</a>
          </div>
        </div>
      </section>

      <!-- 10. WhatsApp Shopping High-Impact CTA -->
      <section style="padding:5.5rem 0; background:linear-gradient(135deg, #181715 0%, #11100F 100%); color:var(--color-ivory); border-top:1px solid rgba(197,160,89,0.3); border-bottom:1px solid rgba(197,160,89,0.3);">
        <div class="luxury-container" style="text-align:center; max-width:800px;">
          <div class="eyebrow-tag" style="color:var(--color-gold-light); justify-content:center;">Direct Boutique Concierge</div>
          <h2 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.2rem, 4vw, 3.5rem); margin-bottom:1rem;">
            Experience One-on-One Royal Service
          </h2>
          <p style="color:var(--color-text-light-muted); font-size:1.1rem; line-height:1.7; margin-bottom:2rem;">
            Have questions about dimensions, weight, matching with your bridal outfit, or delivery to your city? Connect directly with our Jaipur boutique team via WhatsApp.
          </p>
          <div style="display:flex; justify-content:center; gap:1.25rem; flex-wrap:wrap;">
            <a href="${buildWhatsAppLink("Hello, I am interested in purchasing a luxury handbag from your Jaipur collection. Please assist me.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:1.1rem 2.2rem; font-size:0.85rem;">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
              Chat on WhatsApp: ${STORE_DETAILS.phone}
            </a>
            <a href="tel:${STORE_DETAILS.phone}" class="btn-luxury btn-luxury-outline-light">
              Call Jaipur Store
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

/**
 * Initialize 3-Second Cinematic Slideshow
 */
export function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;

  let current = 0;
  let timer = null;

  const goToSlide = (index) => {
    slides[current]?.classList.remove("active");
    dots[current]?.classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current]?.classList.add("active");
    dots[current]?.classList.add("active");
  };

  const nextSlide = () => {
    goToSlide(current + 1);
  };

  const startTimer = () => {
    stopTimer();
    // 3 seconds auto-rotation as requested in instructions
    timer = setInterval(nextSlide, 3000);
  };

  const stopTimer = () => {
    if (timer) clearInterval(timer);
  };

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.slide, 10);
      goToSlide(idx);
      startTimer();
    });
  });

  const heroSection = document.getElementById("hero-slider");
  heroSection?.addEventListener("mouseenter", stopTimer);
  heroSection?.addEventListener("mouseleave", startTimer);

  startTimer();
}
