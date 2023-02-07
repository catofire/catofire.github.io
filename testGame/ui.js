newBattleGridUI = function(cells) {
    for (cellID in cells) {
        let cell = cells[cellID]
        let cellUI = document.createElement("div")
        cellUI.id = `cell${cellID}`
        cellUI.className = 'cell'
        cellUI.style.gridArea = `${Math.floor(cellID/10)+1} / ${cellID%10+1}`
        cellUI.textContent = `${cellID}`
        cellUI.style.backgroundColor = `rgb(${cell.color[0]},${cell.color[1]},${cell.color[2]})`
        battleGrid.appendChild(cellUI)
    }
}

clearBattleGridUI = function() {
    while(battleGrid.firstChild) {
        battleGrid.removeChild(battleGrid.lastChild);
    }
}

updateBattleGridUI = function(cells){
    try {
        for (cellID in cells) {
            let cell = cells[cellID]
            let cellUI = document.getElementById("battleGrid")
            cellUI.style.backgroundColor = `rgb(${cell.color[0]},${cell.color[1]},${cell.color[2]})`
        }
    }
    catch {
        clearBattleGridUI()
        newBattleGridUI(cells)
    }
}