document.addEventListener("DOMContentLoaded", loadDashboard);

function loadDashboard() {

    // API URLs
    const urls = [
        "http://localhost:3004/users",
        "http://localhost:3004/orders",
        "http://localhost:3004/products"
    ];

    // Start fetching all APIs simultaneously
    Promise.all(urls.map(url => fetch(url)))
        .then(async responses => {

            let failed = false;

            // Check if any response failed
            responses.forEach(res => {
                if (!res.ok) failed = true;
            });

            // Convert all results to JSON
            const data = await Promise.all(responses.map(r => r.json()));

            const [users, orders, products] = data;

            // Update UI
            document.getElementById("usersCount").textContent = users.length;
            document.getElementById("ordersCount").textContent = orders.length;
            document.getElementById("productsCount").textContent = products.length;

            if (failed) {
                document.getElementById("warning").style.display = "block";
            }
        })
        .catch(() => {
            // If ANY API totally fails
            document.getElementById("warning").style.display = "block";

            document.getElementById("usersCount").textContent = "N/A";
            document.getElementById("ordersCount").textContent = "N/A";
            document.getElementById("productsCount").textContent = "N/A";
        });
}
