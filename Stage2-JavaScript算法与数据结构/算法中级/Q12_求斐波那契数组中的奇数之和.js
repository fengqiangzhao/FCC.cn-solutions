/**
 * 题目:
 * 在这道题目中，我们需要写一个函数，参数为一个正整数num。
 * 它的作用是计算斐波那契数列中，小于或等于num的奇数之和。
 * 斐波那契数列中，第一和第二个数字都是 1，后面的每个数字由之前两数相加得出。
 * 斐波那契数列的前六个数字分别为 1、1、2、3、5、8。
 * 
 * sumFibs(1000)应该返回 1785
 * sumFibs(4000000)应该返回 4613732
 */

//S1: 循环
function sumFibs(num) {
    let res = 0;
    let pre = 0;
    let cur = 1;
    while (cur <= num) {
        if (cur % 2 == 1) {
            res += cur;
        }
        cur += pre;
        pre = cur - pre;
    }
    return res;
}

console.log(sumFibs(1000));
console.log(sumFibs(4000000));