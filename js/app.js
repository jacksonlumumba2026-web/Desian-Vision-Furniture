// DVF App.js - Shared functionality for all pages

// ===== ADMIN DATA MERGE =====
// Merges admin-added products and price overrides into PRODUCTS at runtime
(function mergeAdminData() {
  if (typeof PRODUCTS === 'undefined') return;
  try {
    const overrides = JSON.parse(localStorage.getItem('dvf_price_overrides') || '{}');
    PRODUCTS.forEach(p => {
      const o = overrides[p.id];
      if (!o) return;
      if (o.price !== undefined)  p.price    = o.price;
      if (o.oldPrice !== undefined) p.oldPrice = o.oldPrice;
      if (o.name)    p.name  = o.name;
      if (o.desc)    p.desc  = o.desc;
      if (o.badge !== undefined) p.badge = o.badge;
    });
    const customs = JSON.parse(localStorage.getItem('dvf_admin_products') || '[]');
    // New admin products appear first
    customs.slice().reverse().forEach(p => { if (!PRODUCTS.find(x => x.id === p.id)) PRODUCTS.unshift(p); });
  } catch(e) {}
})();

// Resolve image src: checks localStorage for admin-uploaded base64 image first
function resolveImg(filename) {
  if (!filename) return 'sofa.jpg';
  if (filename.startsWith('data:')) return filename;
  return localStorage.getItem('dvf_img_' + filename) || filename;
}

// ===== CART SYSTEM =====
function getCart() { return JSON.parse(localStorage.getItem('dvf_cart') || '[]'); }
function saveCart(c) { localStorage.setItem('dvf_cart', JSON.stringify(c)); updateAllBadges(); }

function addToCart(id, qty = 1) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const ex = cart.find(x => x.id === id);
  if (ex) { ex.qty += qty; } else { cart.push({id, qty}); }
  saveCart(cart);
  renderCartSidebar();
  showToast(`${p.name} added to cart`, 'success');
}

function removeFromCart(id) {
  saveCart(getCart().filter(x => x.id !== id));
  renderCartSidebar();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (!item) return;
  if (qty <= 0) { removeFromCart(id); return; }
  item.qty = qty;
  saveCart(cart);
  renderCartSidebar();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function clearCart() { localStorage.removeItem('dvf_cart'); updateAllBadges(); renderCartSidebar(); }

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }

function renderCartSidebar() {
  const items = document.getElementById('cartItems');
  const badge = document.getElementById('cartBadge');
  const totalEl = document.getElementById('cartTotal');
  const cart = getCart();
  const count = getCartCount();
  if (badge) { badge.textContent = count; badge.classList.toggle('hidden', count === 0); }
  if (!items) return;
  if (cart.length === 0) {
    items.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><a href="shop.html" class="btn btn-primary btn-sm" style="margin-top:1rem">Browse Products</a></div>`;
    if (totalEl) totalEl.textContent = 'KSh 0';
    return;
  }
  items.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const price = p.price > 0 ? fmt(p.price) : 'Call for Price';
    return `<div class="cart-item">
      <img src="${resolveImg(p.imgs[0])}" alt="${p.name}" class="cart-item-img" onerror="this.src='sofa.jpg'">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${price}</div>
        <div class="cart-qty">
          <button onclick="updateQty(${p.id}, ${item.qty - 1})">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${p.id}, ${item.qty + 1})">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${p.id})" title="Remove">×</button>
    </div>`;
  }).join('');
  if (totalEl) totalEl.textContent = fmt(getCartTotal());
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

function cartCheckout() {
  const cart = getCart();
  if (cart.length === 0) { showToast('Your cart is empty', 'error'); return; }
  let msg = 'Hello DVF! 🛒 *My Order*\n\n';
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (p) msg += `• ${item.qty}x ${p.name} — ${p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Custom Price'}\n`;
  });
  const total = getCartTotal();
  if (total > 0) msg += `\n*Total: KSh ${total.toLocaleString()}*`;
  msg += '\n\nPlease confirm availability and delivery. Thank you!';
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== WISHLIST SYSTEM =====
function getWishlist() { return JSON.parse(localStorage.getItem('dvf_wish') || '[]'); }
function saveWishlist(w) { localStorage.setItem('dvf_wish', JSON.stringify(w)); updateWishBadge(); }

function toggleWishlist(id) {
  const wish = getWishlist();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const idx = wish.indexOf(id);
  if (idx >= 0) {
    wish.splice(idx, 1);
    showToast(`${p.name} removed from wishlist`, 'info');
  } else {
    wish.push(id);
    showToast(`${p.name} added to wishlist ♥`, 'success');
  }
  saveWishlist(wish);
  renderWishlistSidebar();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', wish.includes(id));
  });
}

function isWishlisted(id) { return getWishlist().includes(id); }

function renderWishlistSidebar() {
  const items = document.getElementById('wishItems');
  const badge = document.getElementById('wishBadge');
  const wish = getWishlist();
  if (badge) { badge.textContent = wish.length; badge.classList.toggle('hidden', wish.length === 0); }
  if (!items) return;
  if (wish.length === 0) {
    items.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">♡</div><p>Your wishlist is empty</p></div>`;
    return;
  }
  items.innerHTML = wish.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `<div class="wish-item">
      <img src="${resolveImg(p.imgs[0])}" alt="${p.name}" class="wish-item-img" onerror="this.src='sofa.jpg'">
      <div class="wish-item-info">
        <div class="wish-item-name">${p.name}</div>
        <div class="wish-item-price">${p.price > 0 ? fmt(p.price) : 'Call for Price'}</div>
        <button class="btn btn-primary btn-sm" style="margin-top:0.5rem" onclick="addToCart(${p.id});closeWishlist();">Add to Cart</button>
      </div>
      <button class="wish-remove" onclick="toggleWishlist(${p.id})" title="Remove">×</button>
    </div>`;
  }).join('');
}

function openWishlist() {
  document.getElementById('wishSidebar')?.classList.add('open');
  document.getElementById('wishOverlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeWishlist() {
  document.getElementById('wishSidebar')?.classList.remove('open');
  document.getElementById('wishOverlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

// ===== UTILITIES =====
function fmt(price) {
  if (!price || price === 0) return 'Call for Price';
  return 'KSh ' + price.toLocaleString();
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function updateAllBadges() {
  const count = getCartCount();
  document.querySelectorAll('#cartBadge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
  });
  updateWishBadge();
}

function updateWishBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('#wishBadge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
  });
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span><span class="toast-msg">${message}</span><button class="toast-close" onclick="this.parentElement.remove()">×</button>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; toast.style.transition = '0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== SEARCH =====
function openSearch() {
  document.getElementById('searchOverlay')?.classList.add('open');
  document.getElementById('searchInput')?.focus();
  document.body.style.overflow = 'hidden';
}

function closeSearch() {
  document.getElementById('searchOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function doSearch(query) {
  const res = document.getElementById('searchResults');
  if (!res) return;
  if (!query.trim()) { res.innerHTML = ''; return; }
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.cat.toLowerCase().includes(query.toLowerCase()) ||
    p.desc.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);
  if (matches.length === 0) {
    res.innerHTML = `<div class="search-empty">No results for "${query}"</div>`;
    return;
  }
  res.innerHTML = matches.map(p => `
    <a href="product.html?id=${p.id}" class="search-result-item" onclick="closeSearch()">
      <img src="${resolveImg(p.imgs[0])}" alt="${p.name}" class="search-result-img" onerror="this.src='sofa.jpg'">
      <div>
        <div class="search-result-name">${p.name}</div>
        <div class="search-result-price">${p.price > 0 ? fmt(p.price) : 'Call for Price'}</div>
      </div>
    </a>`).join('');
}

// ===== PRODUCT CARD RENDERER =====
function badgeClass(badge) {
  if (!badge) return '';
  const b = badge.toLowerCase();
  if (b.includes('special') || b.includes('today')) return 'badge-special';
  if (b.includes('hot'))    return 'badge-hot';
  if (b.includes('sale'))   return 'badge-sale';
  if (b.includes('flash'))  return 'badge-flash';
  if (b.includes('new'))    return 'badge-new';
  if (b.includes('best') || b.includes('seller')) return 'badge-seller';
  if (b.includes('limited'))return 'badge-limited';
  if (b.includes('weekend'))return 'badge-weekend';
  if (b.includes('offer'))  return 'badge-offer';
  if (b.includes('custom')) return 'badge-made';
  return 'badge-new';
}

function renderProductCard(p) {
  const badgeHtml = p.badge ? `<span class="prod-badge ${badgeClass(p.badge)}">${p.badge}</span>` : '';
  const priceHtml = p.price > 0
    ? `<span class="prod-price">${fmt(p.price)}</span>${p.oldPrice > 0 ? `<span class="prod-old-price">${fmt(p.oldPrice)}</span>` : ''}`
    : `<span class="prod-price-custom">Call for Price</span>`;
  const wished = isWishlisted(p.id);
  return `<div class="prod-card reveal">
    <div class="prod-img-wrap">
      ${badgeHtml}
      <button class="prod-wish ${wished ? 'active' : ''}" data-wish="${p.id}" onclick="toggleWishlist(${p.id})" aria-label="Wishlist">♥</button>
      <a href="product.html?id=${p.id}"><img src="${resolveImg(p.imgs[0])}" alt="${p.name}" loading="lazy" onerror="this.src='sofa.jpg'"></a>
    </div>
    <div class="prod-body">
      <div class="prod-name">${p.name}</div>
      <div class="prod-meta">
        <span class="prod-stars">${renderStars(p.rating)}</span>
        <span class="prod-reviews">(${p.reviews})</span>
      </div>
      <div class="prod-pricing">${priceHtml}</div>
      <div class="prod-actions">
        <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
        <a href="product.html?id=${p.id}" class="btn btn-outline">View</a>
        <button class="btn btn-wa btn-icon" onclick="orderViaWA(${p.id})" title="WhatsApp Order">💬</button>
      </div>
    </div>
  </div>`;
}

function orderViaWA(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = `Hello DVF! 🛒\n\nI'm interested in:\n*${p.name}*\n${p.price > 0 ? 'Price: KSh ' + p.price.toLocaleString() : 'Please quote price'}\n\nPlease confirm availability and delivery. Thank you!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== HERO SLIDER =====
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0;
  let timer;
  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
  function startTimer() { clearInterval(timer); timer = setInterval(next, 5000); }
  document.querySelector('.hero-next')?.addEventListener('click', () => { next(); startTimer(); });
  document.querySelector('.hero-prev')?.addEventListener('click', () => { prev(); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));
  startTimer();
}

// ===== NAV SCROLL EFFECT =====
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const ham = document.getElementById('ham');
  const drawer = document.getElementById('mobDrawer');
  const overlay = document.getElementById('mobOverlay');
  const closeBtn = document.getElementById('drawerClose');
  function open() { drawer?.classList.add('open'); overlay?.classList.add('show'); document.body.style.overflow = 'hidden'; }
  function close() { drawer?.classList.remove('open'); overlay?.classList.remove('show'); document.body.style.overflow = ''; }
  ham?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}

// ===== REVEAL ANIMATIONS =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => obs.observe(el));
}

// ===== SEARCH OVERLAY INIT =====
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const closeBtn = document.getElementById('searchClose');
  input?.addEventListener('input', e => doSearch(e.target.value));
  closeBtn?.addEventListener('click', closeSearch);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeCart(); closeWishlist(); } });
}

// ===== CART SIDEBAR INIT =====
function initCartSidebar() {
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  document.getElementById('wishOverlay')?.addEventListener('click', closeWishlist);
  document.getElementById('wishCloseBtn')?.addEventListener('click', closeWishlist);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateAllBadges();
  renderCartSidebar();
  renderWishlistSidebar();
  initNavScroll();
  initMobileNav();
  initSearch();
  initCartSidebar();
  initHeroSlider();
  initReveal();

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
