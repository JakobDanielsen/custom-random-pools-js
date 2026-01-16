/* 
    TODO: 
    + move localstorageupdate to poolsrender?
    + sfx?
    + remove icon flicker after submit
    +   -   use insertadjacenthtml
    + dont deselect pools after submit
    +   -   probably ficed with  insertadjacenthtml
*/

//DOM references 
let charRoster = document.getElementById("character_interface");
let poolsList = document.getElementById("pools");
let playButton = document.getElementById("play_button")
let characterPopup = document.getElementById("characterPopup")
let poolName = document.getElementById("poolName")

let pools = []; // saved pools
let fighters = [
    {fighter: "Mario",active: true, imgpath:"resources/Pngs/mario.png"},
    {fighter: "DK",active: true, imgpath:"resources/Pngs/donkey_kong.png"},
    {fighter: "Link",active: true, imgpath:"resources/Pngs/link.png"},
    {fighter: "Samus",active: true, imgpath:"resources/Pngs/samus.png"},
    {fighter: "Dark Samus",active: true, imgpath:"resources/Pngs/dark_samus.png"},
    {fighter: "Yoshi",active: true, imgpath:"resources/Pngs/yoshi.png"},
    {fighter: "Kirby",active: true, imgpath:"resources/Pngs/kirby.png"},
    {fighter: "Fox",active: true, imgpath:"resources/Pngs/fox.png"},
    {fighter: "Pikachu",active: true, imgpath:"resources/Pngs/pikachu.png"},
    {fighter: "Luigi",active: true, imgpath:"resources/Pngs/luigi.png"},
    {fighter: "Ness",active: true, imgpath:"resources/Pngs/ness.png"},
    {fighter: "Captain Falcon",active: true, imgpath:"resources/Pngs/captain_falcon.png"},
    {fighter: "Jigglypuff",active: true, imgpath:"resources/Pngs/jigglypuff.png"},

    {fighter: "Peach",active: true, imgpath:"resources/Pngs/peach.png"},    
    {fighter: "Daisy",active: true, imgpath:"resources/Pngs/daisy.png"},
    {fighter: "Bowser",active: true, imgpath:"resources/Pngs/bowser.png"},
    {fighter: "Ice Climbers",active: true, imgpath:"resources/Pngs/ice_climbers.png"},
    {fighter: "Sheik",active: true, imgpath:"resources/Pngs/sheik.png"},
    {fighter: "Zelda",active: true, imgpath:"resources/Pngs/zelda.png"},
    {fighter: "Dr. Mario",active: true, imgpath:"resources/Pngs/dr_mario.png"},
    {fighter: "Pichu",active: true, imgpath:"resources/Pngs/pichu.png"},
    {fighter: "Falco",active: true, imgpath:"resources/Pngs/falco.png"},
    {fighter: "Marth",active: true, imgpath:"resources/Pngs/marth.png"},
    {fighter: "Lucina",active: true, imgpath:"resources/Pngs/lucina.png"},
    {fighter: "Young Link",active: true, imgpath:"resources/Pngs/young_link.png"},
    {fighter: "Ganondorf",active: true, imgpath:"resources/Pngs/ganondorf.png"},

    {fighter: "Mewtwo",active: true, imgpath:"resources/Pngs/mewtwo.png"},
    {fighter: "Roy",active: true, imgpath:"resources/Pngs/roy.png"},
    {fighter: "Chrom",active: true, imgpath:"resources/Pngs/chrom.png"},
    {fighter: "Game & Watch",active: true, imgpath:"resources/Pngs/mr_game_and_watch.png"},
    {fighter: "Meta Knight",active: true, imgpath:"resources/Pngs/meta_knight.png"},
    {fighter: "Pit",active: true, imgpath:"resources/Pngs/pit.png"},
    {fighter: "Dark Pit",active: true, imgpath:"resources/Pngs/dark_pit.png"},
    {fighter: "Zero Suit Samus",active: true, imgpath:"resources/Pngs/zero_suit_samus.png"},
    {fighter: "Wario",active: true, imgpath:"resources/Pngs/wario.png"},
    {fighter: "Snake",active: true, imgpath:"resources/Pngs/snake.png"},
    {fighter: "Ike",active: true, imgpath:"resources/Pngs/ike.png"},
    {fighter: "Pokemon Trainer",active: true, imgpath:"resources/Pngs/pokemon_trainer.png"},
    {fighter: "Diddy Kong",active: true, imgpath:"resources/Pngs/diddy_kong.png"},

    {fighter: "Lucas",active: true, imgpath:"resources/Pngs/lucas.png"},
    {fighter: "Sonic",active: true, imgpath:"resources/Pngs/sonic.png"},
    {fighter: "King Dedede",active: true, imgpath:"resources/Pngs/king_dedede.png"},
    {fighter: "Olimar",active: true, imgpath:"resources/Pngs/olimar.png"},
    {fighter: "Lucario",active: true, imgpath:"resources/Pngs/lucario.png"},
    {fighter: "ROB",active: true, imgpath:"resources/Pngs/rob.png"},
    {fighter: "Toon Link",active: true, imgpath:"resources/Pngs/toon_link.png"},
    {fighter: "Wolf",active: true, imgpath:"resources/Pngs/wolf.png"},
    {fighter: "Villager",active: true, imgpath:"resources/Pngs/villager.png"},
    {fighter: "Mega Man",active: true, imgpath:"resources/Pngs/mega_man.png"},
    {fighter: "Wii Fit Trainer",active: true, imgpath:"resources/Pngs/wii_fit_trainer.png"},
    {fighter: "Rosalina",active: true, imgpath:"resources/Pngs/rosalina_and_luma.png"},
    {fighter: "Little Mac",active: true, imgpath:"resources/Pngs/little_mac.png"},
   
   
   
    {fighter: "Greninja",active: true, imgpath:"resources/Pngs/greninja.png"},
    {fighter: "Palutena",active: true, imgpath:"resources/Pngs/palutena.png"},
    {fighter: "Pacman",active: true, imgpath:"resources/Pngs/pac_man.png"},
    {fighter: "Robin",active: true, imgpath:"resources/Pngs/robin.png"},
    {fighter: "Shulk",active: true, imgpath:"resources/Pngs/shulk.png"},
    {fighter: "Bowser Jr.",active: true, imgpath:"resources/Pngs/bowser_jr.png"},
    {fighter: "Duck Hunt Duo",active: true, imgpath:"resources/Pngs/duck_hunt.png"},
    {fighter: "Ryu",active: true, imgpath:"resources/Pngs/ryu.png"},
    {fighter: "Ken",active: true, imgpath:"resources/Pngs/ken.png"},
    {fighter: "Cloud",active: true, imgpath:"resources/Pngs/cloud.png"},
    {fighter: "Corrin",active: true, imgpath:"resources/Pngs/corrin.png"},
    {fighter: "Bayonetta",active: true, imgpath:"resources/Pngs/bayonetta.png"},
    {fighter: "Inkling",active: true, imgpath:"resources/Pngs/inkling.png"},

    {fighter: "Ridley",active: true, imgpath:"resources/Pngs/ridley.png"},
    {fighter: "Simon",active: true, imgpath:"resources/Pngs/simon.png"},
    {fighter: "Ricther",active: true, imgpath:"resources/Pngs/richter.png"},
    {fighter: "King K Rool",active: true, imgpath:"resources/Pngs/king_k_rool.png"},
    {fighter: "Isabelle",active: true, imgpath:"resources/Pngs/isabelle.png"},
    {fighter: "Incineroar",active: true, imgpath:"resources/Pngs/gaogaen.png"},
    {fighter: "Pirhana Plant",active: true, imgpath:"resources/Pngs/packun_flower.png"},
    {fighter: "Joker",active: true, imgpath:"resources/Pngs/joker.png"},
    {fighter: "Hero",active: true, imgpath:"resources/Pngs/dq_hero.png"},
    {fighter: "Banjo",active: true, imgpath:"resources/Pngs/banjo_and_kazooie.png"},
    {fighter: "Terry",active: true, imgpath:"resources/Pngs/Terry.png"},
    {fighter: "Byleth",active: true, imgpath:"resources/Pngs/byleth.png"},
    {fighter: "Min Min",active: true, imgpath:"resources/Pngs/minmin.png"},
    {fighter: "Steve",active: true, imgpath:"resources/Pngs/steve.png"},
    {fighter: "Sephiroth",active: true, imgpath:"resources/Pngs/sephiroth.png"},
    {fighter: "Pyra & Mythra",active: true, imgpath:"resources/Pngs/homura.png"},
    {fighter: "Kazuya",active: true, imgpath:"resources/Pngs/kazuya.png"},
    {fighter: "Sora",active: true, imgpath:"resources/Pngs/sora.png"}]

let popupActive = false;

function render(){
    // roster render
    let rosterHtml = "";
    fighters.forEach(currentFighter => {
    rosterHtml += `<li id="${currentFighter.fighter}"><img id="${currentFighter.fighter}" src="${currentFighter.imgpath}"></li>`; //img has same id to allow eventlistener to find right object
    })
    charRoster.innerHTML = rosterHtml;
}
render(); // initial render, not nescesary as a function but could prove useful later

function renderPools(){
    let poolsHtml = "";
    pools.forEach((pool,index) => {

        let allIcons = ""
        pool.data.forEach(e=>{
            allIcons += `<img src="${e.imgpath}">`
        })
        
        poolsHtml +=  `
        <li class="pool"> 
            <div class="poolTextField">
                <p>${pool.name}</p>
            </div>
            <div class="poolIconField">
            ${allIcons}
            </div>
            <div class="poolUIField">
                <input type="checkbox">
                <button onclick="deleteMe(this)" id="${index}">Delete</button>
            </div>
        </li>`
    })
    poolsList.innerHTML = poolsHtml;
}

function toggleFighter(currentFighter){
    // console.log("toggle " + currentFighter); 
    const fighterValue = fighters.find(obj => obj.fighter === currentFighter); // finds object with same referenece since passing objects through onclick is unintuitive
    // console.log(fighterValue);
    fighterValue.active = !fighterValue.active 
    const fighterValueElement = document.getElementById(fighterValue.fighter)
    if(!fighterValue.active) fighterValueElement.classList.add("disabled")
        else fighterValueElement.classList.remove("disabled")
}

function savePool(){
    if (poolName.value == "") return
    let newPool = [];

    fighters.forEach((currentFighter) => {
        if(currentFighter.active){
            newPool.push(currentFighter)
        }
    })
    // console.log(newPool);

    const existingIndex = pools.findIndex(pool => pool.name.toLowerCase() === poolName.value.toLowerCase());
    if(existingIndex !==-1){
    //    console.log(existingIndex);
       pools[existingIndex] = {
            name: poolName.value,
            data: newPool}
    } else {
        pools.push({
            name:poolName.value,
            data: newPool});
    }
    // console.log(pools);
    
    renderPools()
    poolName.value = ""
    updateLocalstorage("savedPools",pools)
}

function setAll(value){
    if(value){
        fighters.forEach(currentFighter =>{
            currentFighter.active = true
            document.getElementById(currentFighter.fighter).classList.remove("disabled")
    })
    } else {
        fighters.forEach(currentFighter =>{
            currentFighter.active = false
            document.getElementById(currentFighter.fighter).classList.add("disabled")
        })
    }
}

function deleteMe(e){
    pools.splice(e.id,1) // e.id: id attribute of pool delete button in html
    renderPools()
    updateLocalstorage("savedPools",pools)
}

function playGame() {
    const checkboxes = document.querySelectorAll(".poolUIField input[type='checkbox']");
    let selectedPools = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedPools.push(pools[index]);
        }
    });

    let containsEmptyPool = false
    selectedPools.forEach(pool =>{
        if(pool.data.length === 0) containsEmptyPool = true
    })

    if(containsEmptyPool){
        console.log("cant play with empty array");
        return
    } 
  
    characterRevealHtml ="";
    allRandomChars = [] // for ditto detection

    selectedPools.forEach(pool =>{
    const randomIndex = Math.floor(Math.random() * pool.data.length);
    const randomFighter = pool.data[randomIndex]
    allRandomChars.push(randomFighter)

    characterRevealHtml += 
    `
    <div class="characterDisplaySection">
        <div>
            <h2>${pool.name}: ${randomFighter.fighter}</h2>
        </div>
        <div>
            <img src="${pool.data[randomIndex].imgpath}">
        </div>
    </div>
    `
    })

    // displays a different screen if all fighters are the same, as long as theres more that one player
    if (allRandomChars.every((fighter => fighter.fighter === allRandomChars[0].fighter)) && allRandomChars.length > 1) {
        console.log("ditto!");
        characterRevealHtml =  
         `<div class="characterDisplaySection">
            <div>
                <h2>${allRandomChars[0].fighter} ditto</h2>
            </div>
            <div>
                <img src="${allRandomChars[0].imgpath}">
            </div>
        </div>`
    }

    characterPopup.innerHTML = characterRevealHtml

    if (selectedPools.length > 0) {
            characterPopup.style.display = "flex"
            popupActive = true;
    }
    
}

function closeWindow(){
    characterPopup.style.display = "none"
    popupActive = false;
}

function updateLocalstorage(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

if (localStorage.getItem("savedPools") !== null) {
    let localStorageData = JSON.parse(localStorage.getItem("savedPools"))
    localStorageData.forEach(e =>{
        // console.log(e);
        pools.push(e)
    })
    renderPools();
}

document.getElementById("poolNameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    savePool(); 
});

charRoster.addEventListener("click",(clickedElement=>{
    if(clickedElement.target.id !== "character_interface") { // prevents action on click on the ul itself
        toggleFighter(clickedElement.target.id)
    }  
}))

playButton.addEventListener("click", ()=> playGame())
document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return; // allowing space to be pressed if inside a textarea
 
    if (e.code === "Space") {
        e.preventDefault();
        popupActive ? closeWindow() : playGame();
    }
});

characterPopup.addEventListener("click",()=> closeWindow())