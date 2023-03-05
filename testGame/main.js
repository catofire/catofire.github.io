const battleGrid = document.getElementById("battleGrid")
let focusCell;
let gameState = {
    "cells" : [],
    "ticks" : 0,
};
function updateGameState() {
    gameState.ticks++
    const cellID = Math.floor(Math.random()*gameState.cells.length)
    let targetCellID = gameState.cells[cellID].getTarget(cellID)
    gameState.cells[targetCellID] = new cell(gameState.cells[cellID])
    if (Math.floor(gameState.ticks%(UpdateSpeed/tickSpeed)) == 0) {
        updateBattleGridUI(gameState.cells)
    }
}

function getTargetRandom(cellID) {
    let directions = getNeighbors(cellID, width, gameState.cells.length);
    return directions[Math.floor(Math.random()*directions.length)];
}

function getTargetEvo(cellID) {
    let neighbors = getNeighbors(cellID, width, gameState.cells.length);
    let cellTarget = gameState.cells[cellID].target
    let dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
    return neighbors.sort((a,b) => dot(cellTarget, gameState.cells[a].color)-dot(cellTarget,gameState.cells[b].color))[0];
}

function getNeighbors(pos, width, length) {
    neighbors = []
    let up = (pos-width >= 0);
    let down = (pos+width < length);
    let negative = (pos%width != 0);
    let positive = ((pos+1)%width != 0);
    if(up) {
        neighbors.push(pos-width)
        if(negative){
            neighbors.push(pos-width-1)
        }
        if(positive){
            neighbors.push(pos-width+1)
        }
    }
    if(down) {
        neighbors.push(pos+width)
        if(negative){
            neighbors.push(pos+width-1)
        }
        if(positive){
            neighbors.push(pos+width+1)
        }
    }
    if(negative) {neighbors.push(pos-1)}
    if(positive) {neighbors.push(pos+1)}
    return neighbors
}
function randomCell () {
    let baseData = {
        "color" : [Math.random()*255,Math.random()*255,Math.random()*255],
        "target" : [Math.random()*2-1,Math.random()*2-1,Math.random()*2-1],
        "mutation" : {
            "color" : 255,
            "target" : 2*Math.random(),
            "mutation" : 0.1
        },
        "getTarget" : getTargetEvo
    }
    return baseData
}
for (let i = 0; i < 400;i++) {
    gameState.cells[i] = new cell(randomCell())
}

let width = 20;
newBattleGridUI(gameState.cells)
let tickSpeed = 20;
let UpdateSpeed = 100;
setInterval(updateGameState, 20)