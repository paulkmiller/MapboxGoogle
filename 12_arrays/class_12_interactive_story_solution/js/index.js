var FOOD_IMAGES = 
[
	"images/food1.jpg",
	"images/food2.jpg",
	"images/food3.jpg",
	"images/food4.jpg",
	"images/food5.jpg",
	"images/food6.jpg",
	"images/food7.jpg",
	"images/food8.jpg"
];

var imageElement = document.getElementById('interactiveImage');
var showFoodSpanElements = document.querySelectorAll('span.showFood');

if (showFoodSpanElements.length != FOOD_IMAGES.length) {
	console.error('Number of span.showFood does not match FOOD_IMAGES count! Something\'s probably going to go wrong!')
}

FOOD_IMAGES.forEach(function (imagePath, index) {
	var spanElement = showFoodSpanElements[index];

	spanElement.onmouseenter = function () {
		imageElement.src = imagePath;
	}
});