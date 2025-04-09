const inputText = document.getElementById('input');
const button = document.getElementById('button');
const outputText = document.getElementById('output');
let inputTextValue;
inputText.addEventListener('keyup',()=>{
    inputTextValue = document.getElementById('input').value.replace(/[^a-z0-9]/gi,'');
    button.classList.add('active');
    if(inputTextValue.length === 0){
        button.classList.remove('active');
    }
   
});
let reverseTextValue;
button.addEventListener('click',() =>{
    reverseTextValue = inputTextValue.split('').reverse().join('');
    if(reverseTextValue === inputTextValue){
        outputText.innerHTML = 'Yes!This is a palindrome.';
        outputText.style.color = 'green';
        outputText.style.visibility = 'visible';
    }
    else{
        outputText.innerHTML = 'Oh no!This is not a palindrome.';
        outputText.style.color = 'red';
        outputText.style.visibility = 'visible';

    }
    if(inputText === ''){
        outputText.innerHTML = 'Please enter a valid input.';
        outputText.style.visibility = 'hidden';
    }
   


} )