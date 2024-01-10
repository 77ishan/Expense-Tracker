const { functions } = require("cypress/types/lodash");

const balance = document.getElementById(
    "balance"
);
const money_plus=document.getElementById('money-plus');
const money_minus=document.getElementById('money-minus');
const list=document.getElementById('list');
const form=document.getElementById('form');
const text=document.getElementById('text');
const amount=document.getElementById('amount');

const dummyTransactions = [
{ id: 1 , text: "Flower", amount: -20 },
{ id: 2 , text:"Salary", amount: 500 },
{ id:3 , text:"Book", amount: -10 } ,
{ id:4 , text:"camera", amount: -150 },

];

let Transactions = dummyTransactions;

function addTransactionDOM(transaction){
  
    const sign =transaction.amount < 0 ? "-" : "+" ;
    const item =document.createElement("li");

    item.classList.add(
        transaction[0].amount < 0 ? "minus" : "plus"
    )
    item.innerHTML=`
    ${transaction[0].text}<span>${sign}${Math.abs(
        transaction[0].amount
        )}</span>
    <button class="delete-btn" onclick="">X</button>
    `;

    list.appendChild(item);


}
//update values
function updateValues(){
    const amount = transaction.map(transaction => transaction.amount);
    const total =amounts.reduce((acc,items) => (acc += items),0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc,item)=>(acc +=item),0)*-1
    ).toFixed(2);
}
function Init(){
    list.innerHTML="";
    transactions.foreach(addTransactionDOM);
    updateValues();


}
addTransactionDOM(Transactions);
