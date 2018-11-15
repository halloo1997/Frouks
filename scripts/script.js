img = document.getElementsByClassName("img");


for(var i = 0; i < img.length; i++){
	img[i].addEventListener("click", function(){
		alert("test");
	})
}