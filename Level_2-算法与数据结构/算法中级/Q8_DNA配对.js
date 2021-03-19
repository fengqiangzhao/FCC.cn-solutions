/**
 题目:
 在这道题目中，我们需要写一个函数，为 DNA 中的碱基配对。这个函数只接收一个表示碱基的字符串为参数，最后返回完成配对的二维数组。
 碱基对 由一对碱基组成。碱基有四种，分别为 A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）和 C（胞嘧啶）。配对原则是：A 与 T 配对，C 与 G 配对。我们需要根据这个原则对传入的所有碱基进行配对。
 对于每个传入的碱基，我们应采用数组的形式展示配对结果。其中，传入的碱基需要作为数组的第一个元素出现。最终返回的数组中应当包含参数中每一个碱基的配对结果。

 比如，传入的参数是 GCG，那么函数的返回值应为 [["G", "C"], ["C","G"],["G", "C"]]

 pairElement("CTCTA")应该返回[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]。
 */

//S1: 使用字典保存映射关系
function pairElement(str) {
    const mapping = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    };
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let item = str.charAt(i);
        arr.push([item, mapping[item]]);
    }
    return arr;
}


//S2: switch分支判断
function pairElementS2(str) {
    let strArr = str.split("");
    let resArr = [];

    strArr.map(v => {
        switch (v) {
            case 'A':
                resArr.push(['A', 'T']);
                break;
            case 'T':
                resArr.push(['T', 'A']);
                break;
            case 'G':
                resArr.push(['G', 'C']);
                break;
            case 'C':
                resArr.push(['C', 'G']);
                break;
        }
    });

    return resArr;
}

console.log(pairElement("CTCTA"));
console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElementS2("TTGAG"));