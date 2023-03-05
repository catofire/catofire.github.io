function setFocusCell(cellID) {
    if(!cellID) {
        return
    }
    focusCell = cellID
    let cell = gameState.cells[cellID]
    let cellUI = document.getElementById(`cell${cellID}`)
    let readOut = document.getElementById('nyehe')
    let str = `ID:${cellID} <br>`
    for(let attribute in cell) {
        switch (attribute) {
            case "color":
                str +=`R:${cell[attribute][0]} <br> G:${cell[attribute][1]} <br> B:${cell[attribute][2]} <br>`;
                break;
            case "mutation":
                str +=`Mutations <br> ---------- <br>`;
                for(let mutationFactor in cell[attribute]) {
                    str+=`${mutationFactor}:${cell[attribute][mutationFactor]} <br>`;
                };
                str += '---------- <br>';
                break;
            case "minMax":
                break;
            case "getTarget":
                str+= `Targeting Function: ${cell.getTarget.name} <br>`;
                break;
            default:
                str+= `${attribute}:${cell[attribute]} <br>`;
        }
    }
    readOut.innerHTML = str
}

function newBattleGridUI(cells) {
    for (let cellID in cells) {
        let cell = cells[cellID]
        let cellUI = document.createElement("div")
        cellUI.id = `cell${cellID}`
        cellUI.className = 'cell'
        cellUI.style.gridArea = `${Math.floor(cellID/width)+1} / ${cellID%width+1}`
        //cellUI.textContent = `${cellID}`
        cellUI.style.backgroundColor = `rgb(${cell.color[0]},${cell.color[1]},${cell.color[2]})`
        cellUI.onclick = function() {setFocusCell(cellID)}
        battleGrid.appendChild(cellUI)
    }
}

function clearBattleGridUI() {
    while(battleGrid.firstChild) {
        battleGrid.removeChild(battleGrid.lastChild);
    }
}

function updateBattleGridUI(cells){
    try {
        for (cellID in cells) {
            let cell = cells[cellID]
            let cellUI = document.getElementById(`cell${cellID}`)
            cellUI.style.backgroundColor = `rgb(${cell.color[0]},${cell.color[1]},${cell.color[2]})`
        }
        if (focusCell) {
            setFocusCell(focusCell)
        }
    }
    catch {
        clearBattleGridUI()
        newBattleGridUI(cells)
    }
}