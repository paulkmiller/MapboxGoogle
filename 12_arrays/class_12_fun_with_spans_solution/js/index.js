var rainbow = [
  '#F26C4F',
  '#FBAF5C',
  '#FFF467',
  '#ACD372',
  '#7CC576',
  '#3BB878',
  '#1ABBB4',
  '#00BFF3',
  '#438CCA',
  '#5574B9',
  '#605CA8',
  '#855FA8',
  '#A763A8',
  '#F06EA9',
  '#F26D7D'
]

var allSpanElements = document.querySelectorAll('span');
var bodyElement = document.body;

var counter = 0;

bodyElement.onclick = function () {
  counter++;
  
  [].forEach.call(allSpanElements, function (spanElement, index) {

    // Orderly version
    var colorIndex = (index + counter) % rainbow.length;
    
    // Random version
    // var colorIndex = randInt(rainbow.length)
    
    spanElement.style.color = rainbow[colorIndex];
  })
}

function randInt(max) {
  return Math.floor(Math.random() * max)
}