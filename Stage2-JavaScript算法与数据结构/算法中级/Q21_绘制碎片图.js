/**
 * 题目:
 * 在这道题目中，我们需要写一个计算天体轨道周期的函数，
 * 它接收一个对象数组参数arr，
 * 对象中包含表示天体名称的name属性，及表示轨道半长轴的avgAlt属性。
 * 就像这样：{name: 'name', avgAlt: avgAlt}
 * 这个函数的返回值也是一个对象数组，应保留原对象中的name属性和值，
 * 然后根据avgAlt属性的值求出轨道周期（单位是秒），并赋值给orbitalPeriod属性。
 * 返回值中不应保留原数据中的avgAlt属性及其对应的值。
 * 
 * 公式:
 * T = 2π 开根(a³/μ)
 * 轨道周期的计算以地球为基准（即环绕地球的轨道周期），计算结果应取整到最接近的整数。
 * 地球的半径a是6367.4447千米，地球的GM值μ为 398600.4418km3s-2。
 */

//S1,没什么意思的一道题,按照公式计算即可
// * T = 2π 开根(a³/μ)
function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    return arr.map(item => {
        let a = Math.pow(earthRadius + item.avgAlt, 3)
        let b = Math.sqrt(a / GM);
        let orbPeriod = Math.round(2 * Math.PI * b);
        return { 'name': item.name, 'orbitalPeriod': orbPeriod, }
    })

}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
]));