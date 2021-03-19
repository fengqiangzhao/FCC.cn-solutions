/**
 * 题目:
 * 在这道题目中，我们需要写一个函数，
 * 它接收两个参数，分别为一个数组arr以及一个函数func。
 * 我们需要从数组的第一个元素开始，用func来检查数组的每项。
 * 函数最终的返回值也是一个数组，它由原数组中第一个使得func为true的元素及其之后的所有元素组成。
 * 如果数组中的所有元素都不能让func为true，则返回空数组[]。
 * 
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;})应该返回[3, 4]
 * dropElements([0, 1, 0, 1], function(n) {return n === 1;})应该返回[1, 0, 1]
 * dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})应该返回[7, 4]
 */

//S1:
// S1.循环
function dropElements(arr, func) {
    let flag = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            flag = i;
            break;
        }
    }
    return arr.slice(flag);
}

//S2: findIndex
//findIndex方法返回符合传入的函数的第一个元素位置
function dropElementsS2(arr, func) {
    return arr.slice(arr.findIndex(func) > -1 ? arr.findIndex(func) : arr.length);
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));
console.log(dropElementsS2([1, 2, 3, 7, 4], function(n) { return n > 3; }));