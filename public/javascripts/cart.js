$(function () {
    calculateTotalPrice();

    $("#cart-checkout-btn").click(() => {
        $("ul.cartErrors").html('');
        $("ul.cartErrors").hide();
        var validationErrors = [];
        if (!$("#terms").is(':checked')) {
            validationErrors.push("Please confirm you have read the Terms & Conditions");
            $("#terms").addClass("error");
        } else {
            $("#terms").removeClass("error");
        }

        if (validationErrors.length) {
            validationErrors.forEach((e) => {
                $("ul.cartErrors").append(`<li class="cartError">${e}</li>`);
            });

            $('ul.cartErrors').show();
            return;
        }

        var bouquets = [];

        $(".cartRow").each(function () {
            var quantity = $(this).find(".bouquet-quantity").text();
            var price = $(this).find(".price strong").text();

            bouquets.push({
                quantity: quantity,
                id: $(this).attr("id").split('-')[1]
            });
        });

        axios.post('/cart', bouquets).then((response) => {
            
        });
    });
});

function calculateTotalPrice() {
    var totalPrice = 0;
    $(".cartRow").each(function () {
        var quantity = $(this).find(".bouquet-quantity").text();
        var price = $(this).find(".price strong").text();
        totalPrice += parseInt(quantity) * parseInt(price);
    });
    $("#cart-total-price").text(totalPrice + "€");
}

// function removeBouquet(btn) {
//     var id = btn.id.split('-')[1];

// }