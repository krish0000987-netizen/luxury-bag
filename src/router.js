import { renderHomePage, initHeroSlideshow } from "./pages/HomePage.js";
import { renderShopPage, initShopEvents } from "./pages/ShopPage.js";
import { renderNewArrivalsPage } from "./pages/NewArrivalsPage.js";
import { renderBridalPage } from "./pages/BridalPage.js";
import { renderClutchPage } from "./pages/ClutchPage.js";
import { renderHandbagsPage } from "./pages/HandbagsPage.js";
import { renderAboutPage } from "./pages/AboutPage.js";
import { renderCraftsmanshipPage } from "./pages/CraftsmanshipPage.js";
import { renderLookbookPage, initLookbookEvents } from "./pages/LookbookPage.js";
import { renderContactPage, initContactEvents } from "./pages/ContactPage.js";
import { renderProductDetailPage, initProductDetailEvents } from "./pages/ProductDetailPage.js";
import { showQuickViewModal } from "./components/QuickViewModal.js";
import { cart } from "./services/cart.js";
import { wishlist } from "./services/wishlist.js";
import { PRODUCTS } from "./data/products.js";
import { updateFloatingWhatsAppTarget } from "./components/FloatingWhatsApp.js";

export function handleRoute() {
  const hash = window.location.hash || "#/";
  const contentArea = document.getElementById("main-content");
  if (!contentArea) return;

  // Reset window scroll
  window.scrollTo({ top: 0, behavior: "instant" });

  // Update header active links
  document.querySelectorAll(".nav-link").forEach(link => {
    const route = link.dataset.route;
    if (hash === `#${route}` || (route === "/" && (hash === "#/" || hash === ""))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update mobile bottom nav active
  document.querySelectorAll(".mobile-nav-item").forEach(item => {
    const route = item.dataset.route;
    if (route && (hash === `#${route}` || (route === "/" && (hash === "#/" || hash === "")))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Default floating whatsapp
  updateFloatingWhatsAppTarget(null);

  // Route matching
  if (hash === "#/" || hash === "" || hash === "#") {
    contentArea.innerHTML = renderHomePage();
    initHeroSlideshow();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/shop")) {
    contentArea.innerHTML = renderShopPage();
    initShopEvents();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/new-arrivals")) {
    contentArea.innerHTML = renderNewArrivalsPage();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/bridal")) {
    contentArea.innerHTML = renderBridalPage();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/clutches")) {
    contentArea.innerHTML = renderClutchPage();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/handbags")) {
    contentArea.innerHTML = renderHandbagsPage();
    attachGlobalCardEvents();
  } else if (hash.startsWith("#/about")) {
    contentArea.innerHTML = renderAboutPage();
  } else if (hash.startsWith("#/craftsmanship")) {
    contentArea.innerHTML = renderCraftsmanshipPage();
  } else if (hash.startsWith("#/lookbook")) {
    contentArea.innerHTML = renderLookbookPage();
    initLookbookEvents();
  } else if (hash.startsWith("#/contact")) {
    contentArea.innerHTML = renderContactPage();
    initContactEvents();
  } else if (hash.startsWith("#/product/")) {
    const productId = hash.replace("#/product/", "").split("?")[0];
    contentArea.innerHTML = renderProductDetailPage(productId);
    initProductDetailEvents(productId);
    attachGlobalCardEvents();
  } else {
    // Fallback to Home
    window.location.hash = "#/";
  }
}

/**
 * Attach interaction events to all product cards currently in the DOM
 */
export function attachGlobalCardEvents() {
  // Add to Bag buttons
  document.querySelectorAll("[data-bag-id]").forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = btn.dataset.bagId;
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        cart.addItem(product, 1);
      }
    };
  });

  // Quick View buttons
  document.querySelectorAll("[data-quickview-id]").forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = btn.dataset.quickviewId;
      if (id) showQuickViewModal(id);
    };
  });

  // Wishlist toggle buttons
  document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = btn.dataset.wishlistId;
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        wishlist.toggle(product);
        const has = wishlist.has(id);
        btn.classList.toggle("active", has);
      }
    };
  });
}
