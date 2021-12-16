/**
 题目:
 在这道题目中，我们需要写一个函数，它接收两个或多个数组为参数。我们需要对这些数组中所有元素进行去除重复元素的处理，并以数组的形式返回去重结果。
 需要注意的是，结果数组中的元素顺序必须与其传入的顺序保持一致。

 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])应该返回[1, 3, 2, 5, 4]。
 uniteUnique([1, 3, 2], [1, [5]], [2, [4]])应该返回[1, 3, 2, [5], [4]]
 */

// S1:使用Set过滤重复元素
function uniteUnique(...arg) {
    let concatArr = [];
    arg.map(item => concatArr.push(...item));
    return Array.from(new Set(concatArr));
}

//S2:合并到新数组,插入之前先检查
function uniteUniqueS2(...arg) {
    let concatArr = [];
    arg.map(item => {
        item.map(item1 => {
            if (concatArr.indexOf(item1) === -1) {
                concatArr.push(item1);
            }
        })
    })
    return concatArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUniqueS2([1, 3, 2], [1, [5]], [2, [4]]));