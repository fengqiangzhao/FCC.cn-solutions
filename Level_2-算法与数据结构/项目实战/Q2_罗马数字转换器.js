/**
 * 把传入的数字转变为罗马数字。
 * 转换后的罗马数字字母必须都是大写。
 * 
 * convertToRoman(2)应该返回 "II"
 * convertToRoman(3)应该返回 "III"
 * convertToRoman(29)应该返回 "XXIX"。
 * convertToRoman(68)应该返回 "LXVIII"。
 */

//S1:贪心算法, 来自Leetcode, 
// https: //leetcode-cn.com/problems/integer-to-roman/solution/tan-xin-suan-fa-by-liweiwei1419/
//列出所有的基本字符组成单元, 从大到小依次的比对
function convertToRoman(num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let index = 0;
    let romanStrArr = [];
    while (index < 13) {
        while (num >= nums[index]) {
            romanStrArr.push(romans[index]);
            num -= nums[index];
        }
        index++;
    }
    return romanStrArr.join('');
}

console.log(convertToRoman(4) == 'IV')
console.log(convertToRoman(12) == 'XII')
console.log(convertToRoman(44) == 'XLIV');
console.log(convertToRoman(798) == 'DCCXCVIII');
console.log(convertToRoman(3999) == 'MMMCMXCIX');