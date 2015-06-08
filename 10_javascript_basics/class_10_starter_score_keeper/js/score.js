var result = 0;

// when i click on +5
document.getElementById('add5').onclick = add5;
function add5(){
  // 1) add 5 to the result
  result = result + 5; 
  // 2) update the html with result.
  document.getElementById('result').innerHTML = result;
}
