let aboutUs = document.getElementById("aboutUs");

// array of classes

aboutUs.onclick = () => {
  let elem = document.getElementsByClassName("footer-about_us-links");
  if (elem[0].classList.contains("none")) elem[0].classList.remove("none");
  else elem[0].classList.add("none");
};

let ourServices = document.getElementById("ourServices");

ourServices.onclick = () => {
  let elem = document.getElementsByClassName("footer-services-links");
  if (elem[0].classList.contains("none")) elem[0].classList.remove("none");
  else elem[0].classList.add("none");
};

let partners = document.getElementById("partners");

partners.onclick = () => {
  let elem = document.getElementsByClassName("footer-partners-links");
  if (elem[0].classList.contains("none")) elem[0].classList.remove("none");
  else elem[0].classList.add("none");
};
