const displayOtp = document.getElementById("displayOtp")
const sendOtp = document.getElementById("sendOtp")
const submitOtp = document.getElementById("submitOtp")
const inputOtp = document.getElementById("inputOtp")
const displayMessage = document.getElementById("displayMessage")
const resetOtp = document.getElementById("resetOtp")
let min = 100000;
let max = 900000;
let otp;
 sendOtp.onclick = function (){
     otp = Math.floor(min + Math.random()*max).toString()
    displayOtp.innerHTML = otp;
    console.log(otp)
 }
 resetOtp.onclick = function (){
    location.reload()
 } 
submitOtp.addEventListener("submit",otpResult)
function otpResult(e) {
    e.preventDefault()
    let otpValue = inputOtp.value    
    if(otpValue == otp){
        displayMessage.textContent = "Your OTP has matched successfully."
        displayMessage.style.color = "green"
    }
    else{
        displayMessage.textContent = "Error ! Your OTP doesn't match."
        displayMessage.style.color = "red"
    }
    setTimeout(removeInput,100)
    function removeInput() {
        inputOtp.value = ""
    }   
    setTimeout(removeDisplay,5000)
    function removeDisplay() {
        displayMessage.style.display = "none"
    }  

}        

