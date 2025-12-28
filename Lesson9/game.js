`use strict`

function inputNumber(name){ // get input (number) from user
    let number = Number(prompt(`Enter ${name}`))

    while (isNaN(number)) {
        Number(prompt(`Enter ${name}` ))
    }

    return number;
}

// function createMap() { // create map
//     const mapSize = inputNumber()
//     const map = []
//     for(let i=0 ; i<mapSize ; i++)
//         map.push(i)
//     return map;
// }

function createMap() { // create map
    return inputNumber(`Map Size`);
}


function getNumberOfMoves(){ // get number of moves
    let moves = inputNumber(`Number Of Moves`);
    return moves
}

function getStartPoint(map){
    let startPoint = inputNumber();
    return startPoint < map-1 ? startPoint : getStartPoint(map);
}

///////////////////////

function genaratetreasureIndex(map){ // genarate treasure index
     return Math.floor(Math.random() * map)
}

//////////////////////

function startGame(){
    console.log("----Treasure Hunt Started----");
    const map = createMap();
    console.log(`Map Size: ${map} (0..${map-1})`);
    const allowedMoves = getNumberOfMoves();
    console.log(`Move Allowed : ${allowedMoves}`);
    const startPoint = getStartPoint(map);
    console.log(`Start Posution : ${startPoint}`);
    console.log(`Treasure is hidden`);

    console.log(`-----------------------------`);

    let currentPosition = startPoint;
    const treasureIndex = genaratetreasureIndex(map);
    let reminedMoves = allowedMoves;

    for(let i=0 ; i<allowedMoves ; i++){
        if (currentPosition !== treasureIndex) {
            let diriction = genarateMove()
            do{
                currentPosition = diriction ? currentPosition + 1 : currentPosition -1;
            }while(currentPosition === map-1 || currentPosition <= 0)
            console.log(`Move #${i}: ${diriction ? `right (${currentPosition-1}) -> ${currentPosition})` : `left (${currentPosition+1}) -> ${currentPosition})`}. Moves left : ${--reminedMoves}`)
            if(reminedMoves === 0)
                console.log(`YOU LOST`);
                
        }
        else
            console.log(`YOU WIN`);
            
    }
        

}

function genarateMove(){
    return Math.floor(Math.random()*2) === 1
}


startGame();