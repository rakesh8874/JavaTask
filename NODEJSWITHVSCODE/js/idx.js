function formatPhoneNumber(value){
    if(!value) return value;
    const phoneNumber = value.replace(/[^d\d]/g,'');
    const phoneNumberLength = phoneNumber.length;
     if(phoneNumberLength<4) return phoneNumber;
    if(phoneNumberLength<7){
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}`;
    }
     return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
}

function phoneNumberFormat(value){
    const inputField = document.getElementById('phone-number');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

function handleDateChange(){
    let date_picker = document.getElementById("custome-date").value;
    changeFormat(date_picker);
}


function changeFormat(value){
 const myArr = value.split("-");
 let year = myArr[0];
 let month = myArr[1];
 let day = myArr[2];
 let formattedDate = month+''+day+''+year;
 return formattedDate;
}