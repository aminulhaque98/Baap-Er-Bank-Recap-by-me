document.getElementById('btn-Withdraw').addEventListener('click', function () {

    const newWithdrawBalance = getInputField('user-withdraw');
    // console.log(newWithdrawBalance)

    // get previous balance --------

    const previousTotalWithdrawElementValue = getTextElement('Withdrow-Total');

    const newTotalWithdraw = previousTotalWithdrawElementValue + newWithdrawBalance;
    console.log(newTotalWithdraw);

    const setWithdrawTotal = setElementDepositValueTotal('Withdrow-Total', newTotalWithdraw);
    // console.log(setWithdrawTotal)
    // total balance -----------------

    const previousTotalBalanceFieldValue = getTextElement('Total-balance');

    const newTotalBalance = previousTotalBalanceFieldValue - newWithdrawBalance;

    setElementBalanceValueTotal('Total-balance', newTotalBalance);


})