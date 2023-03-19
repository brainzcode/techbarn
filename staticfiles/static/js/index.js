

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 700);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.display = "block";
}


jQuery(document).ready(function($){
	var copyid = 0;
	$('pre').each(function(){
		copyid++;
		$(this).attr( 'data-copyid', copyid).wrap( '<div class="pre-wrapper"/>');
		$(this).parent().css( 'margin', $(this).css( 'margin') );
		$('<button class="copy-snippet">Copy</button>').insertAfter( $(this) ).data( 'copytarget',copyid );
	});

	$('body').on( 'click', '.copy-snippet', function(ev){
		ev.preventDefault();

		var $copyButton = $(this);

		$pre = $(document).find('pre[data-copyid=' + $copyButton.data('copytarget' ) + ']');
		if ( $pre.length ) {
			var textArea = document.createElement("textarea");

			// Place in top-left corner of screen regardless of scroll position.
			textArea.style.position = 'fixed';
			textArea.style.top = 0;
			textArea.style.left = 0;

			// Ensure it has a small width and height. Setting to 1px / 1em
			// doesn't work as this gives a negative w/h on some browsers.
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			
			// We don't need padding, reducing the size if it does flash render.
			textArea.style.padding = 0;

			// Clean up any borders.
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';

			// Avoid flash of white box if rendered for any reason.
			textArea.style.background = 'transparent';

			//Set value to text to be copied
            // change .html() to .text()
			textArea.value = $pre.text();

			document.body.appendChild(textArea);
			textArea.select();

			try {
				document.execCommand('copy');
				$copyButton.text( 'Copied').prop('disabled', true);;
			} catch (err) {
				$copyButton.text( 'FAILED: Could not copy').prop('disabled', true);;
			}
			setTimeout(function(){
				$copyButton.text( 'Copy').prop('disabled', false);;
			}, 3000);
		}
	});
});

// function darkMode() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");

//   const navElement = document.getElementById('nav');
//   navElement.classList.toggle('dark-mode');
// }

// if (localStorage.getItem('theme' === 'dark')) {
//   setDarkMode();

//   if (document.getElementById('checkbox').checked) {
//     localStorage.setItem('checkbox', true)
//   }
// }

// function setDarkMode() {
//   let isDark = document.body.classList.toggle('dark-mode')
//   let isDark1 = document.querySelector('.card').classList.toggle('dark-mode')
//   // let isDark2 = document.querySelector('.text-muted').classList.toggle('dark-mode')
//   // let isDark3 = document.querySelector('.text-dark').classList.toggle('dark-mode')





//   if (isDark || isDark1) {
//     setDarkMode.checked = true;
//     localStorage.setItem('theme', 'dark');
//     document.getElementById('checkbox').setAttribute('checked', 'checked');
//   } else {
//     setDarkMode.checked = true;
//     localStorage.removeItem('theme', 'dark')
//   }
// }





// gsap.fromTo(
// 	'.loader',
// 	{ opacity: 1 },
// 	{
// 		opacity: 0,
// 		duration: 1.5,
// 		delay: 1.5,
// 	}
// );


// gsap.fromTo(
// 	'.logo-title',
// 	{
// 		y: 50,
// 		opacity: 0,
// 	},
// 	{
// 		y: 0,
// 		opacity: 1,
// 		duration: 2,
// 		delay: 0.2,
// 	}
// );
