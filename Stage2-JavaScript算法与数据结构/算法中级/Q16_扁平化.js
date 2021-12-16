/**
 * 题目:
 * 在这道题目中，我们需要写一个数组扁平化的函数。
 * 注意，你写的函数应该能够处理数组多级嵌套的情况。
 * 
 * steamrollArray([1, {}, [3, [[4]]]])应该返回[1, {}, 3, 4]。
 * steamrollArray([1, [2], [3, [[4]]]])应该返回[1, 2, 3, 4]。
 */

//S1:递归展开
function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

//S2:
function steamrollArrayS2(arr) {
    let flattenedArray = [];
    let flatten = function(item) {
        if (Array.isArray(item)) {
            for (let i of item) {
                flatten(i);
            }
        } else {
            flattenedArray.push(item);
        }
    }
    arr.forEach(flatten);
    return flattenedArray;
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));

console.log(steamrollArrayS2([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
]));