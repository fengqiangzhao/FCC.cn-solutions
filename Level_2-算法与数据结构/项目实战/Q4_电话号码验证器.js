/**
 * 题目:
 * 如果传入的字符串是一个有效的美国电话号码格式，则返回true。
 * 只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。
 * 以下是一些正确的例子（其他格式变形请参考以下例子）：
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
 * 在这个挑战中，你将会看到例如800-692-7753或者8oo-six427676;laskdjf的号码。
 * 你的任务是根据上面不同的格式组合，判断它是否美国号码。
 * 区号是必须的。
 * 如果提供国家代码，则必须确认国家代为1。
 * 如果这是有效的美国电话就返回true，否则返回false。
 */

function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str)
}

console.log(telephoneCheck("555-555-5555") == true);
console.log(telephoneCheck("5555555555") == true);
console.log(telephoneCheck("1(555)555-5555") == true);
console.log(telephoneCheck("1 (555) 555-5555") == true);
console.log(telephoneCheck("55555555") == false);