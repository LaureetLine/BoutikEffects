// Fonction pour basculer l'affichage des dropdowns
function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

// Ajoutez cet écouteur d'événements au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Ajoutez un écouteur d'événements sur tout le document
  document.addEventListener('click', function(event) {
    var targetElement = event.target; // L'élément sur lequel le clic a été effectué

    // Vérifiez si l'élément cliqué n'est pas dans le rectangle ou les boutons
    if (!targetElement.closest('.dropdown-content') && !targetElement.closest('.btn')) {
      // Si le clic est en dehors du rectangle et des boutons, masquez tous les rectangles
      var dropdownContents = document.querySelectorAll('.dropdown-content');
      dropdownContents.forEach(function(dropdownContent) {
        dropdownContent.style.display = 'none';
      });
    }
  });
});

// Fonction pour démarrer ou mettre en pause le son et changer l'image
function togglePlayPause() {
  var audio = document.getElementById('audio1'); // Utilisation de l'identifiant correct
  var playPauseButton = document.getElementById('playPauseButton'); // Utilisation de l'identifiant correct

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

