/**
 题目:
 给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
 注意，较小数不一定总是出现在数组的第一个元素。

 sumAll([1, 4])应该返回 10
 sumAll([10, 5])应该返回 45
 */


// S1: 等差数列和: 一个等差数列的和，等于其首项与末项的和，乘以项数除以2。
function sumAllS1(arr) {
    return (Math.abs(arr[1] - arr[0]) + 1) * (arr[1] + arr[0]) / 2;
}

// S2: 找到最大和最小值, 循环求和
function sumAllS2(arr) {
    let sum = 0;
    let maxNum = Math.max(arr[0], arr[1]);
    let minNum = Math.min(arr[0], arr[1]);

    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAllS1([1, 9]));
console.log(sumAllS2([9, 1]));