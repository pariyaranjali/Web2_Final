function mouseHover(imgSrc){
	imgSrc.src = 'img/img2.jpg';
}
function mouseOut(imgSrc){
imgSrc.src = 'img/img1.jpg'
}


// start of shop page

function shop_image_fun(imgSrc){
	var shopLargImg = document.getElementById('shhop-page-large-img');
   shopLargImg.src = imgSrc;
}
//end of shop page



// car script start 
document.addEventListener("DOMContentLoaded", function() {
	// Get the car element
	const car = document.getElementById("car");
  
	// Function to move the car from left to right
	function moveCar() {
	  const screenWidth = window.innerWidth;
	  const carWidth = car.offsetWidth;
  
	  // Set the destination position on the right
	  const destination = screenWidth - carWidth - 50;
  
	  // Update the left position of the car to move it right
	  car.style.left = destination + "px";
	}
  
	// Call the moveCar function after a delay (e.g., 1 second)
	setTimeout(moveCar, 2000);
  });
  
// car script end 