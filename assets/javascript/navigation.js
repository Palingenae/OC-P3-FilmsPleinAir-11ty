console.log(document);

function displayMenu() {
    if (document.documentElement.clientWidth < 960) {
        const menuToggle = document.getElementById("menuToggle");
        const drawerMenu = document.getElementById('drawerMenu');

        menuToggle.addEventListener("click", function() {
            drawerMenu.classList.remove("navigation__menu--mobile--active");
        }, false);

        menuToggle.addEventListener("click", function() {
            drawerMenu.classList.add("navigation__menu--mobile--active");
        }, false);

    }
}


// const closeButton = document.querySelector(".button--action--close");

// closeButton.addEventListener("click", function() {
//     const modal = document.getElementById('modal');
//     modal.classList.add("modal--hidden");
// });