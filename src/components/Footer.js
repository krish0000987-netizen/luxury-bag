import { STORE_DETAILS } from "../data/collections.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="luxury-container">
        <div class="footer-top">
          <!-- Col 1: Brand & Philosophy -->
          <div>
            <div class="footer-brand-title">LUXURY BAGS</div>
            <div style="font-family:var(--font-sans); font-size:0.7rem; color:var(--color-gold); letter-spacing:0.25em; text-transform:uppercase; margin-bottom:1.25rem;">
              Jaipur, Rajasthan &bull; Near Hawa Mahal
            </div>
            <p class="footer-brand-desc">
              Exquisite women's luxury handbags and embellished bridal minaudières inspired by the royal heritage, Rajputana jewelry traditions, and timeless opulence of the Pink City.
            </p>
            <div style="display:flex; gap:1rem; margin-top:1.5rem;">
              <a href="${buildWhatsAppLink("Hello, I would like to explore your latest luxury handbag catalog.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                WhatsApp Us
              </a>
              <a href="tel:${STORE_DETAILS.phone}" class="btn-luxury btn-luxury-outline-light" style="padding:0.6rem 1.25rem; font-size:0.72rem;">
                Call Store
              </a>
            </div>
          </div>

          <!-- Col 2: Shop Navigation -->
          <div>
            <div class="footer-col-title">Collections</div>
            <ul class="footer-links">
              <li><a href="#/shop">Shop All Bags</a></li>
              <li><a href="#/new-arrivals">New Arrivals</a></li>
              <li><a href="#/bridal">Bridal & Wedding</a></li>
              <li><a href="#/clutches">Royal Clutches</a></li>
              <li><a href="#/handbags">Luxury Handbags</a></li>
              <li><a href="#/shop?category=clutches">Minaudières</a></li>
            </ul>
          </div>

          <!-- Col 3: Brand & Craft -->
          <div>
            <div class="footer-col-title">The Maison</div>
            <ul class="footer-links">
              <li><a href="#/about">Our Jaipur Story</a></li>
              <li><a href="#/craftsmanship">Artisanal Craftsmanship</a></li>
              <li><a href="#/lookbook">Editorial Lookbook</a></li>
              <li><a href="#/contact">Boutique & Location</a></li>
              <li><a href="#/contact">Book Styling Session</a></li>
            </ul>
          </div>

          <!-- Col 4: Newsletter & Atelier -->
          <div>
            <div class="footer-col-title">Jaipur Boutique</div>
            <div class="footer-contact-item">
              <span>📍</span>
              <span>Near Hawa Mahal, Jaipur, Rajasthan 302002, India</span>
            </div>
            <div class="footer-contact-item">
              <span>📞</span>
              <a href="tel:${STORE_DETAILS.phone}" style="color:var(--color-ivory);">${STORE_DETAILS.phone}</a>
            </div>
            <div class="footer-contact-item">
              <span>💬</span>
              <a href="${buildWhatsAppLink("Hello LUXURY BAGS Concierge")}" target="_blank" style="color:var(--color-gold);">${STORE_DETAILS.phone}</a>
            </div>

            <div style="margin-top:1.5rem;">
              <div style="font-family:var(--font-sans); font-size:0.72rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--color-gold-light); margin-bottom:0.5rem;">
                Join the World of Luxury
              </div>
              <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to LUXURY BAGS Jaipur.');">
                <input type="email" placeholder="Enter your email" class="newsletter-input" required />
                <button type="submit" class="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} LUXURY BAGS. All Rights Reserved. Jaipur, Rajasthan.
          </div>
          <div style="display:flex; gap:2rem;">
            <span>Royal Rajputana Heritage</span>
            <span>Near Hawa Mahal</span>
            <span>Complimentary Insured Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
