/**
 * 题目:
 * 在这道题目中，我们需要写一个构造器（constructor）函数。
 * 它只接收一个字符串参数firstAndLast，这个参数代表一个英文名的全名（姓和名）。
 * 这个构造函数创建出的实例需要具有以下方法：
 * getFirstName() 
 * getLastName()
 * getFullName() 
 * setFirstName(first) 
 * setLastName(last) 
 * setFullName(firstAndLast)
 * 
 * Object.keys(bob).length应该返回 6。
 * bob instanceof Person应该返回true。
 * bob.firstName应该返回undefined。
 * bob.lastName应该返回undefined。
 * bob.getFirstName()应该返回 "Bob"。
 * bob.getLastName()应该返回 "Ross"。
 * bob.getFullName()应该返回 "Bob Ross"。

 */


//s1
//需要注意的是不能把fullName设置为类属性,不然数量就会是6了
var Person = function(firstAndLast) {
    let fullName = firstAndLast
        // 请先写出这个方法。其他方法的写法与这个类似
    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };
    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');

console.log(typeof bob)
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());