function getInputField(inputValueId) {
    const inputFieldValue = document.getElementById(inputValueId);
    const getInputFieldValueString = inputFieldValue.value;
    const newInputFieldValueNumber = parseFloat(getInputFieldValueString);
    // console.log(newinputFieldValueNumber);
    inputFieldValue.value = '';

    return newInputFieldValueNumber;

}


function getTextElement(elemetId) {
    const textElementField = document.getElementById(elemetId);
    const textElementFieldValueString = textElementField.innerText;
    const textElementValue = parseFloat(textElementFieldValueString);
    console.log(textElementValue);
    // const textElementValue = parseFloat(textElementFieldValueString);
    return textElementValue;

}

function setElementDepositValueTotal(elemetId, newDeposit) {
    const newDepositTotal = document.getElementById(elemetId);
    newDepositTotal.innerText = newDeposit;

}
function setElementBalanceValueTotal(elemetId, newBalance) {
    const newBalanceTotal = document.getElementById(elemetId);
    newBalanceTotal.innerText = newBalance;

}