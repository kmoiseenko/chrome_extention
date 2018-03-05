let $checkbox = $("#recaptcha-anchor div.recaptcha-checkbox-checkmark");
let $button = $('#free_play_form_button');
let execute = true;

let check = setInterval(() => {
	if (window.location.href.match(/https:\/\/www.google.com\/recaptcha\/api\d\/anchor/) 
		&& $checkbox.length 
		&& $checkbox.is(':visible') 
		&& isScrolledIntoView($checkbox.get(0))) {

		if (sessionStorage.getItem('accesstime')) {
			if (new Date().getTime() - sessionStorage.getItem('accesstime') < 7000) {
				execute = false;
			}
		}

		if (execute) {
			$checkbox.click();
			sessionStorage.setItem('accesstime', new Date().getTime());
			console.log('Checkbox was checked!');
		}
	}
	clearInterval(check);
}, 500);


let roll = setInterval(() => {
	if ($button.length && $button.is(':visible')) {
		$button.click();
		console.log('Button was clicked!');
	}
	clearInterval(roll);
}, 5000);



function isScrolledIntoView(elem) {
	let $window = $(window);
	let $elem = $(elem);
	let docViewTop = $window.scrollTop();
	let docViewBottom = docViewTop + $window.height();
	let elemTop = $elem.offset().top;
	let elemBottom = elemTop + $elem.height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}