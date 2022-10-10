let playingColor = "red";
const board = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]]

const allCircles = document.body.querySelectorAll('div.circle');

for (let circle of allCircles) {
    circle.addEventListener('mouseover', () => {
        addPlayingColor(document.body.querySelector(`div#${circle.classList[0].substring(3)}`));

    });
    circle.addEventListener('mouseleave', () => {
        const circleHeader = document.body.querySelector(`div#${circle.classList[0].substring(3)}`)
        circleHeader.classList.remove("red");
        circleHeader.classList.remove("yellow");
        circleHeader.classList.add('default');
    });
    circle.addEventListener('click', click);
}

function addPlayingColor(element) {
    element.classList.remove('default');
    element.classList.remove('red');
    element.classList.remove('yellow');
    element.classList.add(playingColor);
}

function calculateWinner() {
    let redCount = 0;
    let yellowCount = 0;
    let winner = false;
    for (let x = 0; x <= 6; x++) {
        // horizontal check
        for (let y = 0; y <= 6; y++) {
            if (board[x][y] !== null) {
                if (y > 0) {
                    if (board[x][y - 1] !== board[x][y]) {
                        redCount = 0;
                        yellowCount = 0;
                    }
                }
                if (board[x][y] === "red") {
                    redCount++;
                    if (redCount === 4) return "red";
                }
                if (board[x][y] === "yellow") {
                    yellowCount++;
                    if (yellowCount === 4) return "yellow";
                }
            } else {
                redCount = 0;
                yellowCount = 0;
            }
        }
    }
    for (let y = 0; y <= 6; y++) {
        // vertical check
        for (let x = 0; x <= 6; x++) {
            if (board[x][y] !== null) {
                if (x > 0) {
                    if (board[x - 1][y] !== board[x][y]) {
                        redCount = 0;
                        yellowCount = 0;
                    }
                }
                if (board[x][y] === "red") {
                    redCount++;
                    if (redCount === 4) return "red";
                }
                if (board[x][y] === "yellow") {
                    yellowCount++;
                    if (yellowCount === 4) return "yellow";
                }
            } else {
                redCount = 0;
                yellowCount = 0;
            }
        }
    }
    return false;
}

function click(element) {
    const x = element.srcElement.classList[0][1];
    const y = element.srcElement.classList[0][4];
    for (let i = 6; i >= 0; i--) {
        if (board[i][y] === null) {
            board[i][y] = playingColor;
            document.body.querySelector(`div.x${i}-y${y}`).classList.add(playingColor);
            document.body.querySelector(`div.x${i}-y${y}`).classList.remove("default");
            break;
        }
    }
    calculateWinner() && declareWinner(calculateWinner());
    if (playingColor === "red") playingColor = "yellow";
    else playingColor = "red";
    addPlayingColor(document.body.querySelector(`div#${this.classList[0].substring(3)}`));
    return;
}

function declareWinner(winner) {
    document.body.querySelector('h2').setAttribute("style", `color: ${winner};`);
    document.body.querySelector('h2').innerText = `Winner is ${winner}!`;
    document.body.querySelector('div#header-div').setAttribute("style", "display:none; height: 100px; margin-bottom: 10px;");
    for (let circle of allCircles) {
        circle.removeEventListener('click', click);
    }
}