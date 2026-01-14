/* 
    TODO: 
    + displayPool()
    + display small icons on the pool element
    + randomizer functionality
*/

let charRoster = document.getElementById("character_interface");
let poolsList = document.getElementById("pools");


let allFighters = ["Mario","DK","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pika","Luigi","Ness","Captian Falcon","Jiggly","Ganondorf","Young Link","Lucina","Marth","Falco","Pichu","Dr Mario","Zelda","Sheik","Ice Climbers","Bowser","Daisy","Peach","Mewtwo","Roy","Chrom","Game&Watch","Meta Knight","Pit","Dark Pit","ZSS","Wario","Snake","Ike","Pokemon Trainer","Diddy","Little Mac","Rosalina","Wii fit","Mega man","Villager","Wolf","Toon Link","ROB","Lucario","Olimar","Dedede","Sonic","Lucas","Greninja","Palutena","Pacman","Robin","Shulk","Bowser jr","Duck hunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Ricther","King k rool","Isabelle","Incineroar","Pirhana plant","Joker","Hero","Banjo", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth","Pyra & Mythra", "Kazuya", "Sora"];
let includedFighters = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]

let pools = [];
let players = [];

let rosterHtml = ""; // html code for the roster that is displayed upon render
let poolsHtml = ""; // html code for the pools that is displayed upon render

function render(){

    // roster render
    allFighters.forEach(fighter => {

    if(includedFighters[allFighters.indexOf(fighter)]) {
    rosterHtml += `<li id="${fighter}" onclick="toggleFighter('${fighter}')">${fighter}</li>`;
    } else {
    rosterHtml += `<li class="disabled" id="${fighter}" onclick="toggleFighter('${fighter}')">${fighter}</li>`;
    }
    })
    charRoster.innerHTML = rosterHtml;
    rosterHtml = ""

    // pools render
    pools.forEach((pool, index) => {
        poolsHtml +=  `
        <li class="pool" > 
            <div class="poolTextField">
                <p>${pool.name}</p>
            </div>
            <div class="poolIconField" onclick="displayPool">
            ${pool.data}
            </div>
            <div class="poolUIField">
                <input type="checkbox">
                <button onclick="deleteMe(this)" id="${index}">Delete</button>
            </div>
        </li>`;

        /*
        Display character images inside the tab
        pool.data.forEach(fighter => {
            
        })
        */
        index++;
    })
    poolsList.innerHTML = poolsHtml;
    poolsHtml = ""
}

render(); // initial render


function toggleFighter(fighter){
    console.log("toggle " + fighter); 
    includedFighters[allFighters.indexOf(fighter)] = !includedFighters[allFighters.indexOf(fighter)] 
    render();
}

function collectCurrentPool(){
    if (document.getElementById("poolName").value == "") return
    let newPool = [];

    let i = 0;
    includedFighters.forEach(fighterActive => {
        if(fighterActive){
            newPool.push(allFighters[i])
        }
        i++;
    })
    console.log(newPool);

    const existingIndex = pools.findIndex(pool => pool.name.toLowerCase() === document.getElementById("poolName").value.toLowerCase());
    if(existingIndex !==-1){
       console.log(existingIndex);
       pools[existingIndex] = {
            name: document.getElementById("poolName").value,
            data: newPool}
    } else {
        pools.push({
            name:document.getElementById("poolName").value,
            data: newPool});
    }
    render()
    document.getElementById("poolName").value = ""
}

function disableAll(){
    includedFighters = includedFighters.map(() => false);
    render()
}
function enableAll(){
    includedFighters = includedFighters.map(() => true);
    render()
}

function deleteMe(e){
    pools.splice(e.id,1) // e.id: id attribute of pool delete button in html
    render()
}

function playGame() {
    const checkboxes = document.querySelectorAll(".poolUIField input[type='checkbox']");

    const selectedPools = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedPools.push(pools[index]); // samme index som i pools-array
        }
    });
    selectedPools.forEach(pool =>{
    const randomFighter = pool.data[Math.floor(Math.random() * pool.data.length)];
    console.log(pool.name + ": " + randomFighter);
    })
    
}

document.getElementById("poolNameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    collectCurrentPool(); 
});