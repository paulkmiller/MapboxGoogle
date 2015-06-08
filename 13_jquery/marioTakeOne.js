

var mario = "mario";
var luigi = "luigi";
var afterLevelMario = lowerLevel(mario, 100);
var afterLevelLuigi = lowerLevel(luigi, 5);

function lowerLevel(character, coins){
  // stuff happens

  var something = character + " is in the dungeon";

  something = something + ", and he has " + coins + " coins";

  return something;
}

document.getElementById('mario-result').innerHTML = afterLevelMario;
document.getElementById('luigi-result').innerHTML = afterLevelLuigi;

// mario is in the dungeon, and he has 100 coins
// luigi is in the dungeon, and he has 5 coins