import { cart } from "../services/cart.js";
import { wishlist } from "../services/wishlist.js";
import { STORE_DETAILS } from "../data/collections.js";
import { buildWhatsAppLink } from "../services/whatsapp.js";

export function renderHeader() {
  const cartCount = cart.getCount();
  const wishlistCount = wishlist.getCount();

  return `
    <div class="announcement-bar">
      <div class="announcement-brand-text">
        <span class="announcement-line1">Handcrafted in Jaipur &bull; Royal Heritage</span>
        <span class="announcement-line2">Embellishments &bull; Near Hawa Mahal</span>
      </div>
      <a href="tel:${STORE_DETAILS.phone}" class="announcement-phone">Call: ${STORE_DETAILS.phone}</a>
    </div>

    <header class="site-header" id="site-header">
      <div class="luxury-container header-inner">
        <!-- Mobile & Tablet Menu Button -->
        <button class="mobile-menu-trigger" id="mobile-menu-open" aria-label="Open Navigation Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span class="mobile-menu-label">Menu</span>
        </button>

        <!-- Brand Logo -->
        <a href="#/" class="brand-logo">
          <span class="brand-logo-text">LUXURY BAGS</span>
          <span class="brand-tagline">Jaipur &bull; Near Hawa Mahal</span>
        </a>

        <!-- Desktop Navigation (All 10 Dedicated Pages, Single-line, No Wrapping) -->
        <nav class="nav-container" aria-label="Primary Navigation">
          <ul class="nav-menu">
            <li><a href="#/" class="nav-link" data-route="/">Home</a></li>
            <li><a href="#/shop" class="nav-link" data-route="/shop">Shop All</a></li>
            <li><a href="#/new-arrivals" class="nav-link" data-route="/new-arrivals">New Arrivals</a></li>
            <li><a href="#/bridal" class="nav-link" data-route="/bridal">Bridal</a></li>
            <li><a href="#/clutches" class="nav-link" data-route="/clutches">Clutches</a></li>
            <li><a href="#/handbags" class="nav-link" data-route="/handbags">Handbags</a></li>
            <li><a href="#/about" class="nav-link" data-route="/about">About</a></li>
            <li><a href="#/craftsmanship" class="nav-link" data-route="/craftsmanship">Craftsmanship</a></li>
            <li><a href="#/lookbook" class="nav-link" data-route="/lookbook">Lookbook</a></li>
            <li><a href="#/contact" class="nav-link" data-route="/contact">Contact</a></li>
          </ul>
        </nav>

        <!-- Header Actions: Search, Wishlist, Cart, WhatsApp -->
        <div class="header-actions">
          <button class="header-icon-btn" id="header-search-btn" title="Search Collection" aria-label="Search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button class="header-icon-btn" id="header-wishlist-btn" title="Curated Wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="badge-counter" id="wishlist-badge" style="${wishlistCount > 0 ? '' : 'display:none;'}">${wishlistCount}</span>
          </button>

          <button class="header-icon-btn" id="header-cart-btn" title="Shopping Bag" aria-label="Shopping Bag">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span class="badge-counter" id="cart-badge" style="${cartCount > 0 ? '' : 'display:none;'}">${cartCount}</span>
          </button>

          <a href="${buildWhatsAppLink("Hello, I am inquiring about your luxury handbags collection (LUXURY BAGS Jaipur).")}" target="_blank" rel="noopener" class="header-whatsapp-link" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
            <span class="header-whatsapp-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Mobile & Tablet Full-Screen Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(197,160,89,0.2); padding-bottom:1.25rem;">
        <div>
          <span style="font-family:var(--font-display); font-size:1.35rem; color:var(--color-ivory); letter-spacing:0.25em; font-weight:700;">LUXURY BAGS</span>
          <div style="font-size:0.65rem; color:var(--color-gold); letter-spacing:0.2em; text-transform:uppercase;">Jaipur &bull; Near Hawa Mahal</div>
        </div>
        <button id="mobile-menu-close" style="color:var(--color-ivory); font-size:2rem; background:none; border:none; cursor:pointer; line-height:1;" aria-label="Close Menu">&times;</button>
      </div>

      <ul class="mobile-nav-links">
        <li><a href="#/" class="mobile-nav-link" data-route="/">Home</a></li>
        <li><a href="#/shop" class="mobile-nav-link" data-route="/shop">Shop All</a></li>
        <li><a href="#/new-arrivals" class="mobile-nav-link" data-route="/new-arrivals">New Arrivals</a></li>
        <li><a href="#/bridal" class="mobile-nav-link" data-route="/bridal">Bridal Collection</a></li>
        <li><a href="#/clutches" class="mobile-nav-link" data-route="/clutches">Clutch Collection</a></li>
        <li><a href="#/handbags" class="mobile-nav-link" data-route="/handbags">Luxury Handbags</a></li>
        <li><a href="#/about" class="mobile-nav-link" data-route="/about">About Us</a></li>
        <li><a href="#/craftsmanship" class="mobile-nav-link" data-route="/craftsmanship">Jaipur Craftsmanship</a></li>
        <li><a href="#/lookbook" class="mobile-nav-link" data-route="/lookbook">Lookbook</a></li>
        <li><a href="#/contact" class="mobile-nav-link" data-route="/contact">Contact & Store</a></li>
      </ul>

      <div style="margin-top:auto; padding-top:2rem; border-top:1px solid rgba(197,160,89,0.25);">
        <div style="font-size:0.75rem; color:var(--color-gold-light); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.5rem;">Jaipur Atelier Direct:</div>
        <a href="tel:${STORE_DETAILS.phone}" style="display:block; font-size:1.15rem; color:var(--color-ivory); font-weight:600; margin-bottom:1.25rem;">${STORE_DETAILS.phone}</a>
        <a href="${buildWhatsAppLink("Hello, I would like to inquire about LUXURY BAGS.")}" target="_blank" rel="noopener" class="btn-whatsapp" style="width:100%; justify-content:center; padding:1rem;">
          Order on WhatsApp
        </a>
      </div>
    </div>
  `;
}

export function initHeaderEvents() {
  const header = document.getElementById("site-header");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile menu events
  const openBtn = document.getElementById("mobile-menu-open");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-nav-drawer");

  openBtn?.addEventListener("click", () => drawer?.classList.add("open"));
  closeBtn?.addEventListener("click", () => drawer?.classList.remove("open"));

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => drawer?.classList.remove("open"));
  });

  // Cart button
  document.getElementById("header-cart-btn")?.addEventListener("click", () => {
    cart.openDrawer();
  });

  // Reactive badge updates
  window.addEventListener("cart:updated", () => {
    const badge = document.getElementById("cart-badge");
    const count = cart.getCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  });

  window.addEventListener("wishlist:updated", () => {
    const badge = document.getElementById("wishlist-badge");
    const count = wishlist.getCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  });
}
