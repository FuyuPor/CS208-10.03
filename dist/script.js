const submit = document.getElementById("submitButton");
let results = document.getElementById("results");

submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    myLineUp();
    });

// concats status, date, and players into console and new line
function myLineUp() {
    let string = ("Status: " + getStatus() + " | Date: " + getDate() + " | Players: " + getPlayers());
    console.log(string);
    results.innerHTML = ("<p>" + string + "</p>");
}

// get Status
function getStatus(){
    const status = document.querySelector('input[name=status]:checked');
    return status.value;
}

// get Date
function getDate(){
    const dateSelect = document.getElementById("date-select");
    const dateIndex = dateSelect.selectedIndex;
    const date = dateSelect.options[dateIndex].text;
    return date;
}

// get Players
function getPlayers(){
    const players = document.querySelectorAll('input[name=players]:checked');
    let playerString = "";
    if (players.length == 0){
        return "No Players"
    }

    for (let i = 0; i < players.length; i++) {
        playerString += players[i].value;

        if (i < players.length - 1){
            playerString += ", "
        }
    }
    return playerString;
}