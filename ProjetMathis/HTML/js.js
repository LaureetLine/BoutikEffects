var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');
var backgroundImg = document.querySelector('.container img');
var currentBackground = 0;
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

leftArrow.onclick = changeBackground;
rightArrow.onclick = changeBackground;

var backgrounds = [
    { name: 'image1FondSite.png', path: "../Images/image1FondSite.jpg" },
    { name: 'image2FondSite.png', path: "../Images/image2FondSite.png" },
    { name: 'image3FondSite.png', path: "../Images/image3FondSite.png" }
    // Ajoutez d'autres images de fond au besoin
];

function changeBackground() {
    if (this.id === 'leftArrow') {
        currentBackground = (currentBackground === 0) ? backgrounds.length - 1 : currentBackground - 1;
    } else if (this.id === 'rightArrow') {
        currentBackground = (currentBackground === backgrounds.length - 1) ? 0 : currentBackground + 1;
    }
    backgroundImg.src = backgrounds[currentBackground].path;
}

function openBlogPage() {
    window.location.href = 'blog.html';
}

// Ajout d'un gestionnaire d'événement au clic sur le bouton de menu
menuBtn.addEventListener("click", function() {
    // Si le menu déroulant est caché, le montrer ; sinon, le cacher
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  });