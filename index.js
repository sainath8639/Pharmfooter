// array of classes
const ids = ["aboutUs", "ourServices", "partners"];
const uls = [
  "footer-about_us-links",
  "footer-services-links",
  "footer-partners-links",
];

let aboutUs = document.getElementById("aboutUs");
aboutUs.onclick = () => {
  let elem = document.getElementsByClassName("footer-about_us-links");
  let arrow = document.getElementsByClassName("arrow-icon")[0];

  if (elem[0].classList.contains("none")) {
    elem[0].classList.remove("none");
    arrow.src = "./images/downArrow.png";
  } else {
    elem[0].classList.add("none");
    arrow.src = "./images/right-arrow.png";
  }

  document.getElementById(ids[1]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[1])[0].classList.add("none");

  document.getElementById(ids[2]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[2])[0].classList.add("none");
};

let ourServices = document.getElementById("ourServices");

ourServices.onclick = () => {
  let elem = document.getElementsByClassName("footer-services-links");
  let arrow = document.getElementsByClassName("arrow-icon")[1];

  if (elem[0].classList.contains("none")) {
    elem[0].classList.remove("none");
    arrow.src = "./images/downArrow.png";
  } else {
    elem[0].classList.add("none");
    arrow.src = "./images/right-arrow.png";
  }

  document.getElementById(ids[0]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[0])[0].classList.add("none");

  document.getElementById(ids[2]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[2])[0].classList.add("none");
};

let partners = document.getElementById("partners");

partners.onclick = () => {
  let elem = document.getElementsByClassName("footer-partners-links");
  let arrow = document.getElementsByClassName("arrow-icon")[2];

  if (elem[0].classList.contains("none")) {
    elem[0].classList.remove("none");
    arrow.src = "./images/downArrow.png";
  } else {
    elem[0].classList.add("none");
    arrow.src = "./images/right-arrow.png";
  }

  document.getElementById(ids[0]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[0])[0].classList.add("none");

  document.getElementById(ids[1]).children[1].src = "./images/right-arrow.png";
  document.getElementsByClassName(uls[1])[0].classList.add("none");
};
