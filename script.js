/* ============================================================
   BLOSS FOODS — MASTER SCRIPT ENGINE (v4, local storage only)
   Everything (cart, stock, favorites, reviews) is saved in this
   browser's local storage. PRODUCTS below is the single source
   of truth for names/prices/categories — edit it here to update
   the shop everywhere.
   Note: local storage is per-browser/device, so it won't sync
   between a phone and a laptop, or between staff members.
   ============================================================ */

const PRODUCTS = [
    {
        id: 'rice',
        name: 'Rice',
        category: 'Grains & Staples',
        price: 1900,
        stock: 100
    },
    {
        id: 'beans_honey',
        name: 'Honey Beans',
        category: 'Grains & Staples',
        price: 2400,
        stock: 50
    },
    {
        id: 'beans_drum',
        name: 'Drum Beans',
        category: 'Grains & Staples',
        price: 1800,
        stock: 50
    },
    {
        id: 'garri',
        name: 'Garri',
        category: 'Grains & Staples',
        price: 500,
        stock: 60
    },
    {
        id: 'semovita',
        name: 'Semo',
        category: 'Grains & Staples',
        price: 1800,
        stock: 50
    },
    {
        id: 'elubo_white',
        name: 'Elubo (White, Packed)',
        category: 'Grains & Staples',
        price: 900,
        stock: 30
    },
    {
        id: 'elubo_black',
        name: 'Elubo (Black, Packed)',
        category: 'Grains & Staples',
        price: 2300,
        stock: 30
    },
    {
        id: 'p_oil',
        name: 'Palm Oil (Full)',
        category: 'Oils & Proteins',
        price: 1800,
        stock: 50
    },
    {
        id: 'groundnut_oil',
        name: 'Groundnut Oil',
        category: 'Oils & Proteins',
        price: 2200,
        stock: 40
    },
    {
        id: 'egusi',
        name: 'Egusi (Grinded Melon, 1 Cup)',
        category: 'Oils & Proteins',
        price: 500,
        stock: 80
    },
    {
        id: 'eggs',
        name: 'Eggs',
        category: 'Oils & Proteins',
        price: 250,
        stock: 60
    },
    {
        id: 'spaghetti',
        name: 'Spaghetti',
        category: 'Noodles & Pasta',
        stock: 70,
        variants: [
            {
                label: 'Small',
                price: 1000
            },
            {
                label: 'Medium',
                price: 1100
            },
            {
                label: 'Large',
                price: 1800
            }
        ]
    },
    {
        id: 'n_single',
        name: 'Noodles',
        category: 'Noodles & Pasta',
        stock: 200,
        variants: [
            { label: 'Single', price: 250 },
            { label: 'Carton', price: 10000 }
        ]
    },
    {
        id: 'macaroni',
        name: 'Macaroni',
        category: 'Noodles & Pasta',
        price: 1000,
        stock: 50
    },
    {
        id: 'sugar',
        name: 'Dangote Sugar',
        category: 'Beverages & Cereals',
        stock: 60,
        variants: [
            {
                label: 'Sachet',
                price: 600
            },
            {
                label: 'Per Piece',
                price: 50
            }
        ]
    },
    {
        id: 'milo_roll',
        name: 'Milo (Roll)',
        category: 'Beverages & Cereals',
        price: 2000,
        stock: 30
    },
    {
        id: 'dano_roll',
        name: 'Milk Roll',
        category: 'Beverages & Cereals',
        price: 1400,
        stock: 30
    },
    {
        id: 'custard_ord',
        name: 'Custard',
        category: 'Beverages & Cereals',
        price: 250,
        stock: 40
    },
    {
        id: 'cornflakes',
        name: 'Cornflakes',
        category: 'Beverages & Cereals',
        price: 250,
        stock: 20
    },
    {
        id: 'golden_morn',
        name: 'Golden Morn',
        category: 'Beverages & Cereals',
        price: 300,
        stock: 40
    },
    {
        id: 'coco_pops',
        name: 'Coco Pops',
        category: 'Beverages & Cereals',
        price: 250,
        stock: 20
    },
    {
        id: 'hot_pepper',
        name: 'Hot Pepper (Roll)',
        category: 'Seasoning & Spices',
        price: 1000,
        stock: 30
    },
    {
        id: 'curry_thyme',
        name: 'Curry & Thyme (Roll)',
        category: 'Seasoning & Spices',
        price: 800,
        stock: 30
    },
    {
        id: 'gino_paste',
        name: 'Gino Paste',
        category: 'Seasoning & Spices',
        price: 250,
        stock: 40
    },
    {
        id: 'party_jollof',
        name: 'Party Jollof',
        category: 'Seasoning & Spices',
        price: 250,
        stock: 40
    },
    {
        id: 'sonia_tomato',
        name: 'Sonia Tomato',
        category: 'Seasoning & Spices',
        price: 200,
        stock: 40
    },
    {
        id: 'maggi',
        name: 'Maggi',
        category: 'Seasoning & Spices',
        price: 50,
        stock: 150
    },
    {
        id: 'chicken_flavour',
        name: 'Chicken Flavour (25 Cubes)',
        category: 'Seasoning & Spices',
        price: 450,
        stock: 30
    },
    {
        id: 'gino_max',
        name: 'Gino Max (25 Cubes)',
        category: 'Seasoning & Spices',
        price: 400,
        stock: 30
    },
    {
        id: 'dangote_salt',
        name: 'Dangote Salt',
        category: 'Seasoning & Spices',
        price: 450,
        stock: 50
    },
    {
        id: 'tomato',
        name: 'Tomato Paste',
        category: 'Seasoning & Spices',
        price: 200,
        stock: 100
    },
    {
        id: 'salt',
        name: 'Salt',
        category: 'Seasoning & Spices',
        price: 200,
        stock: 100
    },
    {
        id: 'pepper',
        name: 'Pepper',
        category: 'Seasoning & Spices',
        price: 200,
        stock: 100
    },
    {
        id: 'viva',
        name: 'Viva Detergent',
        category: 'Household & Fresh',
        price: 600,
        stock: 30
    },
    {
        id: 'checkers_peanut',
        name: 'Checkers Peanut',
        category: 'Snacks & Extras',
        price: 150,
        stock: 50
    },
    {
        id: 'groundnut',
        name: 'Groundnut',
        category: 'Snacks & Extras',
        price: 50,
        stock: 80
    },
    {
        id: 'biscuits',
        name: 'Biscuits / Cookies',
        category: 'Snacks & Extras',
        stock: 30,
        variants: [
            { label: 'Small', price: 600 },
            { label: 'Medium', price: 1500 },
            { label: 'Big', price: 3500 }
        ]
    },
    {
        id: 'caprisonne',
        name: 'Caprisonne',
        category: 'Snacks & Extras',
        price: 400,
        stock: 40
    },
    {
        id: 'bobo',
        name: 'Bobo',
        category: 'Snacks & Extras',
        price: 350,
        stock: 40
    },
    {
        id: 'fanta',
        name: 'Fanta',
        category: 'Snacks & Extras',
        price: 400,
        stock: 50
    },
    {
        id: 'pepsi',
        name: 'Pepsi',
        category: 'Snacks & Extras',
        price: 400,
        stock: 50
    }
];

const PRODUCT_MAP = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));

// ============ STUDENT PACKAGES (bundle deals) ============
// Each tier keeps the same base items and adds more on top — not cumulative multiples.
const BUNDLES = [
    {
        id: 'pkg_5k',
        name: '5K Student Package',
        price: 5000,
        contents: [
            { id: 'rice', qty: 1 },
            { id: 'garri', qty: 1 },
            { id: 'groundnut_oil', qty: 1 },
            { id: 'tomato', qty: 1 },
            { id: 'biscuits', qty: 1, variant: 'Small' }
        ]
    },
    {
        id: 'pkg_10k',
        name: '10K Student Package',
        price: 10000,
        contents: [
            { id: 'rice', qty: 2 },
            { id: 'garri', qty: 2 },
            { id: 'groundnut_oil', qty: 2 },
            { id: 'tomato', qty: 2 },
            { id: 'biscuits', qty: 2, variant: 'Small' },
            { id: 'salt', qty: 1 },
            { id: 'pepper', qty: 1 },
            { id: 'sugar', qty: 1, variant: 'Per Piece' },
            { id: 'groundnut', qty: 1 }
        ]
    },
    {
        id: 'pkg_20k',
        name: '20K Student Package',
        price: 20000,
        contents: [
            { id: 'rice', qty: 4 },
            { id: 'garri', qty: 4 },
            { id: 'groundnut_oil', qty: 4 },
            { id: 'tomato', qty: 4 },
            { id: 'biscuits', qty: 4, variant: 'Small' },
            { id: 'salt', qty: 2 },
            { id: 'pepper', qty: 2 },
            { id: 'sugar', qty: 2, variant: 'Per Piece' },
            { id: 'groundnut', qty: 2 },
            { id: 'n_single', qty: 10, variant: 'Single' },
            { id: 'spaghetti', qty: 2, variant: 'Small' },
            { id: 'macaroni', qty: 1 },
            { id: 'maggi', qty: 1 },
            { id: 'gino_paste', qty: 1 }
        ]
    }
];

function describeBundleContents(bundle) {
    return bundle.contents.map(c => {
        const p = PRODUCT_MAP[c.id];
        const name = p ? p.name : c.id;
        const variantTxt = c.variant ? ` (${c.variant})` : '';
        return `${c.qty}x ${name}${variantTxt}`;
    }).join(', ');
}

function bundleInStock(bundle) {
    return bundle.contents.every(c => (inventory[c.id] ?? 0) >= c.qty);
}


// ============ STATE ============
let cart = JSON.parse(localStorage.getItem('bloss_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('bloss_favorites')) || [];

let inventory = JSON.parse(localStorage.getItem('bloss_inventory')) || {};
// Merge in any product not yet in saved inventory (new products get their
// default stock; existing products keep whatever stock level was saved).
PRODUCTS.forEach(p => {
    if (inventory[p.id] === undefined) inventory[p.id] = p.stock;
});
localStorage.setItem('bloss_inventory', JSON.stringify(inventory));

// ============ UI CONTROLS ============
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function toggleChat() {
    const c = document.getElementById('ai-chat');
    if (c) c.style.display = (c.style.display === 'block') ? 'none' : 'block';
}

function toggleFavorite(productId) {
    const idx = favorites.indexOf(productId);
    if (idx >= 0) favorites.splice(idx, 1);
    else favorites.push(productId);
    localStorage.setItem('bloss_favorites', JSON.stringify(favorites));
    renderShop(window.currentCategory, window.currentSearch);
}

function changeQty(productId, delta) {
    const input = document.getElementById(`qty-${productId}`);
    if (!input) return;
    let val = (parseInt(input.value) || 1) + delta;
    const stock = inventory[productId] ?? 0;
    if (val < 1) val = 1;
    if (stock > 0 && val > stock) val = stock;
    input.value = val;
}

// Lightweight toast notification (replaces jarring browser alert() popups)
function showToast(message, type) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast-msg${type === 'error' ? ' toast-error' : ''}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

// ============ RENDER PRODUCT GRID (shop.html) ============
function renderShop(filterCategory, searchTerm) {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // not on the shop page

    if (filterCategory === 'Student Packages') {
        renderBundles(grid);
        return;
    }

    const term = (searchTerm || '').toLowerCase();
    const visible = PRODUCTS.filter(p => {
        let matchesCategory;
        if (!filterCategory || filterCategory === 'All') matchesCategory = true;
        else if (filterCategory === 'Favorites') matchesCategory = favorites.includes(p.id);
        else matchesCategory = p.category === filterCategory;
        const matchesSearch = !term || p.name.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
    });

    if (visible.length === 0) {
        const emptyMsg = filterCategory === 'Favorites'
            ? "No favorites yet — tap the ♡ on any product to save it here."
            : "No products match your search.";
        grid.innerHTML = `<p style="opacity:0.6; padding:20px;">${emptyMsg}</p>`;
        return;
    }

    grid.innerHTML = visible.map(p => {
        const stock = inventory[p.id] ?? 0;
        const disabled = stock <= 0;
        const isFav = favorites.includes(p.id);
        let priceHTML, controlHTML;

        if (p.variants) {
            const lo = Math.min(...p.variants.map(v => v.price));
            const hi = Math.max(...p.variants.map(v => v.price));
            priceHTML = `₦${lo.toLocaleString()} - ₦${hi.toLocaleString()}`;
            controlHTML = `
                <select id="unit-${p.id}" class="qty-input">
                    ${p.variants.map(v => `<option value="${v.price}" data-label="${v.label}">${v.label} - ₦${v.price.toLocaleString()}</option>`).join('')}
                </select>`;
        } else {
            priceHTML = `₦${p.price.toLocaleString()}`;
            controlHTML = '';
        }

        return `
            <div class="card ${disabled ? 'out-of-stock' : ''}">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${p.id}')" aria-label="Save to favorites">${isFav ? '♥' : '♡'}</button>
                <span class="category-tag">${p.category}</span>
                <h3>${p.name}</h3>
                <p class="price-tag">${priceHTML}</p>
                <p style="font-size:0.8rem;">Available: <span id="stock-${p.id}">${stock}</span></p>
                ${controlHTML}
                <div class="qty-stepper">
                    <button onclick="changeQty('${p.id}', -1)" ${disabled ? 'disabled' : ''}>&minus;</button>
                    <input type="number" id="qty-${p.id}" value="1" min="1" class="qty-input" ${disabled ? 'disabled' : ''}>
                    <button onclick="changeQty('${p.id}', 1)" ${disabled ? 'disabled' : ''}>+</button>
                </div>
                <div id="btn-${p.id}">
                    ${disabled
                        ? `<button class="add-btn out-of-stock-btn" disabled>STOCK FINISHED</button>`
                        : `<button class="add-btn" onclick="addToCart('${p.id}')">Add to Cart</button>`}
                </div>
            </div>`;
    }).join('');
}

function renderBundles(grid) {
    grid.innerHTML = BUNDLES.map(b => {
        const canAdd = bundleInStock(b);
        return `
            <div class="card ${canAdd ? '' : 'out-of-stock'}" style="text-align:left;">
                <span class="category-tag">STUDENT PACKAGE</span>
                <h3>${b.name}</h3>
                <p class="price-tag">₦${b.price.toLocaleString()}</p>
                <p style="font-size:0.8rem; opacity:0.8; margin-bottom:15px;">Includes: ${describeBundleContents(b)}</p>
                ${canAdd
                    ? `<button class="add-btn" onclick="addBundleToCart('${b.id}')">Add Package to Cart</button>`
                    : `<button class="add-btn out-of-stock-btn" disabled>ITEM OUT OF STOCK</button>`}
            </div>`;
    }).join('');
}

// ============ CART CORE LOGIC ============
function addToCart(productId) {
    const product = PRODUCT_MAP[productId];
    if (!product) return;

    const qtyInput = document.getElementById(`qty-${productId}`);
    if (!qtyInput) return;
    const qty = parseInt(qtyInput.value) || 1;

    let price = product.price;
    let label = product.name;

    if (product.variants) {
        const sel = document.getElementById(`unit-${productId}`);
        price = parseInt(sel.value);
        const variantLabel = sel.options[sel.selectedIndex].dataset.label;
        label = `${product.name} (${variantLabel})`;
    }

    const stock = inventory[productId] ?? 0;
    if (stock < qty) {
        showToast(`Insufficient stock! Only ${stock} left.`, 'error');
        return;
    }

    inventory[productId] -= qty;
    cart.push({ id: Date.now(), productId, name: label, price, qty, total: price * qty });
    showToast(`Added ${qty} × ${label} to basket`);
    saveData();
}

function addBundleToCart(bundleId) {
    const bundle = BUNDLES.find(b => b.id === bundleId);
    if (!bundle) return;

    if (!bundleInStock(bundle)) {
        showToast('One or more items in this package are out of stock.', 'error');
        return;
    }

    bundle.contents.forEach(c => { inventory[c.id] -= c.qty; });

    cart.push({
        id: Date.now(),
        productId: bundle.id,
        name: bundle.name,
        price: bundle.price,
        qty: 1,
        total: bundle.price,
        bundleContents: bundle.contents
    });

    showToast(`Added ${bundle.name} to basket`);
    saveData();
}

function removeItem(index) {
    const item = cart[index];
    if (item) {
        if (item.bundleContents) {
            item.bundleContents.forEach(c => {
                if (inventory[c.id] !== undefined) inventory[c.id] += c.qty;
            });
        } else if (inventory[item.productId] !== undefined) {
            inventory[item.productId] += item.qty;
        }
    }
    cart.splice(index, 1);
    saveData();
}

function saveData() {
    localStorage.setItem('bloss_cart', JSON.stringify(cart));
    localStorage.setItem('bloss_inventory', JSON.stringify(inventory));
    updateUI();
}

// ============ UI UPDATE ENGINE ============
function updateUI() {
    const cont = document.getElementById('side-cart-items');
    const totS = document.getElementById('side-total');
    const countS = document.getElementById('cart-count');
    let total = 0;

    if (cont) {
        cont.innerHTML = cart.length === 0 ? `<p style="opacity:0.5; text-align:center;">Empty Basket</p>` :
        cart.map((item, idx) => {
            total += item.total;
            return `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #222; padding-bottom:5px;">
                    <span style="font-size:0.85rem;">${item.qty}x ${item.name}</span>
                    <button onclick="removeItem(${idx})" style="color:#ff4444; background:none; border:none; cursor:pointer; font-weight:bold; font-size:1.2rem;">&times;</button>
                </div>`;
        }).join('');
        if (totS) totS.innerText = total.toLocaleString();
        if (countS) countS.innerText = cart.length;
    }

    // Re-render the shop grid so stock counts / out-of-stock buttons stay in sync
    if (document.getElementById('product-grid')) {
        renderShop(window.currentCategory, window.currentSearch);
    }
}

// ============ ADMIN / STAFF INVENTORY PANEL ============
function openAdmin() {
    if (prompt("Staff Key:") === "Bloss2026") {
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('admin-list').innerHTML = PRODUCTS.map(p => `
            <div class="card"><h4>${p.name}</h4><input type="number" id="adm-${p.id}" value="${inventory[p.id]}" class="qty-input"></div>
        `).join('');
    }
}

function saveInv() {
    PRODUCTS.forEach(p => {
        const input = document.getElementById(`adm-${p.id}`);
        if (input) inventory[p.id] = parseInt(input.value) || 0;
    });
    localStorage.setItem('bloss_inventory', JSON.stringify(inventory));
    showToast('Inventory updated on this device.');
    renderShop(window.currentCategory, window.currentSearch);
}

// ============ REVIEWS / SOCIAL WALL ============
function postReview() {
    const nameInput = document.getElementById('rev-name');
    const rating = parseInt(document.getElementById('rev-rating').value);
    const comment = document.getElementById('rev-comment').value.trim();
    if (!comment) { showToast('Please write a comment first.', 'error'); return; }

    const reviews = JSON.parse(localStorage.getItem('bloss_reviews')) || [];
    reviews.unshift({
        name: (nameInput && nameInput.value.trim()) || 'Guest',
        stars: rating,
        comment,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('bloss_reviews', JSON.stringify(reviews));

    document.getElementById('rev-comment').value = '';
    showToast('Thanks for the review!');
    loadReviews();
}

function loadReviews() {
    const feed = document.getElementById('wall-feed');
    if (!feed) return;
    const reviews = JSON.parse(localStorage.getItem('bloss_reviews')) || [];

    feed.innerHTML = reviews.length === 0
        ? `<p style="opacity:0.5;">No reviews yet on this device — be the first!</p>`
        : reviews.map(r => `
            <div class="card" style="margin-bottom:15px; text-align:left; border-left:4px solid var(--gold);">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--gold);">
                    <strong>${r.name}</strong><span>${r.date}</span>
                </div>
                <div style="margin:5px 0;">${'⭐'.repeat(r.stars)}</div>
                <p style="margin:0; opacity:0.8; font-size:0.9rem;">${r.comment}</p>
            </div>`).join('');
}

// ============ AI CHAT ============
function askAI() {
    const input = document.getElementById('chat-input').value.toLowerCase();
    const box = document.getElementById('chat-box');
    let res = "Please contact 09033448814 for direct assistance!";

    if (input.includes("price")) res = "Check the Shop page for full up-to-date pricing on all items!";
    if (input.includes("delivery")) res = "We deliver to FUNAAB hostels. Fee for off-campus areas is ₦500.";

    box.innerHTML += `<div class="user-msg">You: ${input}</div>`;
    box.innerHTML += `<div class="bot-msg">AI: ${res}</div>`;
    document.getElementById('chat-input').value = "";
    box.scrollTop = box.scrollHeight;
}

// ============ ORDER SUBMISSION (used by checkout.html) ============
function sendOrder(typedName, loc) {
    if (!typedName || !loc) { showToast('Please provide your name and address.', 'error'); return; }
    if (cart.length === 0) { showToast('Your basket is empty.', 'error'); return; }

    const locL = loc.toLowerCase();
    const paidAreas = ['oluwo', 'harmony', 'accord', 'kofesu', 'camp', 'isolu'];
    let fee = paidAreas.some(area => locL.includes(area)) ? 500 : 0;
    if (!locL.includes('hostel') && fee === 0) fee = 500;

    let itemsTotal = 0;
    let msg = `*BLOSS FOODS ORDER*\nCustomer: ${typedName}\nAddress: ${loc}\n\n`;
    cart.forEach(i => {
        msg += `- ${i.qty}x ${i.name} (₦${i.total.toLocaleString()})\n`;
        itemsTotal += i.total;
    });
    msg += `\nDelivery Fee: ₦${fee}\n*TOTAL: ₦${(itemsTotal + fee).toLocaleString()}*`;

    localStorage.removeItem('bloss_cart');
    cart = [];
    updateUI();

    window.open(`https://wa.me/2349033448814?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = () => { updateUI(); };
