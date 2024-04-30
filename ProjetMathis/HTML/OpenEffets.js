// Fonction pour basculer l'affichage des dropdowns
function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  var dropdownStatus = dropdownContent.style.display;

  // Fermer tous les dropdowns
  var allDropdownContents = document.querySelectorAll('.dropdown-content');
  allDropdownContents.forEach(function(item) {
    item.style.display = 'none';
  });

  // Ouvrir le dropdown actuel
  dropdownContent.style.display = (dropdownStatus === "block") ? "none" : "block";

  // Ajuster la position des boutons en dessous du dropdown actuel
  updateButtonMargins();

  // Mettre à jour la position du fond bleu
  updateBackgroundPosition();
}

// Fonction pour mettre à jour les marges des boutons en dessous des dropdowns ouverts
function updateButtonMargins() {
  var dropdowns = document.querySelectorAll('.dropdown-content');

  dropdowns.forEach(function(dropdown, index) {
    var container = dropdown.parentElement;
    var containersBelow = document.querySelectorAll('.container ~ .container');

    containersBelow.forEach(function(item, itemIndex) {
      if (itemIndex > index) {
        // Pour les boutons suivants, utilisez uniquement une marge fixe de 10 pixels
        item.style.marginTop = '10px';
      } else if (itemIndex === index) {
        // Pour le premier dropdown, utilisez la hauteur du dropdown plus 10 pixels comme marge
        item.style.marginTop = dropdown.clientHeight + 10 + 'px';
      }
    });
  });
}

// Fonction pour démarrer ou mettre en pause le son et changer l'image
function togglePlayPause(audioId, buttonId) {
  var audio = document.getElementById(audioId); // Utilisation de l'identifiant correct
  var playPauseButton = document.getElementById(buttonId); // Utilisation de l'identifiant correct

  if (audio.paused) {
    // Si le son est en pause, démarrer le son et changer l'image en "pause.png"
    audio.play();
    playPauseButton.src = "../Images/pause.png";
  } else {
    // Si le son est en lecture, mettre en pause le son et changer l'image en "play.png"
    audio.pause();
    playPauseButton.src = "../Images/play.png";
  }
}

// Fonction pour mettre à jour la position du fond bleu
function updateBackgroundPosition() {
  var flecheBas = document.querySelector('.flecheBas');
  var background = document.querySelector('.background');

  // Récupérer la position verticale de la flèche bas
  var flecheBasPosition = flecheBas.getBoundingClientRect().top;

  // Définir la position du fond bleu
  background.style.top = flecheBasPosition - 10 + 'px';
}

// Ajoutez cet écouteur d'événements au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Mettez à jour la position du fond bleu une fois que la page est complètement chargée
  updateBackgroundPosition();

  // Ajoutez un écouteur d'événements sur tout le document pour gérer les clics en dehors des dropdowns
  document.addEventListener('click', function(event) {
    var targetElement = event.target; // L'élément sur lequel le clic a été effectué

    // Vérifiez si l'élément cliqué n'est pas dans le rectangle ou les boutons
    if (!targetElement.closest('.dropdown-content') && !targetElement.closest('.btn')) {
      // Si le clic est en dehors du rectangle et des boutons, masquez tous les rectangles
      var dropdownContents = document.querySelectorAll('.dropdown-content');
      dropdownContents.forEach(function(dropdownContent) {
        dropdownContent.style.display = 'none';
      });
      // Mettre à jour les marges des boutons lorsque tous les dropdowns sont fermés
      updateButtonMargins();
    }
  });
});

// Ajoutez un écouteur d'événements pour détecter le défilement de la page
window.addEventListener('scroll', function() {
  updateBackgroundPosition();
});

