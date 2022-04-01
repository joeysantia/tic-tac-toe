const ticTacToe = (function() {

    let playerOne, playerTwo, computer, headingName
    let xTurn = true
    const body = document.querySelector('body')
    const heading = document.querySelector('h1')
    const overlay = document.querySelector('.overlay')
    const cellGroup = document.querySelectorAll('.cell')

    const playerMaker = (name, symbol) => {
        return {
            name: name,
            symbol: symbol
         }
    }

    const headingSet = () => {
    if (playerTwo) {
        headingName = (playerOne.symbol === 'X' ? playerOne.name : playerTwo.name)
        
    } else {
        headingName = playerOne.name
    }
    heading.textContent = 'Your turn, ' + headingName + '.'
    }

    const headingToggle = () => {
        headingName = (headingName === playerOne.name ? playerTwo.name : playerOne.name)
        heading.textContent = 'Your turn, ' + headingName + '.'
    }

    const computerMove = () => {
        switch (computer.name) {
            case 'easy':    
                let openSpaces = []
                cellGroup.forEach((cell) => {
                    if (!cell.textContent) { openSpaces.push(cell) } 
                })
                openSpaces[Math.floor(Math.random() * openSpaces.length)].textContent = computer.symbol
                break;
            case 'medium':
                alert('Not ready yet - choose easy.')
            case 'hard':
                alert('Not ready yet - choose easy.')
            default: 
                alert('Not ready yet - choose easy.')
        }
    }

    const clickAdd = () => { 
        cellGroup.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (!cell.textContent ) {
                cell.textContent = (xTurn ? 'X' : 'O')
            }

            playerTwo ? xTurn = !xTurn : {}

            if (computer) {
                computerMove()
            } else if (playerTwo) { 
                headingToggle() 
            }

            winnerCheck()

            })
        })
    }

    const clickRemove = () => {
        cellGroup.forEach((cell) => {
            cell.removeEventListener
        })
    }

    const submitFunction = (e) => {
        e.preventDefault()
        

        const playerOneName = document.querySelector('#playerOne-name')
        const playerOneSymbol = document.querySelector('input[name="symbol-choice"]:checked')
        playerOne = playerMaker(playerOneName.value, playerOneSymbol.value)

        if (document.querySelector('input[id="playerTwo"]:checked')) {
            let playerTwoSymbol = (playerOneSymbol.value === 'X' ? 'O' : 'X')
            playerTwo = playerMaker(document.querySelector('#playerTwoName').value, playerTwoSymbol)
        }

        if (document.querySelector('input[id="computer"]:checked')) {
            let computerName = document.querySelector('select[id="difficulty"]')
            let computerSymbol = (playerOneSymbol.value === 'X' ? 'O' : 'X')
            computer = playerMaker(computerName.options[difficulty.selectedIndex].value, computerSymbol)
        }

        const form = document.querySelector('form')
        body.removeChild(form)

        body.removeChild(overlay)

        clickAdd()
        if (computer && playerOne.symbol === 'O') { 
            computerMove()
            xTurn = !xTurn }

        headingSet()
        

        console.log(playerOne)
        console.log(playerTwo)

    }

    const startGame = (function() {

        const form = document.querySelector('form');
        form.addEventListener('submit', submitFunction);

        const fields = document.querySelector('.fields')

        const playerTwoInput = document.querySelector('#playerTwo')
        playerTwoInput.addEventListener('click', (e) => {
            
            if (fields.lastChild !== document.querySelector('#playerTwoName')) { 

                if (fields.lastChild === document.querySelector('#difficulty')) { 
                    fields.removeChild(fields.lastChild)
                    fields.removeChild(fields.lastChild)
                }

            const playerTwoLabel = document.createElement('label')
            playerTwoLabel.textContent = `Enter foe's name:`
            playerTwoLabel.setAttribute('for', 'playerTwoName')
            fields.appendChild(playerTwoLabel)

            const playerTwoInput = document.createElement('input')
            playerTwoInput.setAttribute('type', 'text')
            playerTwoInput.setAttribute('name', 'playerTwoName')
            playerTwoInput.setAttribute('id', 'playerTwoName')
            playerTwoInput.setAttribute('required', 'required')
            fields.appendChild(playerTwoInput)
            
            }

        })

        const computerInput = document.querySelector('#computer')
        computerInput.addEventListener('click', (e) => {

            if (fields.lastChild !== document.querySelector('#difficulty')) {

                if (fields.lastChild === document.querySelector('#playerTwoName')) { 
                    fields.removeChild(fields.lastChild)
                    fields.removeChild(fields.lastChild)
                }

                const difficultyLabel = document.createElement('label')
                difficultyLabel.textContent = 'Choose your difficulty'
                difficultyLabel.setAttribute('for', 'computerDifficulty')
                fields.appendChild(difficultyLabel)

                const difficultyInput = document.createElement('select')
                difficultyInput.setAttribute('name', 'difficulty')
                difficultyInput.setAttribute('id', 'difficulty')
                fields.appendChild(difficultyInput)

                const easy = document.createElement('option')
                easy.setAttribute('value', 'easy')
                easy.textContent = 'Easy'
                difficultyInput.appendChild(easy)

                const medium = document.createElement('option')
                medium.setAttribute('value', 'medium')
                medium.textContent = 'Medium'
                difficultyInput.appendChild(medium)

                const hard = document.createElement('option')
                hard.setAttribute('value', 'hard')
                hard.textContent = 'Hard'
                difficultyInput.appendChild(hard)

                const impossible = document.createElement('option')
                impossible.setAttribute('value', 'impossible')
                impossible.textContent = 'Impossible'
                difficultyInput.appendChild(impossible)
                

            }
        })


    })()

    const winnerCheck = () => {
        let gameboard = []

        const victory = () => { // all possible combinations of a three-in-a-row [ 0 1 2 
                                //                                                 3 4 5
                                //                                                 6 7 8 ]
                        if (
                        (gameboard[0] && gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2]) ||
                        (gameboard[3] && gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5]) ||
                        (gameboard[6] && gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8]) ||
                        (gameboard[0] && gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6]) ||
                        (gameboard[1] && gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7]) ||
                        (gameboard[2] && gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8]) ||
                        (gameboard[0] && gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) ||
                        (gameboard[2] && gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6])
                        ) { return true } 
                        else { return false}
        }

        const tie = () => {
            for (let content in gameboard) {
            if (!gameboard[content]) {
                return false
            }
        } // revisit this - it's calling a tie if there is any textContent at all 
            return true
        }

        cellGroup.forEach((cell) => {
            gameboard.push(cell.textContent)
        })

        if (victory() || tie() ) {

            heading.textContent = 'We have a winner!'

            cellGroup.forEach((cell) => {
                cell.style.pointerEvents = 'none'
            })

            const winnerPopup = document.createElement('div')
            winnerPopup.setAttribute('class', 'winner-popup')
            body.appendChild(winnerPopup)
            
            body.appendChild(overlay)

            const winnerHeading = document.createElement('h2')
            winnerPopup.appendChild(winnerHeading)
            
            const buttonList = document.createElement('div')
            winnerPopup.appendChild(buttonList)

            const rematchButton = document.createElement('button')
            buttonList.appendChild(rematchButton)
            rematchButton.textContent = 'Rematch?'
            rematchButton.addEventListener('click', (e) => {
                body.removeChild(winnerPopup)
                body.removeChild(overlay)
                cellGroup.forEach((cell) => {
                    cell.textContent = ''
                    cell.style.pointerEvents = 'auto'
                })
                xTurn = true 
                headingSet()
                if (computer.symbol === 'X') {
                    computerMove()
                    xTurn = false
                }
            })

            const resetButton = document.createElement('button')
            buttonList.appendChild(resetButton)
            resetButton.textContent = 'Start Over?'
            resetButton.addEventListener('click', (e) => {
                window.location.reload()
            })

            if ( victory() ) {
                winnerHeading.textContent = `You win, ${headingName}` 
            } else if ( tie() ) {
                winnerHeading.textContent = 'Tie!'
            }
        }
        return {gameboard, victory, tie }
    }
    return { playerOne, playerTwo, cellGroup, winnerCheck, computer }
})()