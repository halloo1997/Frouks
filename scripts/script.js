
var i;



var topNav = document.getElementsByClassName("top-nav");




window.addEventListener("scroll", function(){
	if(window.pageYOffset >= topNav[0].offsetTop){
		topNav[0].classList.add("sticky");
	} else{
		topNav[0].classList.remove("sticky");
	}
})




window.addEventListener("click", function(ev){
	console.log(ev.target);
})







var menuButton = document.getElementsByClassName("menu-button");
var navItem = document.getElementsByClassName("nav-item");


menuButton[0].addEventListener("click", function(){
	toggleClass(navItem, "show");
});



function toggleClass(elementName, className){

	for(i = 0; i < elementName.length; i++){
		elementName[i].classList.toggle(className);
	}

}