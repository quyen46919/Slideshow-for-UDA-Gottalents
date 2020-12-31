document.addEventListener('DOMContentLoaded', function(){
	var moveHomeSlideButton = document.querySelectorAll('.chuyenslide ul li');
	// console.log(moveHomeSlideButton);
	var homeSlides =  document.querySelectorAll('.motslide');
	console.log(homeSlides);
		var thoigian = setInterval(function(){
			//tính xem slide nào đang hiển thị
			var vtSlideHienTai = 0;
			var homeSlideHienTai = document.querySelector('.motslide.active'); // lưu ý querySelector thôi
			console.log(homeSlideHienTai);

		for ( vtSlideHienTai = 0; homeSlideHienTai = homeSlideHienTai.
			previousElementSibling; vtSlideHienTai++) {}
			console.log(vtSlideHienTai);

		if(vtSlideHienTai < (homeSlides.length -1)){
			//không cho slide nào hiển thị hết
			for (var i = 0; i < homeSlides.length; i++) {
				homeSlides[i].classList.remove('active');
				moveHomeSlideButton[i].classList.remove('kichhoat');
			}

			//cho phần tử tiếp theo của slide hiện ra
				homeSlides[vtSlideHienTai].nextElementSibling.classList.add('active');
				moveHomeSlideButton[vtSlideHienTai].nextElementSibling.classList.add('kichhoat');
			} else {
				for (var i = 0; i < homeSlides.length; i++) {
				homeSlides[i].classList.remove('active');
				moveHomeSlideButton[i].classList.remove('kichhoat');
			}

			//cho phần tử tiếp theo của slide hiện ra
				homeSlides[0].classList.add('active');
				moveHomeSlideButton[0].classList.add('kichhoat');
			}

		},8000);
	// } /*hết autoSlide*/

	//xu li cho nut
	for (var i = 0; i < moveHomeSlideButton.length; i++) {
		
		// clearInterval(autoSlide());
		
		//nút được click sẽ chuyển màu của class kichhoat
		moveHomeSlideButton[i].onclick = function(){
		clearInterval(thoigian);	
		//loại bỏ class kichhoat của các nút khác
		for (var i = 0; i < moveHomeSlideButton.length; i++) {
			moveHomeSlideButton[i].classList.remove('kichhoat');
		}
			this.classList.add('kichhoat');

				//chuyến slide
		//tính vị trí nút chuyến slide mà người dùng nhấn vào
		// console.log(this.previousElementSibling);
		var HActiveButton = this;
		console.log(HActiveButton);
		var vitrinut = 0;

		for ( vitrinut = 0; HActiveButton = HActiveButton.previousElementSibling; vitrinut++) {
			// console.log('bien vitrinut = '+ vitrinut);
			// console.log('vi tri cua phan tu co class la kichhoat la ' +HActiveButton);
		}
		// console.log(' vị trí của phần tử có class bằng kichhoat là: ' +vitrinut);
		for (var i = 0; i < homeSlides.length; i++) {
			homeSlides[i].classList.remove('active');
			homeSlides[vitrinut].classList.add('active');
		}
		}
	} // het xu li cho nut

	// xu li hieu ung card
	// VanillaTilt.init(document.querySelectorAll(".card"), {
	// 	max: 25,
    //     speed: 400,
    //     glare: true,
    //     "max-glare":1,
	// });
}, false)