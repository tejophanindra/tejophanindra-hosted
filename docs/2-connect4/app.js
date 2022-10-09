let playingColor = "red";
const board = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]]

const allCircles = document.body.querySelectorAll('div.circle');

for (let circle of allCircles) {
    circle.addEventListener('mouseenter', () => {
        const circleHeader = document.body.querySelector(`div.${circle.classList[1]}`)
        circleHeader.classList.remove('default');
        circleHeader.classList.add(playingColor);
    });
    circle.addEventListener('mouseleave', () => {
        const circleHeader = document.body.querySelector(`div.${circle.classList[1]}`)
        circleHeader.classList.remove(playingColor);
        circleHeader.classList.add('default');
    });
}

function calculateWinner() {

}