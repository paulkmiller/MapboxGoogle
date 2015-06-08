var mario = "mario", luigi = "luigi", playAsMario = 1, levelResult;

if(playAsMario){
    levelResult = lowerLevel(mario, 100);
}
else {
    levelResult = lowerLevel(luigi, 5);
}
function lowerLevel(character, coins){
  // stuff happens

  var something = character + " is in the dungeon";

  something = something + ", and he has " + coins + " coins";

  return something;
}

document.getElementById('level-result').innerHTML = levelResult;

// mario is in the dungeon, and he has 100 coins
// luigi is in the dungeon, and he has 5 coins