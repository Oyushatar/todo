const body = document.getElementsByTagName("body")[0];

const Name = document.getElementById("Name")

const email =document.getElementById("email");

const phoneNumber = document.getElementById("phone");

const password = document.getElementById("pass");
const submitButton = document.getElementById("submitBtn");


function isValidEmail(){
    const emailValue = email.value
    if(emailValue.includes("@") === true){
        return true
    } else {
        alert("This email is wrong Please try again!")
        return false
    }
}


const numbers = [0,1,2,3,4,5,6,7,8,9];
const alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function isValidPhoneNumber(){
    const phoneNumberValue = phoneNumber.value 
    if(phoneNumberValue.length < 8){
        alert("this Number is wrong!!"); 
        return false
    }
    for(let i = 0; i < phoneNumberValue.length; i++){
    if(phoneNumberValue.includes(alphabet[i])){
     alert('this number has alphabet')
     return false
    }
    }
    return true
}


const numbersPass = [0,1,2,3,4,5,6,7,8,9];
const alphabetPass =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function isValidPassword (){
    const passwordValue = password.value;
    if(passwordValue.length < 8){
    alert("this password have to at least 8 length long"); 
    return false
    }
    return true
    // for(let j=0; j < passwordValue.length.length; j++){
    // if(passwordValue.includes(alphabetPass[j]) &&  passwordValue.includes(numbersPass[j])){
    // } else {
    //     alert("this paaword needs word and number")
    // }
    // }
}



submitButton.addEventListener("click", function() {
const isEmailValid = isValidEmail()
const isPasswordValid = isValidPassword()
const isPhoneNumberValid = isValidPhoneNumber()
if(isEmailValid === true && isPasswordValid === true && isPhoneNumberValid === true ){
    window.location.href="./todoList.html"
    localStorage.setItem('Email',email.value);
    localStorage.setItem("Number", phoneNumber.value);
    localStorage.setItem("Name", Name.value)
}
});
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }