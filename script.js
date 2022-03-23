const ticTacToe = (function() {

})()

let gameBoard = { }

function playerMaker(name) {

    return { name }
}

//eventListener for adding an X to the cell
const cellGroup = document.querySelectorAll('.cell')
cellGroup.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        if (!cell.textContent) {cell.textContent = 'X'}
    })
})
