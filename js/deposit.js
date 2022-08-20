

// click handler --------------------------

document.getElementById('btn-Deposit').addEventListener('click', function () {

    const newDepositValue = getInputField('user-Deposit');


    // deposit -------------------------
    const previousTotalDeposittFieldValue = getTextElement('Deposit-Total');

    const newTotalDeposit = previousTotalDeposittFieldValue + newDepositValue;

    setElementDepositValueTotal('Deposit-Total', newTotalDeposit);

    // balance -----------------

    const previousTotalBalanceFieldValue = getTextElement('Total-balance');

    const newTotalBalance = previousTotalBalanceFieldValue + newDepositValue;

    setElementBalanceValueTotal('Total-balance', newTotalBalance);

})