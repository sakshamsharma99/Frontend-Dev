async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        const container = document.getElementById("productContainer");

        products.forEach(p => {
            // console output
            console.log("Product:", p.title);
            console.log("Price: $" + p.price);
            console.log("Image:", p.image);
            console.log("-----------------------");

            // UI Card
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${p.image}">
                <h3>${p.title}</h3>
                <p>$${p.price}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");

        document.body.innerHTML += `
            <h2 style="color:red; text-align:center; margin-top:20px;">
            Failed to load products. Please try again.
            </h2>`;
    }
}

fetchProducts();
