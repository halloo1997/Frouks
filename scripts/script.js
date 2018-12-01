
var i;



var topNav = document.getElementsByClassName("top-nav")[0];



var navOffset = topNav.offsetTop;


window.addEventListener("scroll", function(){
	console.log(topNav.offsetTop);
	if(window.pageYOffset >= navOffset){
		topNav.classList.add("fixed");
	} else{
		topNav.classList.remove("fixed");
	}
})




window.addEventListener("click", function(ev){
	console.log(ev.target);
})







var menuButton = document.getElementsByClassName("menu-button")[0];
var navItem = document.getElementsByClassName("nav-item");


menuButton.addEventListener("click", function(){
	for(i = 0; i < navItem.length; i++){
		navItem[i].classList.toggle("show");
	}
});


