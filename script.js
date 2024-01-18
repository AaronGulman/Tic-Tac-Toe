const squares = document.querySelectorAll("[data-square]");

let clickCount = 0;

squares.forEach(square => {
square.addEventListener("click", function() {
	clickCount++;

if(clickCount % 2 === 1){
  square.classList.add("circle");

}else{
		square.classList.remove('circle')
		square.classList.add("x");

}

if(clickCount>= 4){
	clickCount= 0;
}


});

});
