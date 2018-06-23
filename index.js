var numSquares = 6;
var colors =generateRandomColors(numSquares);
var  h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var gameOver = false;
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

for (var i =0; i<modeBtn.length;i++){
    modeBtn[i].addEventListener("click" , function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        //One line if  statementS
        this.textContent ==="Easy" ? numSquares=3: numSquares=6;
        reset();
        //figure out squares to show
        //pick new colors
        //pick a new picked color
        //update page to reflect changes
    })
}
function reset(){
    gameOver = false;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to matched color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i =0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background=colors[i];}
        else{squares[i].style.display = "none";}
    }
}
/*
easy.addEventListener("click" , function (){
    easy.classList.add ("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    gameOver = false;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();colorDisplay.textContent = pickedColor;
    for (var i =0; i<squares.length;i++){
        if(colors[i]){squares[i].style.background=colors[i];}
        else{squares[i].style.display = "none";}
    }
    });
hard.addEventListener("click" , function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    resetButton.textContent = "New Colors";
    gameOver = false;
    pickedColor = pickColor();colorDisplay.textContent = pickedColor;
    for (var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});
*/

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length ; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of picked color
        var clickedColor = this.style.background;
        //compare picked color to clicked color
        if (clickedColor === pickedColor && !gameOver){
            messageDisplay.textContent = "Correct!!";
            messageDisplay.style.color = clickedColor;
            resetButton.textContent = "Play Again??";
            gameOver = true;
            changeColors(clickedColor);
        } else if(!gameOver) {
            this.style.background = "#232323";
            messageDisplay.textContent = "Wrong";
            messageDisplay.style.color = clickedColor;
        }
    });
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length );
   return colors[random];
}

function generateRandomColors(num){
        //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i<num;i++){
        arr.push(randomColor())
        //get random colors and push into array

    }
    // return that array
    return arr;
}
function randomColor() {
     //pick a red from 0- 255
    var r = Math.floor(Math.random() *256);
    //pick a green from 0- 255
    var g = Math.floor(Math.random() *256);
    //pick a blue from 0- 255
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click" , function(){
  reset();
});