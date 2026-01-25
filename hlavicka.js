
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector(".hlavicka");
        const maxScroll = 230;

        window.addEventListener("scroll", () => {
            const opacity = Math.min(window.scrollY / maxScroll, 1);
            header.style.setProperty("--overlay-opacity", opacity);
        });
    });
