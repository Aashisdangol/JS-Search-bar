// Sample Product List
const products = [
    { name: "Apple", description: "Fresh green apples", price: 1.5, category: "Fruits" },
    { name: "Milk", description: "Organic whole milk", price: 2.0, category: "Dairy" },
    { name: "Bread", description: "Whole grain bread", price: 2.5, category: "Bakery" },
    { name: "Eggs", description: "Free-range eggs", price: 3.0, category: "Dairy" },
    { name: "Banana", description: "Ripe bananas", price: 1.2, category: "Fruits" },
    { name: "Butter", description: "Unsalted butter", price: 1.8, category: "Dairy" },
    { name: "Orange Juice", description: "Freshly squeezed orange juice", price: 3.5, category: "Beverages" }
];

// Function to display all products
function displayProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";  // it will clear all the existing product in the html one

    productArray.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;

        productList.appendChild(productDiv);
    });
}

// Initial Display of Products
displayProducts(products);

// Function to filter products based on search query
function filterProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery) ||
            product.price.toString().includes(searchQuery)
        );
    });

    displayProducts(filteredProducts);
}
