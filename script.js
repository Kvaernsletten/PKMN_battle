

let pkmnContainer = document.getElementById('pkmnContainer');
let app = document.getElementById('app');

let playerChoice = "";
let computerChoice = "";
let bulbasaurImgUrl = "img/Bulbasaur.png"
let charmanderImgUrl = "img/Charmander.png"
let squirtleImgUrl = "img/Squirtle.png"

let bulbasaurImg = /*HTML*/`<img class="bulbasaur" src="img/Bulbasaur.png"
                    onmouseover="onHover(1, this)" 
                    onmouseout="onHover(2, this)"
                    onclick="selectPkmn('Bulbasaur')">`;
let charmanderImg = /*HTML*/`<img class="charmander" src="img/Charmander.png"
                    onmouseover="onHover(3, this)" 
                    onmouseout="onHover(4, this)"
                    onclick="selectPkmn('Charmander')">`;
let squirtleImg = /*HTML*/`<img class="squirtle" src="img/Squirtle.png"
                    onmouseover="onHover(5, this)" 
                    onmouseout="onHover(6, this)"
                    onclick="selectPkmn('Squirtle')">`;

updateView();

function updateView() {

    app.innerHTML = /*HTML*/`
    <div class="pkmnContainer">
    <img src="img/pokeball.png">
    <img src="img/typechart.png">
    <img src="img/pokeball.png">
    </div>
    <div id="pkmnContainer" class="pkmnContainer">
        ${bulbasaurImg}
        ${charmanderImg}
        ${squirtleImg}
    </div>
    <div id="battleArena" class="battleArena">
    <div id="battleInfo" class="info">Choose your pokémon</div><br>
    </div>
    <div id="resultsInfo" class="resultsInfo"></div>
    `;
}

function onHover(pkmn, image) {
    if (pkmn == 1 || pkmn == 2) {
        image.src = (pkmn == 1) ? 'img/Bulbasaur_selected.png' : 'img/Bulbasaur.png';
    } else if (pkmn == 3 || pkmn == 4) {
        image.src = (pkmn == 3) ? 'img/Charmander_selected.png' : 'img/Charmander.png'
    } else if (pkmn == 5 || pkmn == 6) {
        image.src = (pkmn == 5) ? 'img/Squirtle_selected.png' : 'img/Squirtle.png';
    }
}

function selectPkmn(playerChoice){

    let generateNumber = Math.floor(Math.random()*3)+1;    
    
    updateView();

    if(generateNumber == 1){
        computerChoice = 'Bulbasaur'
    }
    if(generateNumber == 2){
        computerChoice = 'Charmander'
    }
    if(generateNumber == 3){
        computerChoice = 'Squirtle'
    }
    if(playerChoice == computerChoice){
        document.getElementById('resultsInfo').innerHTML = /*HTML*/`
        <span class="results">You and your opponent chose the same Pokémon, </span>
        <span class="finalResults"> it's a stalemate.....</span>
    `;
    }
    else if((playerChoice == 'Bulbasaur' && computerChoice == 'Squirtle')
    || (playerChoice == 'Charmander' && computerChoice == 'Bulbasaur')
    || (playerChoice == 'Squirtle' && computerChoice == 'Charmander')){

        document.getElementById('resultsInfo').innerHTML = /*HTML*/`
        <span class="results">Your ${playerChoice} sweeps the floor with the opponent's ${computerChoice}!</span> 
        <span class="finalResults" style="color: green"> You win!</span>
    `;
    }else{
        document.getElementById('resultsInfo').innerHTML = /*HTML*/`
            <span class ="results">Your ${playerChoice} is knocked out and unable to battle!</span>
            <span class="finalResults" style="color: red"> You lose!</span>
        `;
    }

    document.getElementById('battleArena').innerHTML = /*HTML*/`
        <div class="battleInfo">You chose ${playerChoice}</div>
        <img class="arenaPKMN" src="img/${playerChoice}.png" style="transform: scaleX(-1);">
        <img class="arenaPKMN" src="img/${computerChoice}.png">
        <div class="battleInfo">Your opponent chose ${computerChoice}</div>
    `;
}