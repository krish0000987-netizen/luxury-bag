const STORAGE_KEY = "luxury_bags_jaipur_cart";

class CartStore {
  constructor() {
    this.items = this.load();
    this.isDrawerOpen = false;
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load cart", e);
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
    window.dispatchEvent(new CustomEvent("cart:updated", { detail: { items: this.items } }));
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  addItem(product, quantity = 1) {
    const existingIndex = this.items.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images && product.images.length ? product.images[0] : "/images/products/flagship_front.jpg",
        sku: product.sku || "LB-JPR",
        quantity: quantity
      });
    }
    this.save();
    this.openDrawer();
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeItem(productId);
        return;
      }
      this.save();
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  openDrawer() {
    this.isDrawerOpen = true;
    window.dispatchEvent(new CustomEvent("cart:drawer:open"));
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    window.dispatchEvent(new CustomEvent("cart:drawer:close"));
  }
}

export const cart = new CartStore();
