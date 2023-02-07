const battleGrid = document.getElementById("battleGrid")

drawBattleGrid = function(cells) {
    if (!cells) {
        cells = 100
    }
    for (cellID in cells) {
        let cell = document.createElement("div")
        cell.className = 'cell'
        cell.style.gridArea = `${Math.floor(cellID/10)+1} / ${cellID%10+1}`
        cell.textContent = `${cellID}`
        cell.style.backgroundColor = `rgb(${cells[cellID].color[0]},${cells[cellID].color[1]},${cells[cellID].color[2]})`
        battleGrid.appendChild(cell)
    }
}

let cells = [];
for (let i = 0; i < 100;i++) {
    baseData = {
        "color" : [Math.random()*255,Math.random()*255,Math.random()*255]
    }    
    cells[i] = new cell(baseData)
}

drawBattleGrid(cells)