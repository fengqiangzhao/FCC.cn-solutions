/**
 * 题目:
 * 在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有&、<、>、"（双引号）和'（单引号）
 * convertHTML("Dolce & Gabbana")应该返回Dolce &​amp; Gabbana。
 * convertHTML("Hamburgers < Pizza < Tacos")应该返回Hamburgers &​lt; Pizza &​lt; Tacos
 */

//S1:使用字典存储实体映射关系
function convertHTML(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': "&apos;"
    };

    return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML("Sixty > twelve"));