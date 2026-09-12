import { PRODUCTS } from "../data/products.js";
import { formatINR } from "../services/whatsapp.js";

export function showSearchModal() {
  const existing = document.getElementById("search-modal-backdrop");
  if (existing) existing.remove();

  const modalHtml = `
    <div class="modal-backdrop open" id="search-modal-backdrop">
      <div class="modal-container" style="max-width:700px; padding:2.5rem 2rem;">
        <button class="modal-close-btn" id="search-close-btn">&times;</button>
        
        <div class="eyebrow-tag">Royal Atelier Search</div>
        <h3 style="font-family:var(--font-serif); font-size:2rem; margin-bottom:1.5rem;">Find Your Luxury Handbag</h3>

        <div style="position:relative; margin-bottom:1.5rem;">
          <input type="text" id="site-search-input" placeholder="Search by name, pearl, kundan, bridal, clutch..." 
                 style="width:100%; padding:1rem 1.25rem; font-size:1.1rem; border:1px solid var(--color-gold); background:#FFF; font-family:var(--font-sans);" autofocus />
        </div>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:2rem;">
          <span style="font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--color-text-muted); align-self:center;">Trending:</span>
          <button class="search-tag-btn" data-query="Bridal" style="border:1px solid var(--color-gold-border); padding:0.35rem 0.75rem; font-size:0.75rem; background:#FFF; cursor:pointer;">Bridal</button>
          <button class="search-tag-btn" data-query="Pearl" style="border:1px solid var(--color-gold-border); padding:0.35rem 0.75rem; font-size:0.75rem; background:#FFF; cursor:pointer;">Pearl Clutches</button>
          <button class="search-tag-btn" data-query="Kundan" style="border:1px solid var(--color-gold-border); padding:0.35rem 0.75rem; font-size:0.75rem; background:#FFF; cursor:pointer;">Kundan Work</button>
          <button class="search-tag-btn" data-query="Potli" style="border:1px solid var(--color-gold-border); padding:0.35rem 0.75rem; font-size:0.75rem; background:#FFF; cursor:pointer;">Royal Potli</button>
        </div>

        <div id="search-results-list" style="max-height:360px; overflow-y:auto; display:flex; flex-direction:column; gap:1rem;">
          <!-- Results injected here -->
        </div>
      </div>
    </div>
  `;

  const div = document.createElement("div");
  div.id = "search-wrapper";
  div.innerHTML = modalHtml;
  document.body.appendChild(div);

  const backdrop = document.getElementById("search-modal-backdrop");
  const closeBtn = document.getElementById("search-close-btn");
  const input = document.getElementById("site-search-input");
  const resultsContainer = document.getElementById("search-results-list");

  const close = () => div.remove();
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });

  const performSearch = (q) => {
    const query = q.toLowerCase().trim();
    if (!query) {
      resultsContainer.innerHTML = `<p style="font-size:0.85rem; color:var(--color-text-muted); text-align:center;">Type above to discover our collection.</p>`;
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.material.toLowerCase().includes(query) ||
      p.color.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.occasion.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="font-size:0.9rem; color:var(--color-text-secondary); text-align:center; padding:2rem 0;">No handbags match "${query}". Try searching for 'pearl', 'clutch', or 'gold'.</p>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <div style="display:flex; align-items:center; gap:1rem; padding:0.75rem; border-bottom:1px solid var(--color-gold-border-subtle); background:#FFF;">
        <img src="${p.images[0]}" alt="${p.name}" style="width:60px; height:60px; object-fit:cover; border:1px solid var(--color-gold-border-subtle);" />
        <div style="flex-grow:1;">
          <a href="#/product/${p.id}" class="search-result-link" style="font-family:var(--font-serif); font-size:1.1rem; font-weight:500;">${p.name}</a>
          <div style="font-size:0.75rem; color:var(--color-gold-deep);">${p.material} &bull; ${p.occasion}</div>
        </div>
        <div style="font-family:var(--font-sans); font-weight:600; font-size:0.95rem;">${formatINR(p.price)}</div>
      </div>
    `).join("");

    resultsContainer.querySelectorAll(".search-result-link").forEach(link => {
      link.addEventListener("click", close);
    });
  };

  input?.addEventListener("input", (e) => performSearch(e.target.value));
  div.querySelectorAll(".search-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (input) {
        input.value = btn.dataset.query;
        performSearch(btn.dataset.query);
      }
    });
  });

  input?.focus();
}
