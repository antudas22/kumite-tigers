// Select List
const playersNameHolder = [];

function display(nameList){
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';

    for(let i = 0; i < nameList.length; i++){
        const name = playersNameHolder[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;

        playersList.appendChild(tr);

    }
}

function addToList(element){

    element.disabled = true;

    const playerName = element.parentNode.children[0].innerText;

    const nameObject = {
        playerName: playerName
    }
    
    playersNameHolder.push(nameObject);

    if(playersNameHolder.length > 5){
        alert('Please select only 5 players!');
        return;
    }

    display(playersNameHolder);
}

// Budget List
// Common function for input
function inputStringToNumber(number){
    const inputField = document.getElementById(number);
    const inputFieldString = inputField.value;
    const inputNumber = parseInt(inputFieldString);
    return inputNumber;
}
document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerField = inputStringToNumber('per-player-field');

    const playersLength = playersNameHolder.length;
    const calculationExpenses = perPlayerField * playersLength;
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = calculationExpenses;
})

document.getElementById('btn-total-cost').addEventListener('click', function(){
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesAmount = parseInt(playerExpensesString);

    const managerField = inputStringToNumber('manager-field');
    const coachField = inputStringToNumber('coach-field');

    const totalCost = playerExpensesAmount + managerField + coachField;

    const totalFinalAmount = document.getElementById('total-amount');
    totalFinalAmount.innerText = totalCost;
})