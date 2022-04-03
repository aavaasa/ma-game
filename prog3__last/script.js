var socket = io();

var side = 10;

function setup() {
    createCanvas(50 * side, 50 * side);
    background("#acacac");
}

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            var obj = matrix[y][x];
            if (obj == 0){
                fill("#acacac")                
            }
            else if (obj == 1) {
                fill("green");
            }
            else if (obj == 2) {
                fill("#ffd400");
            }
            else if (obj == 3) {
                fill("red");
            }
            else if (obj == 4) {
                fill("blue");
            }
            else if (obj == 5) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on('send matrix', nkarel)

function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}
function addAllEater() {
    socket.emit("add Alleater")    
}
function addAeEater() {
    socket.emit("add AeEater")
}
function addFunnyKiller() {
    socket.emit("add FunnyKiller")
}


const statisticsgrass = document.getElementsByClassName('grassStatistics')
const statisticsgrassEater = document.getElementsByClassName('grassEaterStatistics')
const statisticsallEater = document.getElementsByClassName('allEatersStatistics')
const statisticsaeEater = document.getElementsByClassName('aeEatersStatistics')
const statisticsfunnyKiller = document.getElementsByClassName('funnyKillerStatistics')

setInterval(() => {
    socket.on('grassStatisitcsArr', grassStatisitcsOn)
    function grassStatisitcsOn(x) {
        statisticsgrass[0].innerHTML = x[0];
        statisticsgrassEater[0].innerHTML = x[1];
        statisticsallEater[0].innerHTML = x[2];
        statisticsaeEater[0].innerHTML = x[3];
        statisticsfunnyKiller[0].innerHTML = x[4];
            
    }
    
}, 1000);

// console.log(statisticsgrass);
// console.log(statisticsgrass[0]);
// statisticsgrass.push(socket.on('grassStatisitcs'))

// const x = document.
// console.log(x);
// x.innerHTML = '1';