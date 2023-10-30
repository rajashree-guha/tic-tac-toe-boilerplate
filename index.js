// declaring winning Combinations

let winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7], 
  ];

// accessing all boxes

let boxelement = document.querySelectorAll(".box");

// providing event listener to all the boxes

for (elem of boxelement) {
  elem.addEventListener("click", handleClick);
}

let click = 0;
let isWon = false;
let xAttempts = [];
let oAttempts = [];

// declaring function handleClick

function handleClick(event) {
  let id = event.target.id;
  let ptag = document.createElement("p");
  ptag.style.color = "#FAB201";
  boxelement[id - 1].appendChild(ptag);

  if (click % 2 == 0) {
    ptag.textContent = "X";
    click++;
    xAttempts.push(parseInt(id));
    result(xAttempts, "X");
  } else {
    ptag.textContent = "O";
    click++;
    oAttempts.push(parseInt(id));
    result(oAttempts, "O");
  }

  if(click == 9 && isWon== false){
    resultbox.style.visibility = "visible";
    messagebox.textContent = "It is a Draw";
  }
}

// declaring variable 
let resultbox = document.getElementById("result");
let messagebox = document.getElementById("message");

// declaring function result 
function result(playerArray, player) {
for (let i = 0; i < winningCombinations.length; i++) {

    let check = true;

    for (let j = 0; j < winningCombinations[i].length; j++) {
      if (playerArray.includes(winningCombinations[i][j]) == false) {
        check = false;
        break;
      }
    }
    if (check == true) {
      isWon = true;
      resultbox.style.visibility = "visible";
      messagebox.textContent = player+" Won the Match";
    }
  }
}

let playbtn = document.getElementById("button")

playbtn.onclick=()=>{
    window.location.reload();
}