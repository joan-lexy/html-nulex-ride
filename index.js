const lists = document.querySelector(".lists");
const links = document.querySelector(".links");
//console.log(lists);

lists.addEventListener("click", showLinks);
function showLinks() {
  links.classList.toggle("active");
}
