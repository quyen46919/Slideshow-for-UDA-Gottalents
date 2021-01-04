document.addEventListener('DOMContentLoaded', function(){
	var moveHomeSlideButton = document.querySelectorAll('.chuyenslide ul li');
	var homeSlides =  document.querySelectorAll('.motslide');
	console.log(homeSlides);
		var thoigian = setInterval(function(){
			var vtSlideHienTai = 0;
			var homeSlideHienTai = document.querySelector('.motslide.active'); 

		for ( vtSlideHienTai = 0; homeSlideHienTai = homeSlideHienTai.
			previousElementSibling; vtSlideHienTai++) {}

		if(vtSlideHienTai < (homeSlides.length -1)){
			for (var i = 0; i < homeSlides.length; i++) {
				homeSlides[i].classList.remove('active');
				moveHomeSlideButton[i].classList.remove('kichhoat');
			}
				homeSlides[vtSlideHienTai].nextElementSibling.classList.add('active');
				moveHomeSlideButton[vtSlideHienTai].nextElementSibling.classList.add('kichhoat');
			} else {
				for (var i = 0; i < homeSlides.length; i++) {
				homeSlides[i].classList.remove('active');
				moveHomeSlideButton[i].classList.remove('kichhoat');
			}

				homeSlides[0].classList.add('active');
				moveHomeSlideButton[0].classList.add('kichhoat');
			}

		},8000);
	// } /*hết autoSlide*/

	//xu li cho nut
	for (var i = 0; i < moveHomeSlideButton.length; i++) {
		moveHomeSlideButton[i].onclick = function(){
		clearInterval(thoigian);	
		for (var i = 0; i < moveHomeSlideButton.length; i++) {
			moveHomeSlideButton[i].classList.remove('kichhoat');
		}
			this.classList.add('kichhoat');
		var HActiveButton = this;
		var vitrinut = 0;

		for ( vitrinut = 0; HActiveButton = HActiveButton.previousElementSibling; vitrinut++) {
		}

		for (var i = 0; i < homeSlides.length; i++) {
			homeSlides[i].classList.remove('active');
			homeSlides[vitrinut].classList.add('active');
		}
		}
	} 
}, false)