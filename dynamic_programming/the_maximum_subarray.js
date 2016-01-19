//The Maximum Subarray
//https://www.hackerrank.com/challenges/maxsubarray

//Time: O(n), Space: O(1)
function processData(input) {
    var lines = input.split('\n');
    for(var i = 1; i < lines.length; i = i + 2) {
        var n = parseInt(lines[i]);
        var arr = lines[i+1].split(' ').map(Number);
        var currentSum = arr[0];
        var maxSumCont = arr[0];
        var maxSumNonCont = arr[0];
        for(var j = 1; j < n; j++) {
            if(currentSum < 0) {
                currentSum = arr[j];
            } else {
                currentSum += arr[j];
            }
            
            //Contiguous Sum
            if(maxSumCont < currentSum) {
                maxSumCont = currentSum;
            }
            
            //Non Contiguous Sum
            if(maxSumNonCont < 0 && maxSumNonCont < arr[j]) {
                maxSumNonCont = arr[j];
            } else if(arr[j] > 0) {
                maxSumNonCont += arr[j];
            }
            
        }
        console.log(maxSumCont, maxSumNonCont);
        
    }
    
    return;
} 
