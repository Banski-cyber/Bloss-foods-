/* BLOSS FOODS - MASTER SCRIPT ENGINE */

// 1. GLOBAL STATE & AUTO-FIX CACHE
let cart = JSON.parse(localStorage.getItem('bloss_cart')) || [];

// The master list of all products
const defaultInventory = { 
    rice: 50, beans: 50, garri: 60, spag: 40, 
    n_single: 100, n_carton: 10, 
    eggs: 60, p_oil: 40, v_oil: 40, egusi: 30,
    maggi: 200, salt: 100, tomato: 100, pepper: 100 
};

let inventory = JSON.parse(localStorage.getItem('bloss_inventory'));

// AUTO-FIX: If the inventory is old or missing the new separated noodle keys, reset it.
if (!inventory || inventory.n_single === undefined) {
    inventory = defaultInventory;
    localStorage.setItem('bloss_inventory', JSON.stringify(inventory));
}

// 2. INTERFACE CONTROLS
function toggleCart() { 
    const sidebar = document.getElementById('cart-sidebar');
    if(sidebar) sidebar.classList.toggle('active'); 
}

function toggleChat() { 
    let c = document.getElementById('ai-chat'); 
    if(c) c.style.display = (c.style.display === 'block') ? 'none' : 'block'; 
}

// 3. CART CORE LOGIC
function addToCart(name, price, qtyId) {
    const qtyInput = document.getElementById(qtyId);
    if(!qtyInput) return;
    const qty = parseInt(qtyInput.value);
    
    // Explicit Key Mapping
    let key = name.toLowerCase().split(' ')[0];
    if (name.toLowerCase().includes("tomato")) key = "tomato";
    if (name.toLowerCase().includes("egusi")) key = "egusi";
    if (name.toLowerCase().includes("single")) key = "n_single";
    if (name.toLowerCase().includes("carton")) key = "n_carton";
    if (name.toLowerCase().includes("palm")) key = "p_oil";
    if (name.toLowerCase().includes("veg")) key = "v_oil";

    if (inventory[key] >= qty) {
        inventory[key] -= qty;
        cart.push({ id: Date.now(), name, price, qty, total: price * qty });
        saveData();
    } else {
        alert(`Insufficient stock! Only ${inventory[key] || 0} left.`);
    }
}

function addWithUnit(name, selectId, qtyId, key) {
    const sel = document.getElementById(selectId);
    const qty = parseInt(document.getElementById(qtyId).value);
    const price = parseInt(sel.value);
    const unit = sel.options[sel.selectedIndex].text.split('-')[0].trim();

    if (inventory[key] >= qty) {
        inventory[key] -= qty;
        cart.push({ id: Date.now(), name: `${name} (${unit})`, price, qty, total: price * qty });
        saveData();
    } else {
        alert("Stock finished!");
    }
}

// 4. REMOVAL LOGIC
function removeItem(index) {
    const item = cart[index];
    let key = item.name.toLowerCase().split(' ')[0];
    if (item.name.toLowerCase().includes("egg")) key = "eggs";
    if (item.name.toLowerCase().includes("single")) key = "n_single";
    if (item.name.toLowerCase().includes("carton")) key = "n_carton";
    if (item.name.toLowerCase().includes("palm")) key = "p_oil";
    if (item.name.toLowerCase().includes("veg")) key = "v_oil";
    if (item.name.toLowerCase().includes("tomato")) key = "tomato";
    
    if (inventory[key] !== undefined) inventory[key] += item.qty;
    cart.splice(index, 1);
    saveData();
}

function saveData() {
    localStorage.setItem('bloss_cart', JSON.stringify(cart));
    localStorage.setItem('bloss_inventory', JSON.stringify(inventory));
    updateUI();
}

// 5. THE UI UPDATE ENGINE (Matches perfectly with HTML)
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
        if(totS) totS.innerText = total.toLocaleString();
        if(countS) countS.innerText = cart.length;
    }

    // Force loop through default keys to prevent undefined errors
    Object.keys(defaultInventory).forEach(key => {
        const stockEl = document.getElementById(`stock-${key}`);
        const btnEl = document.getElementById(`btn-${key}`);
        
        // This injects the exact number into your <span id="stock-..."> tags
        if(stockEl) {
            stockEl.innerText = inventory[key] !== undefined ? inventory[key] : 0;
        }
        
        if(btnEl) {
            if(inventory[key] <= 0) {
                btnEl.innerHTML = `<button class="add-btn out-of-stock-btn" disabled>STOCK FINISHED</button>`;
            } else {
                if(key === 'eggs') {
                    btnEl.innerHTML = `<button class="add-btn" onclick="addWithUnit('Egg', 'unit-eggs', 'qty-eggs', 'eggs')">Add to Cart</button>`;
                } else {
                    let dName = key.charAt(0).toUpperCase() + key.slice(1);
                    let price = 200; 

                    // Assign prices and names accurately
                    if(key === 'rice') { price = 1900; dName = 'Rice (Congo)'; }
                    else if(key === 'beans') { price = 1700; dName = 'Beans (Congo)'; }
                    else if(key === 'garri') { price = 700; dName = 'Garri (Congo)'; }
                    else if(key === 'spag') { price = 1100; dName = 'Spaghetti'; }
                    else if(key === 'n_single') { price = 250; dName = 'Noodles (Single)'; }
                    else if(key === 'n_carton') { price = 10000; dName = 'Noodles (Carton)'; }
                    else if(key === 'p_oil') { price = 1600; dName = 'Palm Oil (Full)'; }
                    else if(key === 'v_oil') { price = 2000; dName = 'Veg Oil (Full)'; }
                    else if(key === 'egusi') { price = 600; dName = 'Egusi (1 Cup)'; }
                    else if(key === 'maggi') { price = 450; dName = 'Maggi'; }
                    else if(key === 'salt') { price = 200; dName = 'Salt'; }
                    else if(key === 'tomato') { price = 200; dName = 'Tomato Paste'; }
                    else if(key === 'pepper') { price = 200; dName = 'Pepper'; }

                    btnEl.innerHTML = `<button class="add-btn" onclick="addToCart('${dName}', ${price}, 'qty-${key}')">Add to Cart</button>`;
                }
            }
        }
    });
}

function askAI() {
    const input = document.getElementById('chat-input').value.toLowerCase();
    const box = document.getElementById('chat-box');
    let res = "Please contact 09033448814 for direct assistance!";
    if(input.includes("price")) res = "Rice: ₦1,900 | Beans: ₦1,700 | Garri: ₦700 | Egusi: ₦600.";
    if(input.includes("delivery")) res = "We deliver to FUNAAB hostels. Fee for off-campus areas is ₦500.";
    
    box.innerHTML += `<div style="text-align:right; color:var(--gold);">You: ${input}</div>`;
    box.innerHTML += `<div style="margin-bottom:10px; color:white;">AI: ${res}</div>`;
    document.getElementById('chat-input').value = "";
    box.scrollTop = box.scrollHeight;
}

function sendOrder() {
    const typedName = document.getElementById('cust-name').value;
    const loc = document.getElementById('cust-location').value;
    if(!typedName || !loc) return alert("Please provide details!");

    const locL = loc.toLowerCase();
    const paidAreas = ['oluwo', 'harmony', 'accord', 'kofesu', 'camp', 'isolu'];
    let fee = paidAreas.some(area => locL.includes(area)) ? 500 : 0;
    if(!locL.includes('hostel') && fee === 0) fee = 500;

    let itemsTotal = 0;
    let msg = `*BLOSS FOODS ORDER*\nCustomer: ${typedName}\nAddress: ${loc}\n\n`;
    cart.forEach(i => {
        msg += `- ${i.qty}x ${i.name} (₦${i.total.toLocaleString()})\n`;
        itemsTotal += i.total;
    });
    msg += `\nDelivery Fee: ₦${fee}\n*TOTAL: ₦${(itemsTotal + fee).toLocaleString()}*`;
    
    localStorage.removeItem('bloss_cart');
    window.open(`https://wa.me/2349033448814?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = () => { updateUI(); };
