/**
 题目:
 在这道题目中，我们需要写一个函数，比较两个数组，返回一个新的数组。
 这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素。
 如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。
 换言之，我们需要返回这两个数组的对称差。

 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])应该返回[4]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])应该返回["pink wool"]
 */

//S1: 合并两个数组, filter方法过滤同时出现在两个数组的元素
function diffArrayS1(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr.filter(e => arr1.indexOf(e) === -1 || arr2.indexOf(e) === -1);
}

//S2: 分别遍历两个数组, 把不在另一个数组的元素放到结果数组
function diffArrayS2(arr1, arr2) {
    let newArr = [];
    for (let i of arr1) {
        if (arr2.indexOf(i) === -1) {
            newArr.push(i);
        }
    }

    for (let j of arr2) {
        if (arr1.indexOf(j) === -1) {
            newArr.push(j);
        }
    }
    return newArr;
}

console.log(diffArrayS1([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArrayS2(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));