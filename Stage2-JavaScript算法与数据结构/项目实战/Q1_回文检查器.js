/**
 * 题目:
 * 如果给定的一个字符串是回文，那么返回true，否则返回false。
 * 
 */

//S1 以数组的中心点为分界线, 回文字符串的中心点两边的数据应该是一致的
// 1.处理边界条件
// 2.过滤非字母数字的字符
// 3.忽略大小写对比字符
function palindrome(str) {
    // 处理边界
    if (str == null || str.length == 0) {
        return true;
    }

    //处理非字母数字字符函数
    isAlphaNumeric = function(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
    }

    //对比字符函数
    isEqualIgnoreCase = function(charA, charB) {
        if (charA >= 'A' && charA <= 'Z') { charA = charA.toLowerCase() }
        if (charB >= 'A' && charB <= 'Z') { charB = charB.toLowerCase() }
        return charA == charB;
    }

    //从中间往两端依次对比字符,跳过无效字符
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        while (i < j && !isAlphaNumeric(str.charAt(i))) { i++; }
        while (i < j && !isAlphaNumeric(str.charAt(j))) { j--; }

        if (i < j && !isEqualIgnoreCase(str.charAt(i), str.charAt(j))) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye") == true);
console.log(palindrome("A man, a plan, a canal. Panama") == true);
console.log(palindrome("My age is 0, 0 si ega ym.") == true);
console.log(palindrome("0_0 (: /-\ :) 0-0") == true);
console.log(palindrome("1 eye for of 1 eye.") == false);
console.log(palindrome("") == true);