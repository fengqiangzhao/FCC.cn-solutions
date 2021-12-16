/**
 * 题目:
 * 在这道题目中，我们需要写一个求和的函数，
 * 但它接收的参数数量不定。如果传入了两个参数，那么直接返回两数之和即可。
 * 如果只传入一个参数，那我们应该返回另一个函数用来接收下一个参数，然后求出两数之和。
 * 
 * 比如，addTogether(2, 3)应该返回5。而addTogether(2)应该返回一个函数
 * 然后我们调用这个返回的函数，并给它传入另一个用于求和的值：
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3)此时应返回5
 * 只要其中任何一个参数不是数字，那我们就应返回undefined
 * 
 * addTogether(2, 3)应该返回 5。
 * addTogether("http://bit.ly/IqT6zt")应该返回undefined
 */

//S1: 
// typeof判断数字类型
// 根据参数数量判断返回类型
function addTogether(...args) {
    let sum = 0;
    for (let i of args) {
        if (typeof i !== 'number') {
            return undefined;
        }
        sum += i;
    }
    return args.length > 1 ? sum : y => {
        return typeof y === 'number' ? sum + y : undefined
    };
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2)([3]));