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

