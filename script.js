const guestName = document.querySelectorAll(".guestName");

function previousShownGuest() {
    for (let i = 0; i < guestName.length; i++) {
        guestName[i].parentNode.children[1].style.opacity = 0;
    }
}

for (let i = 0; i < guestName.length; i++) {
  guestName[i].addEventListener("click", function showGuestInfo() {
    previousShownGuest();
    
    this.nextElementSibling.style.opacity = 1;
  });
}

