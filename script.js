let total = 0;
let cartItems = [];

function addToCart(name, price) {
    cartItems.push({ name, price });
    total += price;

    const list = document.getElementById("cart-items");
    const item = document.createElement("li");

    item.textContent = `${name} - $${price}`;
    list.appendChild(item);

    document.getElementById("total").textContent = total;
}