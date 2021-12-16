/**
 题目:
 在这道题目中，我们需要写一个函数，把传入的字符串翻译成“儿童黑话”。
儿童黑话的基本转换规则很简单，在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。
1.只需要把一个英文单词的第一个辅音字母或第一组辅音从移到单词的结尾，并在后面加上ay即可。辅音从的意思是连续的多个辅音字母。
2.额外地，如果单词本身是以元音开头的，那只需要在结尾加上way。
3.在本题中，传入的单词一定会是英文单词，且所有字母均为小写。

translatePigLatin("california")应该返回 "aliforniacay"。
translatePigLatin("paragraphs")应该返回 "aragraphspay"。
 */

//S1:遍历字符串, 直到出现一个元音字符, 记录元音的位置
//如果没有元音, 直接在字符串尾加ay
//如果第一个是元音字符, 直接在字符串加way
function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(str.charAt(0)) !== -1) {
        return str + 'way';
    }

    for (let i = 1; i < str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) !== -1) {
            return str.substr(i) + str.substr(0, i) + 'ay';
        }
    }
    return str + 'ay';
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));