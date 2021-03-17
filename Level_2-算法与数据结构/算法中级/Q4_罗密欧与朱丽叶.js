/**
 在这道题目中，我们要写一个函数，
 它接收两个参数：第一个参数是对象数组，第二个参数是一个对象。
 我们需要从对象数组中找出与第二个参数相等或包含第二个参数的所有对象，并以对象数组的形式返回。
 其中，相等的意思是原数组中的对象与第二个参数中对象的所有键值对完全相等；
 包含的意思是只要第二个参数中对象的所有键存在于原数组对象中，且它们对应的值相同即可。

 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })应该返回[{ first: "Tybalt", last: "Capulet" }]

 whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })应该返回[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
 */

//S1: 取出目标对象的key,filter数组中不包含目标对象key的元素或者和目标对象值不相等的元素
function whatIsInANameS1(collection, source) {
    let sourceKeys = Object.keys(source);

    f = (item) => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    }
    return collection.filter(f)
}


//S2: every方法判断是否包含元素key并且值相等
function whatIsInANameS2(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter(item => {
        return sourceKeys.every(key => item.hasOwnProperty(key) && item[key] === source[key]);
    })
}


console.log(whatIsInANameS1([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

console.log(whatIsInANameS2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));