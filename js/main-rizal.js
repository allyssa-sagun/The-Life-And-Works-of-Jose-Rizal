
//animation on scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 



//pre-loader
let preloadingPage = document.getElementById("preloading");

function closeLoading(){
	preloadingPage.style.display = "none";
};

window.addEventListener("load", closeLoading);


//main table of content popup
let tablepop = document.getElementById("maintable");

function maintablepopup(){
	tablepop.style.display = "inline";
};

function unpopTable(){
  tablepop.style.display = "none";
  // tablepop.style.removeProperty('display');
}

// document
// 	.querySelector("#tablecontent")
// 	.addEventListener("click", maintablepopup);

document
	.querySelector("#tablecontent", "maintable")
	.addEventListener("click", event => {
  if (event.target.closest('maintable' || '#tablecontent')){
	 maintablepopup();
	} else if (event.target.closest(!!'maintable')){
	 unpopTable();
	};
});






//javascript to add:
//hover pop up box + animation

//sliding table of content
//on when clicked & off when not clicked





