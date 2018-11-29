
var i;
var menuButton = document.getElementsByClassName("menu-button");
var navItem = document.getElementsByClassName("nav-item");

console.log(menuButton.length);


for(i = 0; i < menuButton.length; i++){
	menuButton[0].addEventListener("click", function(){
		toggleClass(navItem, "show");
	});
}



function toggleClass(elementName, className){
	console.log(elementName);

	for(i = 0; i < elementName.length; i++){
		elementName[i].classList.toggle(className);
		console.log("hi");
	}

}