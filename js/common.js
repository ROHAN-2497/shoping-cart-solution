function getTextElementValueById (elementId){
    const phoneTotalElement = document.getElementById('elementId');
    const currentPhoneNumberString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneNumberString);
return currentPhoneTotal ;

}
function calculateSubTotal (){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
const subTotalElement = document.getElementById('sub-total');
subTotalElement.innerText = currentSubTotal;
}