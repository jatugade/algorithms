// Jim and the Orders
// https://www.hackerrank.com/challenges/jim-and-the-orders


//Space: O(n), Time: O(nlogn)
//Using Array, and Object
function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var orders = [];
    for(var i = 1; i <= n; i++) {
        var time = lines[i].split(' ').reduce(function(x, y) { return parseInt(x) + parseInt(y); });
        var order = {customerId: i, time: time};
        orders.push(order);
    }    
    
    //Time: O(nlogn)
    orders.sort(function(x, y) {
        return x.time - y.time;
    })
    
    var customers = orders.map(function(order) {
        return order.customerId;
    })
    
    console.log(customers.join(' '));
} 




