/**
 题目:
 在这道题目中，我们要写一个叫destroyer的函数。
 传给它的第一个参数是数组，我们称他为初始数组。
 后续的参数数量是不确定的，可能有一个或多个。
 你需要做的是，从初始数组中移除所有与后续参数相等的元素，并返回移除元素后的数组
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3)应该返回[1, 1]。
 destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)应该返回[1, 5, 1]。
 */

// S1: filter过滤掉数组中的出现在arg中的元素
function destroyerS1(arr, ...arg) {
    return arr.filter(e => !arg.includes(e));
}

// S2: 遍历数组元素,元素如果出现在参数中就移出数组
function destroyerS2(arr, ...arg) {
    for (let i = 0; i < arr.length; i++) {
        if (arg.indexOf(arr[i]) !== -1) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(destroyerS1([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyerS2([1, 2, 3, 5, 1, 2, 3], 2, 3));