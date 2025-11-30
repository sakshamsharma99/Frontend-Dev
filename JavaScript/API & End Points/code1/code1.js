$(document).ready(function () {
    $("#searchBox").on("keyup", function () {

        let q = $(this).val();

        $("#loading").show();  // show loading text

        $.ajax({
            url: "http://localhost:3001/products?q=" + q,
            method: "GET",
            success: function (data) {

                $("#loading").hide();  // hide loading text
                $("#results").empty();

                if (data.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                data.forEach(item => {
                    $("#results").append(`
                        <div class="product-box">
                            <img src="${item.image}" />
                            <div>
                                <h4>${item.name}</h4>
                                <p>Price: ₹${item.price}</p>
                            </div>
                        </div>
                    `);
                });
            }
        });

    });
});
