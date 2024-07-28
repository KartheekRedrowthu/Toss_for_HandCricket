const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');
const declare = document.querySelector('#declare');
const resultText = document.querySelector('#resultText');
const resultContainer = document.querySelector('#resultContainer');
const submitButton = document.querySelector('#submittoss');
const choicecontainer = document.querySelector('#choicecontainer');
const batorbowl=document.querySelector('#batorbowl');
const submitChoiceBtn = document.querySelector('#submitChoice');
const displaychoice=document.querySelector('#displaychoice');


submitButton.addEventListener('click', function() {
    submitButton.classList.add('clicked'); // Add the 'clicked' class
});

submitChoiceBtn.addEventListener('click', function() {
    submitChoiceBtn.classList.add('clicked'); // Add the 'clicked' class
});

var usertoss;
var result,comp,userchoice;

function checkSelection() {
    var ele = document.getElementsByName('toss');
   
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked){
                    usertoss=ele[i].value;
                    break;
                }
            }
            console.log(usertoss);
}

function deferFn(callback, ms) {
  setTimeout(callback, ms); 
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  result = random < 0.5 ? 'Heads' : 'Tails';
 deferFn(function() {
   coin.setAttribute('class', 'animate-' + result);
   deferFn(processResult.bind(null, result), 2900);
 }, 100);
 setTimeout(() => {
    if (usertoss) {
        if(usertoss === result)
            {
                declare.innerText="Whoa! You won the toss!";
                batorbowl.style.display='block';
            }
            else{
                declare.innerText="Oops! The computer won the toss.";
                const choice = Math.random();
                comp = choice < 0.5 ? 'Bat' : 'Bowl';
                choicecontainer.innerText="Computer chooses to "+comp+" first.";
            }
            resultContainer.classList.add('show');
    }
    else{
        alert("Please select your toss before flipping the coin");
    }
}, 3500);
}

submitChoiceBtn.addEventListener('click', function() {
    const userChoiceEle = document.querySelector('input[name="userChoice"]:checked');
    if (userChoiceEle) {
        userchoice = userChoiceEle.value;
        displaychoice.innerText="You chose to "+userchoice+" first";
        batorbowl.classList.remove('show'); 
    } else {
        alert("Please select an option (Bat or Bowl) before submitting.");
    }
});

button.addEventListener('click', flipCoin);

