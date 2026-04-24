
let scrolledToEdu, scrolledToEduH2, scrolledToEduCards = false


document.body.onscroll = ()=>{
    document.getElementById("navbar").style.marginTop = "4vw"

    if (window.scrollY < 30) {
    document.getElementById("navbar").style.marginTop = "-4vw"
    }

    const eduH1 = document.getElementById("eduHeader");
    const eduH2 = document.getElementById("eduHeader2");
    const eduCard1 = document.getElementById("card1");

    if (eduH1 && !scrolledToEdu && isInViewport(eduH1)) {
        scrolledToEdu = true;
        eduH1.style.margin = "3vw 5vw 1vw";
    }
    if (eduH2 && !scrolledToEduH2 && isInViewport(eduH2)) {
        scrolledToEduH2 = true;
        eduH2.style.marginTop = "0"
        eduH2.style.opacity = "1"
    }
    if (eduCard1 && !scrolledToEduCards && isInViewport(eduCard1)) {
        scrolledToEduCards = true;
        console.log("AYAYAYAYA")
        document.querySelectorAll(".cards").forEach((e) => {
            e.style.margin = "3vw 1vw 0vw"
            e.style.opacity = "1"
        })
    }
}


function isInViewport(e) {
  const rect = e.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}