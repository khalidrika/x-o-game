let tor = "x";
let title = document.querySelector('.fold span');
let boxes = [];

function wener() {
    for (let i = 1; i <= 9; i++) {
        boxes[i] = document.getElementById('cell' + i).innerHTML;
    }

    let winPatterns = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9], 
        [1, 5, 9], [3, 5, 7]  
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            title.innerHTML = `Winner: ${boxes[a].toUpperCase()} 🎉`;
            disableGame();
            return;
        }
    }
}

function game(id) {
    let box = document.getElementById(id);
    if (box.innerHTML === "") {
        box.innerHTML = tor;
        tor = (tor === "x") ? "o" : "x";
        title.innerHTML = `Turn: ${tor.toUpperCase()}`;
        wener();
    }
}

function disableGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('cell' + i).onclick = null;
    }
}
