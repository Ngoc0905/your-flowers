$(function () {
    var order = JSON.parse(localStorage.getItem('preOrder'));

    if (order) {
        var allFlowers = order.reduce((a, b) => {
            return {quantity: a.quantity + b.quantity};
        }).quantity;
        $('#cart-item-quantity').text(allFlowers);
    } else {
        $('#cart-item-quantity').text(0);
    }
});