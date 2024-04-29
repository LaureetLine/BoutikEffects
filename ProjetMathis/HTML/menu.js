const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Ajout d'un gestionnaire d'événement au clic sur le bouton de menu
menuBtn.addEventListener("click", function() {
    // Si le menu déroulant est caché, le montrer ; sinon, le cacher
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  });

// Ajoutez cet écouteur d'événements au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Ajoutez un écouteur d'événements sur tout le document
  document.addEventListener('click', function(event) {
    var targetElement = event.target; // L'élément sur lequel le clic a été effectué

    // Vérifiez si l'élément cliqué n'est pas dans le rectangle ou les boutons
    if (!targetElement.closest('.dropdown-menu') && !targetElement.closest('.menu')) {
      // Si le clic est en dehors du rectangle et des boutons, masquez tous les rectangles
      var dropdownContents = document.querySelectorAll('.dropdown-menu');
      dropdownContents.forEach(function(dropdownContent) {
        dropdownContent.style.display = 'none';
      });
    }
  });
});

