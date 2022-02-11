// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the Element depostied 
    const depositInput = document.getElementById('deposit-input');

    // get the new deposit and convert to number
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // get the deposit total and convert to number
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    // plus between new deposit with previous deposit
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    // show the total output of deposit in deposit field
    depositTotal.innerText = newDepositTotal;


    // update total account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the input text
    depositInput.value = '';
});

// handle withdraw with event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get withdraw input field and convert to number 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // get previous withdraw total and convert to number
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);

    // plus and make withdraw total amount 
    const newWithdrawTotal = previousWithdraw + newWithdrawAmount;

    // set withdraw total 
    withdrawTotal.innerText = newWithdrawTotal;

    // set account balance with withdraw amount 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    // total amount with withdraw
    const totalAmount = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = totalAmount;



    // clean the withdraw input field 
    withdrawInput.value = '';

});
