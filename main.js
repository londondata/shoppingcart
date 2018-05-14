
// var button = document.querySelector("button");
// console.log(button)

// var addToCart = function() {
// 	console.log("am i working?")
// }

// button.addEventListener ('click', addToCart);

var skullnav = document.querySelector("#skullnav");

var revealSkulls = function() {
var skullpage = document.querySelector(".skulls");
	skullpage.style.visibility = "visible"; 
}
skullnav.addEventListener ('click', revealSkulls);

var ninnav = document.querySelector("#ninnav");

var revealNin = function() {
var ninpage = document.querySelector(".nin");
	ninpage.style.visibility = "visible"; 
}
ninnav.addEventListener ('click', revealNin);


var accessoriesnav = document.querySelector("#accessoriesnav");

var revealAccessories = function() {
var accessoriespage = document.querySelector(".accessories");
	accessoriespage.style.visibility = "visible"; 
}
accessoriesnav.addEventListener ('click', revealAccessories);

//

var item = document.querySelectorAll(".item");

var addToCart = function() {
	// var cart = document.querySelectorAll("aside");
	console.log(this.id)
	document.querySelector("aside").appendChild(this);

}
for (var i = 0; i < item.length; i++) {
	item[i].addEventListener('click', addToCart);
}


// item.addEventListener ('click', addToCart);



