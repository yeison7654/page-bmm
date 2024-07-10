let pageLoad = document.querySelector(".load-page");
/**ejecutar funciones despues de cargar la pagina web **/
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        btnMenu()
        navScroll()
        carouselMain()
        /**oculta pantalla de carga */
        pageLoad.classList.add("hidden")
    }, 1000);
})
/**Funcion de carga de menu en el modo responsivo **/
function btnMenu() {
    let btnOpenClose = document.querySelector(".btn-oc");
    let so = document.querySelector(".section-options");
    btnOpenClose.addEventListener("click", (e) => {
        e.preventDefault();
        if (so.classList.contains("s-hidden")) {
            so.classList.remove("s-hidden")
        } else {
            so.classList.add("s-hidden")
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
            document.querySelector(".float-up").classList.remove("hidden");
        } else if (scrolly < 15) {
            document.querySelector(".menu-nav-contact").classList.remove("hidden");
            document.querySelector(".float-up").classList.add("hidden");
        }
    });
}
function carouselMain() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 1
            },
            1080: {
                items: 1
            }
        }
    });
}