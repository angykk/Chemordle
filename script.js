const elements = {
"hydrogen": ["gas", 1, 1, "non-metal", 1],
  "helium": ["gas", 1, 2, "noble gas", 2],
  "lithium": ["solid", 1, 1, "alkali metal", 3],
  "beryllium": ["solid", 2, 2, "alkaline earth metal", 4],
  "boron": ["solid", 13, 3, "metalloid", 5],
  "carbon": ["solid", 14, 4, "nonmetal", 6],
  "nitrogen": ["gas", 15, 5, "nonmetal", 7],
  "oxygen": ["gas", 16, 6, "nonmetal", 8],
  "fluorine": ["gas", 17, 7, "halogen", 9],
  "neon": ["gas", 18, 8, "noble gas", 10],
  "sodium": ["solid", 1, 1, "alkali metal", 11],
  "magnesium": ["solid", 2, 2, "alkaline earth metal", 12],
  "aluminum": ["solid", 13, 3, "post-transition metal", 13],
  "silicon": ["solid", 14, 4, "metalloid", 14],
  "phosphorus": ["solid", 15, 5, "nonmetal", 15],
  "sulfur": ["solid", 16, 6, "nonmetal", 16],
  "chlorine": ["gas", 17, 7, "halogen", 17],
  "argon": ["gas", 18, 8, "noble gas", 18],
  "potassium": ["solid", 1, 1, "alkali metal", 19]
}

const tableHeaders = ["Standard State", "Chemical Group", "Valence Electrons", "Chemical Class", "Total Electrons"];

let guessesLeft = 6;

var getRandomProperty = function (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};

const title = document.getElementById("title");

let div = document.createElement("ul");
div.classList.add("stylised_list");

Object.keys(elements).forEach((key) => {
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(key));
    div.appendChild(list);
});
title.appendChild(div);


let chosen =  getRandomProperty(elements);
console.log(chosen);
initTable();

let printGuess = document.getElementById("guess");
printGuess.appendChild(document.createTextNode(guessesLeft));

function initTable(){
    const divTable = document.getElementById("divTable");
    const newTable = document.createElement("table");

    for(let x = 0; x < tableHeaders.length; x ++){
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(tableHeaders[x]));
        newTable.appendChild(td);
    }

    divTable.appendChild(newTable);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submit(event);
    }
});

function addRow(guess){
    const table = document.getElementById("divTable");
    const row = document.createElement("table");

    if(elements[chosen] === elements[guess]){
        printGuess.textContent =  "You win!"
    }
    else if(guessesLeft === 1){
        printGuess.textContent = "You lose..."
    }
    else if(!elements.hasOwnProperty(guess)){
        printGuess.textContent = "Invalid Guess"
    }
    else{
        guessesLeft --;
        printGuess.textContent = "Guesses Left: " + guessesLeft;
    }
    for(var x = 0; x < tableHeaders.length; x ++){
            var cell = document.createElement("td");
            cell.appendChild(document.createTextNode(elements[guess][x]));
            if(elements[chosen][x] === elements[guess][x]){
                cell.style.backgroundColor = "green";
            }
            else{
                cell.style.backgroundColor = "red";
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    
}

function submit(event){

    event.preventDefault();
    var guessInput = document.getElementById("userGuess");
    var guess = document.getElementById("userGuess").value.toLowerCase();
    guessInput.value = "";
    addRow(guess);
}

