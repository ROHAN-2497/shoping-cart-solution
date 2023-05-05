function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber ;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhonePrice (newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
    

}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
const newPhoneNumber = updatePhoneNumber (true)
updatePhonePrice(newPhoneNumber);

calculateSubTotal ()


})    

document.getElementById('btn-phone-minus').addEventListener('click', function(){
 const newPhoneNumber =  updatePhoneNumber(false)
 updatePhonePrice(newPhoneNumber);
 
 calculateSubTotal ()


})
// document.getElementById('btn-phone-plus').addEventListener('click', function(){
// const phoneNumberField = document.getElementById('phone-number-field');
// const phoneNumberString = phoneNumberField.value;
// const previousPhoneNumber = parseInt(phoneNumberString);

// const newPhoneNumber = previousPhoneNumber + 1 ;
// phoneNumberField.value = newPhoneNumber;
// })

// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     const newPhoneNumber = previousPhoneNumber - 1;
//     phoneNumberField.value = newPhoneNumber;


//     const PhoneTotal =document.getElementById('phone-total');
//     const phoneTotalString = PhoneTotal.innerText;
//     const newPhoneTotal = parseInt(phoneTotalString);
    
//     const newPhonePirce = newPhoneTotal * 1219;
//     PhoneTotal.innerText = newPhonePirce;
// })




