

// Animation For Titles and sub-titles
const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.style.margin = "3vw 5vw 1vw";
            entry.target.style.opacity = "1";

            let eh2 = entry.target.nextElementSibling;
            eh2.style.marginTop = "0";
            eh2.style.opacity = "1";

        observer.unobserve(entry.target);
        }
    });
    },
    {
        threshold: 0.8, // trigger when 30% of element is visible
    }
);
document.querySelectorAll('.title').forEach(e => observer.observe(e));



document.body.onscroll = ()=>{
    document.getElementById("navbar").style.marginTop = "4vw"

    if (window.scrollY < 30) {
    document.getElementById("navbar").style.marginTop = "-4vw"
    }
}
document.querySelectorAll(".cards").forEach((e) => {
    e.style.margin = "3vw 1vw 0vw"
    e.style.opacity = "1"
})