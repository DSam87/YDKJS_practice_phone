


// Constant Variables
const SPENDING_THRESHOLD = 200;
const PHONE_PRICE = 99.99;
const ACCESSORIES = 10.99;
const TAX = 0.08;

let bankAccountBalance = prompt("How much do you have in your bank?");
bankAccountBalance = Number(bankAccountBalance);
buyPhoneAndAccessories();




// buyPhone&accessories
function buyPhoneAndAccessories(){
    let cost = PHONE_PRICE + ACCESSORIES;
    let curentCost = cost + (cost * TAX);
    let totalAmount = 0;
    cal();

    function cal(){
        while(bankAccountBalance > curentCost){
            bankAccountBalance = bankAccountBalance - curentCost;
            totalAmount =  totalAmount+curentCost;
        }

            format(totalAmount);
        

    }

}

function format(totalAmount){

    let totalCost = Number(totalAmount);


    alert("The total cost is $" + totalCost.toFixed(2) + " and you have " + "$"+ bankAccountBalance.toFixed(2) + " left."  );

}


//check if you can





//