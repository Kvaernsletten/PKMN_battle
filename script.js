

let pkmnContainer = document.getElementById('pkmnContainer');
let app = document.getElementById('app');

let playerChoice = "";
let computerChoice = "";
let bulbasaurImg = "img/Bulbasaur.png"
let charmanderImg = "img/Charmander.png"
let squirtleImg = "img/Squirtle.png"

updateView();

function updateView() {

    app.innerHTML = /*HTML*/`
    <div class="pkmnContainer">
    <img src="img/pokeball.png">
    <img src="img/typechart.png">
    <img src="img/pokeball.png">
    </div>
    <div id="pkmnContainer" class="pkmnContainer">
        <img class="bulbasaur" src="${bulbasaurImg}"
        onmouseover="onHover(1, this)" 
        onmouseout="onHover(2, this)"
        onclick="selectPkmn('Bulbasaur')">
        <img class="charmander" src="${charmanderImg}"
        onmouseover="onHover(3, this)" 
        onmouseout="onHover(4, this)"
        onclick="selectPkmn('Charmander')">
        <img class="squirtle" src="${squirtleImg}"
        onmouseover="onHover(5, this)" 
        onmouseout="onHover(6, this)"
        onclick="selectPkmn('Squirtle')">
    </div>
    `;
}

function onHover(pkmn, image) {
    if (pkmn == 1 || pkmn == 2) {
        image.src = (pkmn == 1) ? 'img/Bulbasaur_selected.png' : bulbasaurImg;
    } else if (pkmn == 3 || pkmn == 4) {
        image.src = (pkmn == 3) ? 'img/Charmander_selected.png' : charmanderImg;
    } else if (pkmn == 5 || pkmn == 6) {
        image.src = (pkmn == 5) ? 'img/Squirtle_selected.png' : squirtleImg;
    }
}

function selectPkmn(playerChoice){

    let generateNumber = Math.floor(Math.random()*3)+1;    
    
    if(generateNumber == 1){
        computerChoice = 'Bulbasaur'
    }
    if(generateNumber == 2){
        computerChoice = 'Charmander'
    }
    if(generateNumber == 3){
        computerChoice = 'Squirtle'
    }
    console.log('Player selects ' + playerChoice);
    console.log('Computer selects ' + computerChoice);
    if(playerChoice == computerChoice){
        console.log("It's a draw!")
    }
    else if((playerChoice == 'Bulbasaur' && computerChoice == 'Squirtle')
    || (playerChoice == 'Charmander' && computerChoice == 'Bulbasaur')
    || (playerChoice == 'Squirtle' && computerChoice == 'Charmander')){
        console.log('Player wins!')
    }else{
        console.log(playerChoice + ' faints! Player loses!')
    }


    updateView();
}