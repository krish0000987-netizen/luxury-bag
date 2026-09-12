import { formatINR, getProductWhatsAppUrl } from "../services/whatsapp.js";
import { wishlist } from "../services/wishlist.js";

export function renderProductCard(product) {
  const isWishlisted = wishlist.has(product.id);
  const primaryImg = product.images[0];
  const secondaryImg = product.images.length > 1 ? product.images[1] : primaryImg;

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${product.id}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>

        <a href="#/product/${product.id}">
          <img src="${primaryImg}" alt="${product.name}" class="product-img-primary" loading="lazy" />
          <img src="${secondaryImg}" alt="${product.name} alternate view" class="product-img-secondary" loading="lazy" />
        </a>

        <div class="product-quick-actions">
          <button class="btn-card-quickview" data-quickview-id="${product.id}">
            Quick View
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-meta-sub">${product.material} &bull; ${product.color.split("&")[0].trim()}</span>
        <h3 class="product-title">
          <a href="#/product/${product.id}">${product.name}</a>
        </h3>
        
        <div class="product-price-box">
          <span class="product-price-current">${formatINR(product.price)}</span>
          ${product.comparePrice ? `<span class="product-price-compare">${formatINR(product.comparePrice)}</span>` : ""}
        </div>

        <div class="product-card-buttons">
          <button class="btn-card-bag" data-bag-id="${product.id}">
            Add to Bag
          </button>
          <a href="${getProductWhatsAppUrl(product)}" target="_blank" rel="noopener" class="btn-card-whatsapp">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
            Order
          </a>
        </div>
      </div>
    </div>
  `;
}
