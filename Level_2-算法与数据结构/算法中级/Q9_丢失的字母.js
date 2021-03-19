/**
 题目:
 在这道题目中，我们需要写一个函数，找到传入的字符串里缺失的字母并返回它。
 判断缺失的依据是字母顺序，比如 abcdfg 中缺失了 e。而 abcdef 中就没有字母缺失，此时我们需要返回undefined。

 fearNotLetter("abcdefghjklmno")应该返回 "i"
 fearNotLetter("abcdefghijklmnopqrstuvwxyz")应该返回undefined
 */

//S1: 通过比较相邻两个字符的ASCII码, 
// 如果前一个字符的ASCII码加1不等于后一个字符的ASCII码, 说明这两个字符之间缺失了字符
function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i - 1) + 1 !== (str.charCodeAt(i))) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
    return undefined;
}

//S2: 取字符串的首字符的ASCII, 利用map依次比较ascii值, 
// 比较成功把值加一与下一个字符的ascii比较; 比较失败, 值所对应的字符就是缺失的字符
function fearNotLetterS2(str) {
    let compare = str.charCodeAt(0);
    let missing = undefined;
    str.split('').map(letter => {
        if (letter.charCodeAt() === compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    })
    return missing;
}


console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetterS2('abcdefghijklmnopqrstuvwxyz'));