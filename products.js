const products = [
    { name: "Smartphone", price: 35599, category: "Electronics", img: "product1.webp" },
    { name: "Headphones", price: 1299, category: "Electronics", img: "product2.webp" },
    { name: "Wrist Watch", price: 1999, category: "Accessories", img: "product3.webp" },
    { name: "Laptop", price: 89990, category: "Electronics", img: "product4.webp" },
    { name: "Backpack", price: 1979, category: "Accessories", img: "product5.webp" },
    { name: "Camera", price: 8499, category: "Electronics", img: "product6.webp" },
    { name: "Shoes", price: 1149, category: "Fashion", img: "product7.webp" },
    { name: "Sunglasses", price: 799, category: "Accessories", img: "product8.webp" },
    { name: "Smart TV", price: 35999, category: "Electronics", img: "product9.webp" },
    { name: "Gaming Console", price: 6399, category: "Electronics", img: "product10.webp" },
    { name: "Tablet", price: 11499, category: "Electronics", img: "product11.webp" },
    { name: "Blender", price: 19950, category: "Home Appliances", img: "product12.webp" },
    { name: "Coffee Maker", price: 9299, category: "Home Appliances", img: "product13.webp" },
    { name: "T-shirt", price: 599, category: "Fashion", img: "product14.webp" },
    { name: "Jeans", price: 1999, category: "Fashion", img: "product15.webp" },
    { name: "Earrings", price: 359, category: "Accessories", img: "product16.webp" },
    { name: "Cap", price: 409, category: "Accessories", img: "product17.webp" },
    { name: "Desk Lamp", price: 499, category: "Home Appliances", img: "product18.webp" },
    { name: "Gaming Mouse", price: 2399, category: "Electronics", img: "product19.webp" },
    { name: "Wireless Charger", price: 1599, category: "Electronics", img: "product20.webp" }
];

function generateRandomReviews() {
    const reviews = ["Excellent!", "Good product!", "Value for money.", "Highly recommended!", "Not bad."];
    return reviews[Math.floor(Math.random() * reviews.length)];
}

function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    products.forEach((product, index) => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h4>${product.name}</h4>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <div class="reviews">${generateRandomReviews()} | ⭐⭐⭐⭐</div>
                    <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>`;
    });
}

function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`"${product.name}" has been added to your cart!`);
}

document.addEventListener("DOMContentLoaded", displayProducts);