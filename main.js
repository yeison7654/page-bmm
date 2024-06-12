/**ejecutar funciones despues de cargar la pagina web **/
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        btnMenu()
        navScroll()
    }, 1000);
})
/**Funcion de carga de menu en el modo responsivo **/
function btnMenu() {
    let btnOpenClose = document.querySelector(".btn-oc");
    let so = document.querySelector(".section-options");
    btnOpenClose.addEventListener("click", (e) => {
        e.preventDefault();
        if (so.classList.contains("hidden")) {
            so.classList.remove("hidden")
        } else {
            so.classList.add("hidden")
        }
    })
}
function navScroll() {
    document.addEventListener("scroll", () => {
        //capturamos el valor en movimiento del scroll en y
        scrolly = window.scrollY;
        if (scrolly > 14
        ) {
            document.querySelector(".menu-nav-contact").classList.add("hidden");
        } else if (scrolly < 15) {
            document.querySelector(".menu-nav-contact").classList.remove("hidden");
        }
    });
}