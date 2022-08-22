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