const buttonHamburger = document.getElementById("hamburger");


const displayMenu = function() {

    var display = false;

    if(display===false) {
        const listMenu = document.getElementById("list-menu");
        listMenu.classList.remove("d-none");
        listMenu.classList.remove("d-lg-block");
        display = true;
    }
    else if (display===true) {
        let listMenu = document.getElementById("list-menu");
        listMenu.classList.add("d-none");
        listMenu.classList.add("d-lg-block");
    }
}

buttonHamburger.addEventListener("click", displayMenu,false);

