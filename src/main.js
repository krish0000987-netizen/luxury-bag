import './style.css';
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer, initCartDrawerEvents } from './components/CartDrawer.js';
import { renderFloatingWhatsApp } from './components/FloatingWhatsApp.js';
import { renderMobileBottomNav, initMobileNavEvents } from './components/MobileBottomNav.js';
import { showSearchModal } from './components/SearchModal.js';
import { showWishlistModal } from './components/WishlistModal.js';
import { handleRoute } from './router.js';

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderHeader()}
    <div id="main-content"></div>
    ${renderFooter()}
    ${renderCartDrawer()}
    ${renderFloatingWhatsApp()}
    ${renderMobileBottomNav()}
  `;

  // Initialize global component behaviors
  initHeaderEvents();
  initCartDrawerEvents();
  initMobileNavEvents();

  // Search & Wishlist modal triggers
  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    showSearchModal();
  });

  document.getElementById('header-wishlist-btn')?.addEventListener('click', () => {
    showWishlistModal();
  });

  // Handle routing
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
