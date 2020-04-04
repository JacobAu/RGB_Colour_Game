var numSquares = 6;
var colours = generateRandomColours(numSquares);
var titleDisplay = document.querySelector("h1");
var squareList = document.querySelectorAll(".square");
var pickedColour;
var colourDisplay = document.querySelector("#colourDisplay");
colourDisplay.textContent = pickedColour;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init(); 

function init(){
    // Mode button event listeners
    setUpModeButtons();
    //initialize title and message event listeners
    setUpSquares()
    setUpResetButton();
    reset();  
}

function reset(){
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    resetButton.textContent = "New Colours";
    for(let i=0; i<squareList.length;i++){
        if(colours[i]){
            squareList[i].style.display = "block";
            squareList[i].style.backgroundColor = colours[i];
        }
        else{
            squareList[i].style.display ="none";
        }
    }
    titleDisplay.style.backgroundColor = "steelblue";  
    colourDisplay.textContent = pickedColour;
}

function setUpSquares(){
    for(let i = 0 ; i < squareList.length;i++){
        //add click listeners to squares
        squareList[i].addEventListener("click",function(){
            if(this.style.backgroundColor === pickedColour){
                messageDisplay.textContent = "Correct!";
                changeColour(pickedColour);
                titleDisplay.style.backgroundColor = pickedColour;
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    } 
}
function setUpResetButton(){
    resetButton.addEventListener("click",function(){
        reset();
    });
}
function setUpModeButtons(){
    for(let i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.TextContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function generateRandomColours(num){
    var finalArr= [];
    for(let i=0; i < num; i++){
        finalArr.push(randomColour());
    }
    return finalArr 
}
// picks random colour for generateRandomColours()
function randomColour(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// change colour of all the squares (on a win)
function changeColour(color){
    for(let i=0; i< squareList.length;i++){
        squareList[i].style.backgroundColor = color;
    }
}

// picks the answer colour
function pickColour(){
    var index = Math.floor(Math.random() *colours.length);
    return colours[index];
}