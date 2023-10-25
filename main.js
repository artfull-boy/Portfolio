let upper = document.querySelector("svg");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        upper.style.display = "block"
    }
    if (document.documentElement.scrollTop <= 300) {
        upper.style.display = "none"
    }
})
upper.addEventListener("click", function() {
    document.documentElement.scroll(0,0)
})