var i;


var topNav = document.getElementsByClassName("top-nav")[0];


/*offset navigation*/
var navOffset = topNav.offsetTop;



/*placeholder navigation*/
var placeholder = document.createElement("div");


placeholder.id = "placeholder";

placeholder.style.height = topNav.offsetHeight + "px";

topNav.parentNode.insertBefore(placeholder, topNav);

placeholder.appendChild(topNav);


window.addEventListener("resize", function(){
	placeholder.style.height = topNav.offsetHeight + "px";
})


/*scroll event*/
window.addEventListener("scroll", function(){


	if(window.pageYOffset >= navOffset){
		topNav.classList.add("fixed");
		
	} else{
		topNav.classList.remove("fixed");
	}
	
});



/*hamburger menu*/
var menuButton = document.getElementsByClassName("menu-button")[0];
var navItem = document.getElementsByClassName("nav-item");


menuButton.addEventListener("click", function(){
	for(i = 0; i < navItem.length; i++){
		navItem[i].classList.toggle("show");
	}
	
	placeholder.style.height = topNav.offsetHeight + "px";
	
});




/*testing*/
window.addEventListener("click", function(ev){
	console.log(ev.target);
});


