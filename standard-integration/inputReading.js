



function trySubmit(event){
    alert('try submit');
    let teamName = document.getElementById("TeamName").value;
    let playerOneName = document.getElementById("PlayerOne").value;
    let playerTwoName = document.getElementById("PlayerTwo").value;
    createCheckout(teamName, playerOneName, playerTwoName);
    event.preventDefault();
    
}

function createCheckout(teamName, playerOne, playerTwo){
    document.getElementById("checkoutTeamName").textContent = teamName;
    document.getElementById("checkoutFirstPlayer").textContent = playerOne;
    document.getElementById("checkoutSecondPlayer").textContent = playerTwo;
}

const teamForm = document.getElementById("teamInfoForm");
teamForm.addEventListener("submit", trySubmit);