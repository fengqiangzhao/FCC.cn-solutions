/**
 题目:
 在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。
 这个函数接收的第一个参数为待替换的句子, 第二个参数为句中需要被替换的单词, 第三个参数为替换后的单词。
 注意：
 你需要保留被替换单词首字母的大小写格式。即如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"

 myReplace("Let us go to the store", "store", "mall")应该返回 "Let us go to the mall"。
 myReplace("He is Sleeping on the couch", "Sleeping", "sitting")应该返回 "He is Sitting on the couch"
 */

//S1: replace替换, 替换前判断目标单词是否首字母大写
function myReplace(str, before, after) {
    let index = str.indexOf(before)
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));