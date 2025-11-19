// src/utils/localCart.js
// simple helper for guest cart stored in localStorage

const KEY = "orderItems";

export function getLocalCart() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error("getLocalCart parse error", e);
    return null;
  }
}

export function setLocalCart(cart) {
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("setLocalCart error", e);
  }
}

export function clearLocalCart() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    console.error("clearLocalCart error", e);
  }
}

// add an item (merge if same product+color+size)
export function addToLocalCart(item) {
  // item: { productId, quantity, color, size, productSnapshot? }
  const cart = getLocalCart() || { cartItems: [], totalPrice: 0 };
  const idx = cart.cartItems.findIndex(
    (it) =>
      it.productId === item.productId &&
      it.color === item.color &&
      it.size === item.size
  );

  if (idx > -1) {
    cart.cartItems[idx].quantity += item.quantity;
  } else {
    cart.cartItems.push(item);
  }

  // allow caller to set price snapshot on item.productSnapshot.price
  cart.totalPrice = cart.cartItems.reduce((sum, it) => {
    const price = (it.productSnapshot && it.productSnapshot.price) || 0;
    return sum + price * it.quantity;
  }, 0);

  setLocalCart(cart);
  return cart;
}
