{
    
function playGame(playerInput) {
    
    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        if (argMoveId == 2) {
            return 'papier';
        }
        if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log(computerMove);


/*
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
*/
    const playerMove = getMoveName(playerInput);
    console.log(playerMove)

    displayResult(computerMove, playerMove);



    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('Wybierz 1, 2 lub 3!');
        }

        if (argComputerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('Wybierz 1, 2 lub 3!');
        }

        if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ja wygrywam');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('Wybierz 1, 2 lub 3!');
        }
    }
}
// playGame(3);
//play-rock.addEventListener('click', buttonClicked);
//paly-paper.addEventListener('click', buttonClicked);
//play-scissors.addEventListener('click', buttonClicked);

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
    
}