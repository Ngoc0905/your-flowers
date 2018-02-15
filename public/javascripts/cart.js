$(function () {
    calculateTotalPrice();

    $("#date").datepicker();



    // $("#cart-checkout-btn").click(() => {


    //     var bouquets = [];
    //     var totalPrice = 0;

    //     $(".cartRow").each(function () {
    //         var quantity = $(this).find(".bouquet-quantity").text();
    //         var price = $(this).find(".price strong").text();
    //         totalPrice += parseInt(quantity) * parseInt(price);

    //         bouquets.push({
    //             quantity: quantity,
    //             id: $(this).attr("id").split('-')[1]
    //         });
    //     });

    //     axios.post('/cart', {
    //         bouquets,
    //         total: totalPrice,
    //         deliveryDate: $('#date').val()
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // });
});

function onCartSubmit(e) {
    $("ul.cartErrors").html('');
    $("ul.cartErrors").hide();
    var validationErrors = [];
    if (!$("#terms").is(':checked')) {
        validationErrors.push("Please confirm you have read the Terms & Conditions");
        $("#terms").addClass("error");
    } else {
        $("#terms").removeClass("error");
    }

    if (!$("#date").val()) {
        validationErrors.push("Please enter a valid date");
        $("#date").addClass("error");
    } else {
        $("#date").removeClass("error");
    }

    if (validationErrors.length) {
        validationErrors.forEach((e) => {
            $("ul.cartErrors").append(`<li class="cartError">${e}</li>`);
        });

        $('ul.cartErrors').show();
        e.preventDefault();
        return false;
    }
}

function calculateTotalPrice() {
    var totalPrice = 0;
    $(".cartRow").each(function () {
        var quantity = $(this).find(".bouquet-quantity").text();
        var price = $(this).find(".price strong").text();
        totalPrice += parseInt(quantity) * parseInt(price);
    });
    $("#cart-total-price").text(totalPrice + "€");
    $("#cart-total-price-input").val(totalPrice);
}

// function removeBouquet(btn) {
//     var id = btn.id.split('-')[1];

// }