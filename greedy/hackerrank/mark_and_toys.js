//Mark and Toys
//https://www.hackerrank.com/challenges/mark-and-toys

//Time: O(nlogn), Space: O(1) 
function processData(input) {
    var lines = input.split('\n');
    var arrLine = lines[0].split(' ').map(Number);
    var n = arrLine[0];
    var k = arrLine[1];
    var toysArr = lines[1].split(' ').map(Number);
    toysArr.sort(function(x,y) {return x-y;}); //O(nlogn)
    var totalPrice = 0;
    var nToys = 0;
    for(var i = 0; i < toysArr.length; i++) {
        totalPrice += toysArr[i];
        if(totalPrice <= k) {
            nToys++
        } else {
            i = toysArr.length;
        }
    }
    console.log(nToys);
    return;
} 
