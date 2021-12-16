/**
 题目:
 在这道题目中，我们需要写一个函数，
 把一个字符串转换为“短线连接格式”。
 短线连接格式的意思是，所有字母都是小写，且用-连接。
 比如，对于Hello World，应该转换为hello-world；
 对于I love_Javascript-VeryMuch，应该转换为i-love-javascript-very-much

 spinalCase("This Is Spinal Tap")应该返回"this-is-spinal-tap"
 spinalCase("The_Andy_Griffith_Show")应该返回"the-andy-griffith-show"
 */

// S1: 处理字符串, 把大小写字母之间添加空格, 全部变小写
//     然后使用空格和下划线分割字符串为数组, 再使用短线连接每个数组元素成字符串
// 注意: 正则匹配字符之间不要加空格
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    console.log(str);
    return str.split(/\s+|_+/g).join('-');
}

console.log(spinalCase("The_Andy_Griffith_Show"));

console.log(spinalCase("Teletubbies say Eh-oh"));