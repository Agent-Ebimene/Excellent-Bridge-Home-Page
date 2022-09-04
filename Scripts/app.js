const menuBar = document.querySelector(".menu-bars");
const sideMenu = document.querySelector(".side-menu");
const sideMenuList = document.querySelector(".side-menu-list");
const closBtn = document.getElementById("close-btn");
const companyLogo = document.querySelector(".company-logo");
const toolList = document.getElementById;
menuBar.addEventListener("click", () => {
  sideMenu.classList.add("visible");
  sideMenuList.style.minHeight = "300px";
});
closBtn.addEventListener("click", () => {
  sideMenu.classList.remove("visible");
});
companyLogo.addEventListener("click", () => {
  sideMenu.classList.add("visible");
});

// // var slider = tns({
// //   container: ".testimony-section",
// //   items: 3,
// //   gutter: 20,
// //   slideBy: 1,
// //   controlsPosition: "bottom",
// //   navPosition: "bottom",
// //   mouseDrag: true,
// //   autoplay: true,
// //   autoplayButtonOutput: false,
// //   controlsContainer: "#custom-control",
// //   responsive: {
// //     0: {
// //       items: 1,
// //       nav: false,
// //     },
// //     768: {
// //       items: 2,
// //       nav: true,
// //     },
// //     1440: {
// //       items: 3,
// //     },
// //   },
// // mode: 'gallery',
// // speed: 2000,
// // animateIn: "scale",
// // controls: false,
// // nav: false,
// // edgePadding: 20,
// // loop: false,
// // });

// tns();
