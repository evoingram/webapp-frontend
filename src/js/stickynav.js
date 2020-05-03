// sticky nav
function stickyNav() {
	var navbar = document.querySelector('.menu');
	var sticky = navbar.offsetTop;
	if (window.pageYOffset >= sticky) {
		document.body.style.paddingTop = navbar.offsetHeight + 45 + 'px';
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
		document.body.style.paddingTop = 0;
	}
}
