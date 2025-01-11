
let playGame = document.getElementById("playGame")
playGame.addEventListener("click",playGame)


function playGame(){
    let getGuess = document.getElementById("guess").value
    let displayNumber1 = document.getElementById("box1")
    displayNumber1.innerHTML = guessingNum;
    getGuess = Number(getGuess)
let minNum = 50 ;
let maxNum = 100;
let guessingNum = Math.floor(Math.random() * (maxNum-minNum + 1) + minNum)
//console.log(guessingNum)
   
let attempt = 0 ;
let runing = true;
while(runing){

    if(isNaN(getGuess)){
        window.alert("Enter a valid Number")
    }
    else if(getGuess < minNum || getGuess > maxNum){
        window.alert("Enter a valid Number") 
    }
    else{
        attempt ++
        if(getGuess < guessingNum){
            window.alert("Too low ! try again")
        }
        else if (getGuess > guessingNum){
            window.alert("Too high ! try again")
        }
        else{
            window.alert(`Wellldone ! You have matched ${attempt}.`)
            runing = false;

        }
    }
   
}

}
