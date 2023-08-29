var menuOn = 0;

var menuId = ['all', 'drink', 'food', 'exp', 'info'];

function buttonReload () {
	// menuButton
	for (var i = 0; i < 5; i++) {
		var menuButton = document.querySelector("#" + menuId[i] + "> .menuButton");
		var menuImage = document.querySelector("#" + menuId[i] + "> .menuButton > .menuImg")
		var menuText = document.querySelector("#" + menuId[i] + "> .menuName > .text");

		if (i == menuOn) {
			menuButton.style.borderColor = 'rgb(0, 110, 255)';
			menuButton.style.background = 'rgb(0, 110, 255)';

			menuImage.style.filter = 'invert()';
			menuImage.style.opacity = '1';

			menuText.style.color = 'rgb(0, 110, 255)';
		}
		else {
			menuButton.style.borderColor = 'rgba(120, 120, 120, 1)';
			menuButton.style.background = 'white';

			menuImage.style.filter = 'none';
			menuImage.style.opacity = '0.5';

			menuText.style.color = 'rgba(120, 120, 120, 1)';
		}
	}
}

window.onload = function () {
	buttonReload();
}