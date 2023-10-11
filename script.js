let RandomNum =parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInputt = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi  = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p =document.createElement('p');


let prevGuess = [];

let numGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInputt.value);
        console.log(guess);
        validateGuess(guess)

    })
}

function validateGuess(guess){
 if(isNaN(guess)){
    alert("Enter a valid number")

 }
 else if(guess<1){
    alert("enter a number more than 1");
 }

 else if(guess >100){
       alert("enter a number less then 100")
 }
 else{
    prevGuess.push(guess)
    if(numGuess ===11){
          displayGuess(guess)
          displayMessage(`Game Over: Random Number Was ${RandomNum}`);
          endGame();

    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
 }
}

function checkGuess(guess){
    if(guess === RandomNum){
          displayMessage(`You guessed it Right`);
          endGame();
    }

    else if(guess < RandomNum){
        displayMessage(`Number is too Low`);
    }

    else if(guess > RandomNum){
        displayMessage(`Number is too high`);
    }
}


function displayGuess(guess){
  userInputt.value="";
  guessSlot.innerHTML+=` ${guess}`;
 numGuess++;
 remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
        LowOrHi.innerHTML = `<h2> ${message}`
}

 
function endGame(){
userInputt.value = '';
userInputt.setAttribute('disabled', '');
p.classList.add("button");
p.innerHTML = `<h3 id="newgame"> Start new Game <h3/>`;
startOver.appendChild(p);
playGame = false;
newGame()

}


function newGame()
{
 const newGameBtn=  document.querySelector('#newgame');

 newGameBtn.addEventListener('click', function(e){
     RandomNum = parseInt(Math.random() * 100 + 1);
     prevGuess= [];
     numGuess = 1;
     guessSlot.innerHTML= '';
     remaining.innerHTML = `${11 - numGuess}`;
     userInputt.removeAttribute("disabled");
     startOver.removeChild(p);
     playGame= true;
 })
}
