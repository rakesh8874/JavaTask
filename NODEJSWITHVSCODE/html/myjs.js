let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let dob = document.getElementById('dob');
let department = document.getElementById('department');
let gender = document.getElementsByName('gender');
let email = document.getElementById('email');
let password = document.getElementById('password');
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let dobError = document.getElementById('dobError');
let departmentError = document.getElementById('departmentError');
let genderError = document.getElementById('genderError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let contactNo = document.getElementById('contact');
let contactErr = document.getElementById('contactErr');
let form = document.forms['myForm'];

let pattern = /^[789]\d{9}$/;
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


let checkGender = false;




let formData = [];

 let date = new Date();
let day = date.getDate();
if(day<10){
    day = "0"+day;
}
let month = date.getMonth()+1;
if(month<10){
    month = "0"+month;
}
let year = date.getFullYear()-18;
let fullDate = year+"-"+month+"-"+day;

dob.setAttribute('max', fullDate);

function submitDetails(e){
    e.preventDefault();
    if(firstName.value.length == 0){
        firstNameError.innerHTML = "First Name Required";
        return false;
    }

    if(firstName.value.length < 2){
        firstNameError.innerHTML = "First Name Can't be less than 2 Char";
        return false;
    }

    if(lastName.value.length == 0){
        lastNameError.innerHTML = "Last Name Required";
        return false;
    }

    if(lastName.value.length < 2){
        lastNameError.innerHTML = "Last Name Can't Be Less Than 2 Char";
        return false;
    }
    if(dob.value.length == 0){
        dobError.innerHTML = "DOB Required";
        return false;
    }

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          checkGender = true;
          break;
        }
      }

    if(!checkGender){
        genderError.innerHTML = "Gender Can't be blank";
        return false;
    }

    if(department.value == ""){
      departmentError.innerHTML="Please Select Department"
      return false;
    }

    if(contactNo.value == ""){
      contactErr.innerHTML = "Please Provide Contact No";
      return false;
    }
     
    if(!pattern.test(contactNo.value)){
        contactErr.innerHTML = "Please Provide Valid Contact No";
        return false;
    }
    
    if(email.value == ""){
        emailError.innerHTML = "Email Id Required";
        return false;
    }

    if(!emailPattern.test(email.value))
     {
        emailError.innerHTML = "Please Provide Valid Email id";
        return false;
     }    
    
     if(password.value == ""){
        passwordError.innerHTML = "Password Required";
        return false;
     }

     if(!passwordPattern.test(password.value))
        {
            passwordError.innerHTML = "Please Provide Valid Password having 8 digit"+
            "with atleast 1 uppercase 1 lowercase including special symbol and digit";
            return false;
        }    
     let formObj = {
        firstName:firstName.value,
        lastName:lastName.value,
        dob:dob.value,
        department:department.value,
        contactNo:contactNo.value,
        email:email.value
     }

     let formData = new FormData(form);

     const xhr = new XMLHttpRequest();

     xhr.open('POST', 'http://localhost:3000/posts', true);
     xhr.getResponseHeader('Content-type', 'application/json');
    
    xhr.onload = function(){
        console.log(this.responseText);
    }

     xhr.send(formData);

     form.reset();  
     formData.push(formObj);
     console.log(formData);

     firstNameError.innerHTML = "";
     lastNameError.innerHTML = "";   
     dobError.innerHTML = "";
     genderError.innerHTML = "";
     passwordError.innerHTML = "";
     emailError.innerHTML = "";
     contactErr.innerHTML = "";
     departmentError.innerHTML="";
     return false;
}

 