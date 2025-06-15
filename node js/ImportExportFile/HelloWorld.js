vijay = {
    name: "Vijay Kumar Gupta",
    age: 20,
    developer: true
}


let balance = 200;
const account = (currMoney) => {
    balance = balance + currMoney;
    return balance;
}

module.exports = {vijay, account};
