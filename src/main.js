import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});


const dropdownBtn1 = document.getElementById("sub-btn1");
const dropdownMenu1 = document.getElementById("sub-dropdown1");
const toggleArrow1 = document.getElementById("sub-arrow1");

// Toggle dropdown function
const toggleDropdown1 = function () {
  dropdownMenu1.classList.toggle("show");
  dropdownBtn1.classList.toggle("font-700");
  toggleArrow1.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn1.addEventListener("click", function (e) {
  e.stopPropagation();

  toggleDropdown1();
});


const dropdownBtn2 = document.getElementById("sub-btn2");
const dropdownMenu2 = document.getElementById("sub-dropdown2");
const toggleArrow2 = document.getElementById("sub-arrow2");

// Toggle dropdown function
const toggleDropdown2 = function () {
  dropdownMenu2.classList.toggle("show");
  dropdownBtn2.classList.toggle("font-700");
  toggleArrow2.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn2.addEventListener("click", function (e) {
  e.stopPropagation();

  toggleDropdown2();
});

const dropdownBtn3 = document.getElementById("sub-btn3");
const dropdownMenu3 = document.getElementById("sub-dropdown3");
const toggleArrow3 = document.getElementById("sub-arrow3");

// Toggle dropdown function
const toggleDropdown3 = function () {
  dropdownMenu3.classList.toggle("show");
  dropdownBtn3.classList.toggle("font-700");
  toggleArrow3.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn3.addEventListener("click", function (e) {
  e.stopPropagation();

  toggleDropdown3();
});


const dropdownBtn4 = document.getElementById("sub-btn4");
const dropdownMenu4 = document.getElementById("sub-dropdown4");
const toggleArrow4 = document.getElementById("sub-arrow4");

// Toggle dropdown function
const toggleDropdown4 = function () {
  dropdownMenu4.classList.toggle("show");
  dropdownBtn4.classList.toggle("font-700");
  toggleArrow4.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn4.addEventListener("click", function (e) {
  e.stopPropagation();

  toggleDropdown4();
});


const dropdownBtn5 = document.getElementById("sub-btn5");
const dropdownMenu5 = document.getElementById("sub-dropdown5");
const toggleArrow5 = document.getElementById("sub-arrow5");

// Toggle dropdown function
const toggleDropdown5 = function () {
  dropdownMenu5.classList.toggle("show");
  dropdownBtn5.classList.toggle("font-700");
  toggleArrow5.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn5.addEventListener("click", function (e) {
  e.stopPropagation();

  toggleDropdown5();
});

const subdropdownBtn1 = document.getElementById("sub-sub-btn1");
const subdropdownMenu1 = document.getElementById("sub-sub-dropdown1");
const subtoggleArrow1 = document.getElementById("sub-sub-arrow1");

// Toggle dropdown function
const subtoggleDropdown1 = function () {
  subdropdownMenu1.classList.toggle("show");
  subdropdownBtn1.classList.toggle("font-700");
  subtoggleArrow1.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
subdropdownBtn1.addEventListener("click", function (e) {
  e.stopPropagation();

  subtoggleDropdown1();
});


const subdropdownBtn2 = document.getElementById("sub-sub-btn2");
const subdropdownMenu2 = document.getElementById("sub-sub-dropdown2");
const subtoggleArrow2 = document.getElementById("sub-sub-arrow2");

// Toggle dropdown function
const subtoggleDropdown2 = function () {
  subdropdownMenu2.classList.toggle("show");
  subdropdownBtn2.classList.toggle("font-700");
  subtoggleArrow2.classList.toggle("arrow");
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
subdropdownBtn2.addEventListener("click", function (e) {
  e.stopPropagation();

  subtoggleDropdown2();
});

const subdropdownBtn3 = document.getElementById("sub-sub-btn3");
const subdropdownMenu3 = document.getElementById("sub-sub-dropdown3");
const subtoggleArrow3 = document.getElementById("sub-sub-arrow3");

// Toggle dropdown function
const subtoggleDropdown3 = function () {
  subdropdownMenu3.classList.toggle("show");
  subdropdownBtn3.classList.toggle("font-700");
  subtoggleArrow3.classList.toggle("arrow");
  
};
// font-700
// Toggle dropdown open/close when dropdown button is clicked
subdropdownBtn3.addEventListener("click", function (e) {
  e.stopPropagation();

  subtoggleDropdown3();
});

