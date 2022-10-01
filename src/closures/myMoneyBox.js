// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: ${saveCoins}`);  
// }
// moneyBox(5);
// moneyBox(5);

function MoneyBox(){
    let saveCoins = 0;

    function coinCounter(coins){
        saveCoins += coins;
        console.log(`MoneyBox ${saveCoins}`)
    }
    return coinCounter;
}

const myMoneyBox = MoneyBox();
myMoneyBox(5);
myMoneyBox(20);


const moneyBoxAlex = MoneyBox();
moneyBoxAlex(10);
moneyBoxAlex(23);