const battleGrid = document.getElementById("battleGrid")


let gameState = {
    "cells" : []
};
function updateGameState() {
    const cellID = Math.floor(Math.random()*gameState.cells.length)
    const directions = getNeighbors(cellID, 10, gameState.cells.length)
    let targetCellID = cellID+directions[Math.floor(Math.random()*directions.length)]
    gameState.cells[targetCellID] = new cell(gameState.cells[cellID])
    updateBattleGridUI(gameState.cells)
}
function getNeighbors(pos, width, length) {
    neighbors = []
    let up = (pos-width >= 0);
    let down = (pos+width < length);
    let negative = (pos%width != 0);
    let positive = ((pos+1)%width != 0);
    if(up) {
        neighbors.push(-width)
        if(negative){
            neighbors.push(-width-1)
        }
        if(positive){
            neighbors.push(-width+1)
        }
    }
    if(down) {
        neighbors.push(width)
        if(negative){
            neighbors.push(width-1)
        }
        if(positive){
            neighbors.push(width+1)
        }
    }
    if(negative) {neighbors.push(-1)}
    if(positive) {neighbors.push(+1)}
    return neighbors
}
function randomCell () {
    let baseData = {
        "color" : [Math.random()*255,Math.random()*255,Math.random()*255]
    }
    return baseData
}
for (let i = 0; i < 100;i++) {
    let baseData = randomCell()
    gameState.cells[i] = new cell(baseData)
}

newBattleGridUI(gameState.cells)

setInterval(updateGameState, 10)