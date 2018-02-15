$(function () {
    setUpCart();

    $('#go-to-cart-btn').click((e) => {
        e.preventDefault();
        var order = JSON.parse(localStorage.getItem('preOrder'));
        var flowerIds = order.map(o => o.id).join(',');
        var quantities = order.map(o => o.quantity).join(',');
        var location = `/cart?ids=${flowerIds}&quantities=${quantities}`;
        window.location.href = location;
    });
});

function setUpCart() {
    var order = JSON.parse(localStorage.getItem('preOrder'));

    if (order) {
        var allFlowers = order.reduce((a, b) => {
            return {
                quantity: a.quantity + b.quantity
            };
        }).quantity;
        $('#cart-item-quantity').text(allFlowers);
    } else {
        $('#cart-item-quantity').text(0);
    }
}