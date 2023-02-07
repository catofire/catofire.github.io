const battleGrid = document.getElementById("battleGrid")


let cells = [];
randomCell = function() {
    let baseData = {
        "color" : [Math.random()*255,Math.random()*255,Math.random()*255]
    }
    return baseData
}
for (let i = 0; i < 100;i++) {
    let baseData = randomCell()
    cells[i] = new cell(baseData)
}

newBattleGridUI(cells)