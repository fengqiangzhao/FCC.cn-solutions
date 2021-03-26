/**
 * 题目:
 * 编写一个用于收银机的函数checkCashRegister()，
 * 传入售价为第一个参数（price）、支付金额为第二个参数（cash）、收银机內的金额为第三个参数（cid）
 * cid是包含货币面值的二维数组。
 * 函数checkCashRegister()必须返回含有status键值和change键值的对象。
 * 如果收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目时，返回{status: "INSUFFICIENT_FUNDS", change: []}
 * 如果收银机內的金额等于应找回的零钱数，返回{status: "CLOSED", change: [...]}，其中change键值是收银机內的金额。
 * 否则，返回{status: "OPEN", change: [...]}，其中change键值是应找回的零钱数，并且它的面值由高到低排序。
 * 
 */

function checkCashRegister(price, cash, cid) {
    let denom = [{
            name: 'ONE HUNDRED',
            val: 100.00
        },
        {
            name: 'TWENTY',
            val: 20.00
        },
        {
            name: 'TEN',
            val: 10.00
        },
        {
            name: 'FIVE',
            val: 5.00
        },
        {
            name: 'ONE',
            val: 1.00
        },
        {
            name: 'QUARTER',
            val: 0.25
        },
        {
            name: 'DIME',
            val: 0.10
        },
        {
            name: 'NICKEL',
            val: 0.05
        },
        {
            name: 'PENNY',
            val: 0.01
        }
    ];
    let change = cash - price;
    let changeInfo = {
        'status': null,
        'change': []
    };
    let register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {
        total: 0
    });

    if (register.total === change) {
        changeInfo.status = 'CLOSED';
        changeInfo.change = cid;
        return changeInfo;
    }

    if (register.total < change) {
        changeInfo.status = 'INSUFFICIENT_FUNDS';
        return changeInfo;
    }

    for (let item of denom) {
        let value = 0;
        while (register[item.name] > 0 && change >= item.val) {
            change -= item.val;
            register[item.name] -= item.val;
            change = Math.round(change * 100) / 100;
            value += item.val;
        }
        if (value > 0) {
            changeInfo.change.push([item.name, value]);
        }
    }

    if (change > 0) {
        changeInfo.status = 'INSUFFICIENT_FUNDS';
        changeInfo.change = [];
    } else {
        changeInfo.status = 'OPEN';
    }
    return changeInfo;
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]));

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));