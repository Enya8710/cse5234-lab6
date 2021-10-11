var express = require('express');
var app = express();

app.get('', function (req, res) {
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
})

const loadinfo = () => {
    const paymenthttp = new XMLHttpRequest();
    const shippinghttp = new XMLHttpRequest();
    shippinghttp.open("GET", "http://localhost:4200/shipping", false);
    shippinghttp.send();

    paymenthttp.open("GET", "http://localhost:4200/payment", false);
    paymenthttp.send();
    const shipping_info = JSON.parse(shippinghttp.responseText);
    const payment_info = JSON.parse(paymenthttp.responseText);
       
}
