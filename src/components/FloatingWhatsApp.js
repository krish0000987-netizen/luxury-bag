import { getFloatingConciergeUrl } from "../services/whatsapp.js";

export function renderFloatingWhatsApp() {
  return `
    <a href="${getFloatingConciergeUrl()}" id="floating-whatsapp-btn" target="_blank" rel="noopener" class="floating-whatsapp" aria-label="Chat on WhatsApp">
      <div class="floating-whatsapp-pulse"></div>
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.775.978-.95 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.498-1.783-1.674-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.676-1.63-.926-2.23c-.244-.583-.492-.504-.676-.513l-.576-.01c-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.898 1.225 3.1.15.2 2.115 3.23 5.125 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/></svg>
      <span>Jaipur Concierge</span>
    </a>
  `;
}

export function updateFloatingWhatsAppTarget(currentProduct = null) {
  const btn = document.getElementById("floating-whatsapp-btn");
  if (btn) {
    btn.href = getFloatingConciergeUrl(currentProduct);
  }
}
