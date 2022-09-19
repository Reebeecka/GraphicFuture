function removeCookies() {
  document.getElementById("cookies").style.display = "none";
};


function showNav() {
  let nav = document.getElementById("nav")
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");
  let line3 = document.getElementById("line3");

  if (nav.style.display === "block") {
    nav.style.display = "none";
    line2.style.display = "block";
    line1.style.top = "25px"
    line1.style.transform = "rotate(0deg)"
    line3.style.top = "49px"
    line3.style.transform = "rotate(0deg)"
  }
  else {
    gsap.from("#nav", {x: 300, duration: 1});
    nav.style.display = "block";
    line2.style.display = "none";
    line1.style.top = "37px"
    line1.style.transform = "rotate(45deg)"
    line3.style.top = "37px"
    line3.style.transform = "rotate(-45deg)"
  }
};

function hoverImgEnter(id) {
  let item = "#" + id.toString();
  gsap.to(item, 0.5, { opacity: 1, scaleX: 1.2, scaleY: 1.2, transformOrigin: "center", marginTop: 0, ease: Power1.easeIn });
};
function hoverImgLeave(id) {
  let item = "#" + id.toString();
  gsap.to(item, 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "center", marginTop: 0, ease: Power1.easeIn });
};

function hoverSVGEnter(id) {
  let item = "#" + id.toString();
  gsap.to(item, 0.2, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "center", marginTop: 0, ease: Power1.easeIn });
};
function hoverSVGLeave(id) {
  let item = "#" + id.toString();
  gsap.to(item, 0.2, { opacity: 1, scaleX: 0.6, scaleY: 0.6, transformOrigin: "center", marginTop: 0, ease: Power1.easeIn });
};

