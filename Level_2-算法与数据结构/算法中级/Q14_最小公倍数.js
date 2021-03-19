/**
 * 题目:
 * 在这道题目中，我们需要写一个函数
 * 它接收一个包含两个数字的数组参数arr，
 * 它的返回值为这两个数字范围内所有数字（包含这两个数字）的最小公倍数。
 * 注意，较小数不一定总是出现在数组的第一个元素。
 * 
 * 传入[1, 3]，那么函数的返回结果应为 1、2、3 的最小公倍数，即为 6。
 * smallestCommons([5, 1])应该返回 60。
 * smallestCommons([2, 10])应该返回 2520。
 */

//S1: 
// 1. 每次处理两个元素的最大公倍数, 依次往后
// 2. 先通过辗转相除法求最大公约数, 然后通过最大公约数求最大公倍数
//
function smallestCommons(arr) {
    let minNum = Math.min(arr[0], arr[1]);
    let maxNum = Math.max(arr[0], arr[1]);
    let newArr = [];
    for (let i = minNum; i <= maxNum; i++) {
        newArr.push(i);
    }

    //最大公约数
    function gcdFn(a, b) {
        while (b != 0) {
            let tmp = b;
            b = a % b;
            a = tmp;
        }
        return a;
    };

    return newArr.reduce((pre, cur) => {
        return (cur * pre) / gcdFn(pre, cur)
    });

}

console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));