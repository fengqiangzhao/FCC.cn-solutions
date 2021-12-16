/**
 * 题目: 
 * 世界上最简单、最著名的加密方法是凯撒密码，也叫移位密码。
 * 在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。
 * ROT13 是一个被广泛使用的编码技术，明文中的所有字母都被移动 13 位,
 * 因此，'A' ↔ 'N', 'B' ↔ 'O' 等等。
 * 
 * 请编写一个函数,用于解码一个被 ROT13 编码的字符串，然后返回解码后的结果。
 * 1. 所有解码后的字母都必须为字母大写。
 * 2. 请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们
 */

// S1: 非字母字符直接输出
// 一共26个字母, 移动13位,不管左移(解密)还是右移(加密),两个字母都是一一对应的. 
function rot13(str) {
    //处理边界情况
    if (str == null) {
        return null;
    }
    let decryptStrArr = [];
    let isAlpha = function (c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }

    for (let i = 0; i < str.length; i++) {
        if (isAlpha(str.charAt(i))) {
            let asciiCode = str.charCodeAt(i);
            decryptStrArr.push(String.fromCharCode(asciiCode >= 78 ? asciiCode - 13 : asciiCode + 13));
        } else {
            decryptStrArr.push(str.charAt(i));
        }
    }
    return decryptStrArr.join('');
}

console.log(rot13("SERR PBQR PNZC") == "FREE CODE CAMP");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") == "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")