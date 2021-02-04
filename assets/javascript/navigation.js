console.log(document);

function displayMenu() {
    if (document.documentElement.clientWidth < 960) {
    const menuToggle = document.getElementById("menuToggle");

    menuToggle.addEventListener("click", function() {
        const drawerMenu = document.getElementById('drawerMenu');
        drawerMenu.classList.add("navigation__menu--mobile--hidden");
    });
    }
}




// const closeButton = document.querySelector(".button--action--close");

// closeButton.addEventListener("click", function() {
//     const modal = document.getElementById('modal');
//     modal.classList.add("modal--hidden");
// });