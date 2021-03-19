/**
 * 题目:
 * 在这道题目中，我们需要写一个函数，它接收一个数字参数num，返回值为不大于这个数字的所有质数之和。
 * 质数是大于 1 且仅可以被 1 和自己整除的数。比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。
 * 注意，传入函数的num不一定是质数。
 * 
 * sumPrimes(10) 应该返回 17
 * sumPrimes(977)应该返回 73156
 */

//S1:循环
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (i <= 3) {
            sum += i;
            continue;
        }
        let flag = true;
        let sqrt = Number(Math.sqrt(i));
        for (let j = 2; j <= sqrt; j++) {
            if (i % j == 0) {
                flag = false
                break;
            }
        }
        if (flag) {
            sum += i;
        }
    }
    return sum;
}


//S2:递归
function sumPrimesS2(num) {
    function isPrime(n) {
        let sqrt = Number(Math.sqrt(n));
        for (let i = 2; i <= sqrt; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    if (num === 1) {
        return 0;
    } else if (!isPrime(num)) {
        return sumPrimesS2(num - 1);
    } else {
        return num + sumPrimesS2(num - 1);
    }
}

console.log(sumPrimes(977));
console.log(sumPrimesS2(977))