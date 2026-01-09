let charRoster = document.getElementById("character_interface");

let allFighters = ["Mario","DK","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pika","Luigi","Ness","Captian Falcon","Jiggly","Ganondorf","Young Link","Lucina","Marth","Falco","Pichu","Dr Mario","Zelda","Sheik","Ice Climbers","Bowser","Daisy","Peach","Mewtwo","Roy","Chrom","Game&Watch","Meta Knight","Pit","Dark Pit","ZSS","Wario","Snake","Ike","Pokemon Trainer","Diddy","Little Mac","Rosalina","Wii fit","Mega man","Villager","Wolf","Toon Link","ROB","Lucario","Olimar","Dedede","Sonic","Lucas","Greninja","Palutena","Pacman","Robin","Shulk","Bowser jr","Duck hunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Ricther","King k rool","Isabelle","Incineroar","Pirhana plant","Joker","Hero","Banjo", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth","Pyra & Mythra", "Kazuya", "Sora"];
let includedFighters = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]

let currentFighterElement = "";
allFighters.forEach(fighter => {
currentFighterElement = "<li> " + fighter + " </li>";
charRoster.innerHTML += currentFighterElement;
})
console.log(allFighters.length);


function deactivateFighter(){
    
}