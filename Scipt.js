function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    let cart = getCart();
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    saveCart(cart);
    window.location.href = "koszyk.html";
}

function renderCart() {
    let cart = getCart();
    let list = document.getElementById("lista");

    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = "<p>Koszyk jest pusty.</p>";
        return;
    }

    let html = "<ul>";

    cart.forEach(item => {
        html += `<li>${item.name} — ${item.price}$ × ${item.qty}</li>`;
    });

    html += "</ul>";

    list.innerHTML = html;
}

function clearCart() {
    localStorage.removeItem("cart");
    renderCart();
}

window.onload = renderCart;
