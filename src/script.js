function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const themeIcon = document.getElementById("themeIcon");

  // Toggle theme on checkbox change
  themeSwitchinput.addEventListener("change", () => {
    if (themeSwitchinput.checked) {
      themeIcon.innerHTML("src", "./images/sun.png");
    } else {
      themeIcon.setAttribute("src", "./images/moon.png");
    }
  });
});

// ==================  Mobile Menu  Start  ====================

let mobileButton = document.getElementById("nav-toggle"); // Corrected variable name
let mobileMenu = document.getElementById("mobilemenu");

mobileButton.addEventListener("click", function () {
  // Corrected event listener target
  mobileMenu.classList.toggle("top-[90px]");
});

document.addEventListener("click", function (event) {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileButton.contains(event.target)
  ) {
    mobileMenu.classList.remove("top-[90px]"); // Close the menu if clicking outside
  }
});

window.addEventListener("scroll", function () {
  mobileMenu.classList.remove("top-[90px]"); // Close the menu when scrolling
});

// ==================  Mobile Menu End  ====================

// ==================  Typing Text Start  ====================
const textElement = document.getElementById("typing-text");
const phrases = ["Zaroon Ali", "Web Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.innerHTML =
    charIndex === 0 ? "&nbsp;" : currentPhrase.slice(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 500); // Pause before typing next word
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}

document.addEventListener("DOMContentLoaded", () => typeEffect());

// ==================  Typing Text End  ====================

// ==================  Fixed header Start  ====================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    // Add class if scrolled beyond 50px
    header.classList.add("lg:bg-white", "shadow-lg", "lg:dark:bg-dark_600");
  } else {
    header.classList.remove("lg:bg-white", "lg:dark:bg-dark_600");
  }
});

// ==================  Fixed header End  ====================

// ==================  Gallery  ====================

const projectImg = document.querySelectorAll(".project-img");
const projectIcons = document.querySelectorAll(".project-icons");
const projectTitle = document.querySelectorAll(".project-title");
const projectDes = document.querySelectorAll(".project-des");
const modelBox = document.querySelector(".model-box");
const modelImg = document.querySelector(".model-img");
const modelTitle = document.querySelector(".model-title");
const modelDes = document.querySelector(".model-des");
const cross = document.querySelector(".cross");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
let currentIndex = 0;

// Function to open the modal with the current index
const openModal = (index) => {
  modelBox.classList.remove("hidden");
  currentIndex = index;
  modelImg.src = projectImg[currentIndex].src;
  modelTitle.innerHTML = projectTitle[currentIndex].innerHTML;
  modelDes.innerHTML = projectDes[currentIndex].innerHTML;
};

// Loop to add event listeners to each project icon
projectIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    openModal(index);
  });
});

// Event listener for the next button
next.addEventListener("click", () => {
  if (currentIndex < projectIcons.length - 1) {
    openModal(currentIndex + 1); // Increment the index and open the modal
  }
});

// Event listener for the back button
back.addEventListener("click", () => {
  if (currentIndex > 0) {
    openModal(currentIndex - 1); // Decrement the index and open the modal
  }
});

cross.addEventListener("click", () => {
  modelBox.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  const isNextOrBack =
    event.target.classList.contains("next") ||
    event.target.classList.contains("back");
  const isModelBox = modelBox.contains(event.target);

  if (!isNextOrBack && isModelBox) {
    modelBox.classList.add("hidden");
  }
});

// ==================  Gallery  ====================

       


         