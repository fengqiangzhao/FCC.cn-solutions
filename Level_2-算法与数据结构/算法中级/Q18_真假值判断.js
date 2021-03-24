/**
 * 题目:
 * 在这道题目中，我们需要写一个函数
 * 它接收两个参数, 
 * 第一个参数为对象数组collection，
 * 第二个参数为一个字符串pre，代表对象的一个键（key）
 * 我们需要检查对象数组中每个对象的pre属性对应的值是否都为 “真”（truthy）。
 * 如果是，则返回true，否则返回false。
 * JavaScript 中，如果一个值在 Boolean 的上下文中（比如if语句）可以被执行为true，那么这个值就被认为truthy的.注意，你可以选择使用.或[]来访问对象属性对应的值。
 * 
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")应该返回true。
 * 
 * truthCheck([{"single": "yes"}], "single")应该返回true
 * truthCheck([{"single": ""}, {"single": "double"}], "single")应该返回false
 */

//S1: every判断
function truthCheck(collection, pre) {
    return collection.every(item => {
        return item.hasOwnProperty(pre) && item[pre];
    });
}


console.log(truthCheck([{ "single": "yes" }], "single"));
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"));