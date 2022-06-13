const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function
//function summation(batteryBatches) {
// let sum = 0;
//for (let i = 0; i < batteryBatches.length; i++){
// sum = sum + batteryBatches[i];}
//return sum;}
//console.log(summation(batteryBatches))

//using reduce function
const totalBatteries = batteryBatches.reduce(function(sum, currentItem) {
    sum = sum + currentItem;
    return sum;
}, 0);
console.log(totalBatteries);
