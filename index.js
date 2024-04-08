import inquirer from 'inquirer';
const cur = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.75,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        message: "enter converting currency from",
        type: 'list',
        choices: ['USD', 'EUR', 'GDP', 'PKR']
    },
    {
        name: 'to',
        message: "enter converting currency to",
        type: 'list',
        choices: ['USD', 'EUR', 'GDP', 'PKR']
    },
    {
        name: 'amount',
        message: "amount",
        type: 'number',
        //choices: ['USD','EUR','GDP','PKR']
    }
]);
console.log(user_answer);
let fromamount = cur[user_answer.from];
let toamount = cur[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log("fromamount");
console.log(fromamount);
console.log("toamount");
console.log(toamount);
console.log("amount");
console.log(amount);
console.log("baseamount");
console.log(baseamount);
console.log("convertedamount");
console.log(convertedamount);
