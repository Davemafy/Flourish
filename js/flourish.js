const header = document.querySelector('header')

window.onscroll = () => {
    scrolling = window.scrollY

    if (scrolling > 0) {
        header.classList.add("scroll")
    } else if (scrolling <= 0) {
        header.classList.remove("scroll")
    }
}