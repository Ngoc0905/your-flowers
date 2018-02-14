$(function () {
    var order = JSON.parse(localStorage.getItem('preOrder'));

    if (order && order.length) {
        order.forEach((o) => {
            axios.get('/flowers/' + o.id).then((response) => {
                console.log(response);
            });
        });
    }
});