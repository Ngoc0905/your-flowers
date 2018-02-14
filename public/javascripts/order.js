$(function () {

    $('.add-to-cart-btn').click(function () {
        var flowerId = $(this).data('id');
        var order = JSON.parse(localStorage.getItem('preOrder'));
        if (!order) {
            order = [];
        }
        var selectedFlowerOrder = order.find((o) => o.id === flowerId);
        if (selectedFlowerOrder) {
            selectedFlowerOrder.quantity++;
        } else {
            order.push({
                id: flowerId,
                quantity: 1
            });
        }
        localStorage.setItem('preOrder', JSON.stringify(order));
        
        $('#cart-item-quantity').text(parseInt($('#cart-item-quantity').text()) + 1);
    });
});