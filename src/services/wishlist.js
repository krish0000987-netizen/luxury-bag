const STORAGE_KEY = "luxury_bags_jaipur_wishlist";

class WishlistStore {
  constructor() {
    this.items = this.load();
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {}
    window.dispatchEvent(new CustomEvent("wishlist:updated", { detail: { items: this.items } }));
  }

  has(productId) {
    return this.items.some(item => item.id === productId);
  }

  toggle(product) {
    if (this.has(product.id)) {
      this.items = this.items.filter(item => item.id !== product.id);
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
    }
    this.save();
  }

  getCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }
}

export const wishlist = new WishlistStore();
