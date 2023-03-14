

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 700);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.display = "block";
}

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
