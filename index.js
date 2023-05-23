let aboutUs = document.getElementById("aboutUs");

// array of classes

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
};
