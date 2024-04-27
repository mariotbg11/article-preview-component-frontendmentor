const activeContainer = document.getElementById("share-container");
const shareIcon = document.getElementById("share");
const shareIconMobile = document.getElementById("share-mobile");

function showShareToggle() {
  activeContainer.classList.toggle("none");
}

shareIcon.addEventListener("click", showShareToggle, false);
shareIconMobile.addEventListener("click", showShareToggle, false);
