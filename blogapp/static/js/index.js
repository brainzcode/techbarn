

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 700);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.display = "block";
}





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
