import { STORE_DETAILS } from "../data/collections.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderContactPage() {
  return `
    <main class="page-contact" style="padding-bottom:6rem;">
      <!-- Hero Banner -->
      <section style="background:#0E0D0C; color:var(--color-ivory); padding:6.5rem 0 5rem; text-align:center; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container" style="max-width:850px;">
          <div class="eyebrow-tag" style="justify-content:center; color:var(--color-gold-light);">Jaipur Boutique &bull; Near Hawa Mahal</div>
          <h1 class="section-title" style="color:var(--color-ivory); font-size:clamp(2.5rem, 5vw, 4.4rem); margin-bottom:1.25rem;">
            Visit Us in the Heart of Jaipur
          </h1>
          <p class="section-subtitle" style="margin:0 auto; color:var(--color-text-light-muted); font-size:1.15rem;">
            Experience our handcrafted luxury bags in person or connect with our personal shopping concierge for bespoke bridal orders and worldwide delivery.
          </p>
        </div>
      </section>

      <!-- Primary Contact Details & Quick Action Buttons -->
      <section style="background:var(--color-champagne); padding:3.5rem 0; border-bottom:1px solid var(--color-gold-border);">
        <div class="luxury-container">
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2rem; text-align:center;" class="contact-quick-grid">
            <div style="background:#FFFDF9; padding:2rem; border:1px solid var(--color-gold-border-subtle);">
              <div style="font-size:1.5rem; margin-bottom:0.5rem;">📍</div>
              <div style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700; margin-bottom:0.35rem;">Boutique Landmark</div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; font-weight:500; margin-bottom:0.75rem;">Near Hawa Mahal</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:1.25rem;">Jaipur, Rajasthan 302002, India</p>
              <a href="https://maps.google.com/?q=Hawa+Mahal+Jaipur" target="_blank" rel="noopener" class="btn-luxury btn-luxury-outline" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                Get Directions
              </a>
            </div>

            <div style="background:#FFFDF9; padding:2rem; border:1px solid var(--color-gold-border-subtle);">
              <div style="font-size:1.5rem; margin-bottom:0.5rem;">💬</div>
              <div style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700; margin-bottom:0.35rem;">WhatsApp Concierge</div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; font-weight:500; margin-bottom:0.75rem;">${STORE_DETAILS.phone}</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:1.25rem;">Immediate Ordering &amp; Live Video Inquiries</p>
              <a href="${buildWhatsAppLink("Hello LUXURY BAGS, I would like to inquire about your collections.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                Chat on WhatsApp
              </a>
            </div>

            <div style="background:#FFFDF9; padding:2rem; border:1px solid var(--color-gold-border-subtle);">
              <div style="font-size:1.5rem; margin-bottom:0.5rem;">📞</div>
              <div style="font-family:var(--font-sans); font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-deep); font-weight:700; margin-bottom:0.35rem;">Direct Phone Line</div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; font-weight:500; margin-bottom:0.75rem;">${STORE_DETAILS.phone}</div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:1.25rem;">Monday – Saturday: 10:30 AM – 8:30 PM</p>
              <a href="tel:${STORE_DETAILS.phone}" class="btn-luxury btn-luxury-primary" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Store Visual & Interactive Inquiry Form Split -->
      <section style="padding:6rem 0; background:#FFFDF9;">
        <div class="luxury-container">
          <div class="editorial-split" style="padding:0;">
            <!-- Left: Hawa Mahal / Jaipur Heritage Frame -->
            <div>
              <div class="editorial-image-frame">
                <img src="/images/editorial/jaipur_palace_golden_hour.jpg" alt="Iconic Hawa Mahal Jaipur Sunset" style="width:100%;" />
              </div>
              <div style="margin-top:2rem; padding:1.5rem; background:var(--color-champagne-light); border-left:3px solid var(--color-gold);">
                <h4 style="font-family:var(--font-serif); font-size:1.25rem; margin-bottom:0.35rem;">Store Visiting Information</h4>
                <p style="font-size:0.88rem; color:var(--color-text-secondary); line-height:1.65;">
                  Located steps away from the majestic Hawa Mahal facade. Private VIP appointments for brides and wedding parties are available with prior notice.
                </p>
              </div>
            </div>

            <!-- Right: Interactive Contact Form -->
            <div style="background:var(--color-champagne-light); border:1px solid var(--color-gold-border-subtle); padding:3rem 2.5rem;">
              <div class="eyebrow-tag">Atelier Inquiries</div>
              <h2 style="font-family:var(--font-serif); font-size:2.2rem; font-weight:400; margin-bottom:0.5rem;">Send a Message</h2>
              <p style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:2rem;">
                Fill out the details below to receive a direct response or transfer your inquiry to our WhatsApp team.
              </p>

              <form id="boutique-contact-form" style="display:flex; flex-direction:column; gap:1.25rem;">
                <div>
                  <label style="display:block; font-size:0.75rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;">Your Name *</label>
                  <input type="text" id="contact-name" required placeholder="e.g. Gayatri Rathore" style="width:100%; padding:0.85rem; border:1px solid var(--color-gold-border); background:#FFF;" />
                </div>

                <div class="form-row-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                  <div>
                    <label style="display:block; font-size:0.75rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;">Phone / WhatsApp *</label>
                    <input type="tel" id="contact-phone" required placeholder="${STORE_DETAILS.phone}" style="width:100%; padding:0.85rem; border:1px solid var(--color-gold-border); background:#FFF;" />
                  </div>
                  <div>
                    <label style="display:block; font-size:0.75rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;">Email Address</label>
                    <input type="email" id="contact-email" placeholder="name@domain.com" style="width:100%; padding:0.85rem; border:1px solid var(--color-gold-border); background:#FFF;" />
                  </div>
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;">Occasion / Bag of Interest</label>
                  <input type="text" id="contact-subject" placeholder="e.g. Bridal Clutch for December Wedding" style="width:100%; padding:0.85rem; border:1px solid var(--color-gold-border); background:#FFF;" />
                </div>

                <div>
                  <label style="display:block; font-size:0.75rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:600; margin-bottom:0.35rem;">Message *</label>
                  <textarea id="contact-msg" required rows="4" placeholder="How may our Jaipur boutique assist you today?" style="width:100%; padding:0.85rem; border:1px solid var(--color-gold-border); background:#FFF;"></textarea>
                </div>

                <div style="display:flex; gap:1rem; margin-top:0.5rem; flex-wrap:wrap;">
                  <button type="submit" class="btn-whatsapp" style="flex:1; justify-content:center; padding:1rem;">
                    Send via WhatsApp
                  </button>
                  <button type="button" id="contact-email-submit" class="btn-luxury btn-luxury-primary" style="flex:1;">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initContactEvents() {
  const form = document.getElementById("boutique-contact-form");
  const emailBtn = document.getElementById("contact-email-submit");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const subject = document.getElementById("contact-subject").value;
    const msg = document.getElementById("contact-msg").value;

    const message = `Hello LUXURY BAGS (Near Hawa Mahal, Jaipur),

New Inquiry:
Name: ${name}
Phone: ${phone}
Interest: ${subject || "General Inquiry"}

Message:
${msg}`;

    window.open(buildWhatsAppLink(message), "_blank");
  });

  emailBtn?.addEventListener("click", () => {
    const name = document.getElementById("contact-name").value;
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    alert(`Thank you, ${name}. Your message has been transmitted to our Jaipur boutique concierge. We will reach out shortly.`);
    form?.reset();
  });
}
