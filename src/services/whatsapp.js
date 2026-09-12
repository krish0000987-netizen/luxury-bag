import { STORE_DETAILS } from "../data/collections.js";

const PHONE_NUMBER = STORE_DETAILS.phoneRaw; // 91935318835

/**
 * Format currency in Indian Rupees
 */
export function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

/**
 * Build a WhatsApp web/app link from pre-filled message text
 */
export function buildWhatsAppLink(text) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;
}

/**
 * Single product order message generator
 */
export function getProductWhatsAppUrl(product, quantity = 1) {
  const message = `Hello, I would like to order:

Product: ${product.name}
SKU: ${product.sku || "LB-JPR"}
Price: ${formatINR(product.price)}
Quantity: ${quantity}

Please share availability, delivery details and payment options.`;

  return buildWhatsAppLink(message);
}

/**
 * Multi-product Cart order message generator
 */
export function getCartWhatsAppUrl(cartItems, customerDetails = {}) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const itemList = cartItems.map((item, index) => {
    return `${index + 1}. ${item.name} — ${formatINR(item.price)} — Qty ${item.quantity}`;
  }).join("\n");

  const name = customerDetails.name ? customerDetails.name.trim() : "";
  const phone = customerDetails.phone ? customerDetails.phone.trim() : "";
  const address = customerDetails.address ? customerDetails.address.trim() : "";
  const notes = customerDetails.notes ? customerDetails.notes.trim() : "";

  let message = `Hello, I would like to place an order:

${itemList}

Total: ${formatINR(total)}

Customer Name: ${name || "____________________"}
Phone: ${phone || "____________________"}
Delivery Address: ${address || "____________________"}`;

  if (notes) {
    message += `\nSpecial Request: ${notes}`;
  }

  message += `\n\nPlease confirm my order.`;

  return buildWhatsAppLink(message);
}

/**
 * Floating Concierge inquiry message
 */
export function getFloatingConciergeUrl(currentProduct = null) {
  if (currentProduct) {
    const message = `Hello, I'm interested in the ${currentProduct.name} (${formatINR(currentProduct.price)}). Could you please share more details, video preview, and availability?`;
    return buildWhatsAppLink(message);
  }
  
  const message = `Hello, I'm interested in your luxury handbags. Please help me choose a bag.`;
  return buildWhatsAppLink(message);
}

/**
 * Bridal styling appointment inquiry
 */
export function getBridalAppointmentUrl() {
  const message = `Hello, I would like to schedule a Bridal & Wedding Handbag styling consultation with LUXURY BAGS (Near Hawa Mahal, Jaipur). Please share available slots.`;
  return buildWhatsAppLink(message);
}
