var images=["images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg",];
var i=0;
var maxImages = images.length-1;
function previousImage(){
	console.log('prev works');
	if(i > 0 ) {
	 	i--;
	}  else  { 
		i = maxImages; 
	}
	changeImage(i);
}
function nextImage(){
	console.log('next works');
	if(i < maxImages ) { 
		i++;
	}  else  { 
		i = 0; 
	} 
	changeImage(i);
}
function changeImage(){
	$("#image-to-vote-on").attr("src",images[i]);
	$("#your-vote>option").removeAttr("selected");
}

$(document).ready(function(){
	$("#buttons-wrapper #next").on("click",nextImage);
	$("#buttons-wrapper #back").on("click",previousImage);
});