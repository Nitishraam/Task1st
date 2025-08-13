function setupDropdown(linkId, menuId, wrapperId) {
  const link = document.getElementById(linkId);
  const menu = document.getElementById(menuId);
  const wrapper = document.getElementById(wrapperId);

 
  link.addEventListener("click", function (e) {
    e.preventDefault();
    menu.style.display = "block";
  });


  wrapper.addEventListener("mouseleave", function () {
    menu.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    menu.style.display = "none";
  });
});


setupDropdown("homeLink", "homeDropdown", "homeDropdownWrapper");
setupDropdown("serviceLink", "serviceDropdown", "serviceDropdownWrapper");
setupDropdown("blogLink", "blogDropdown", "blogDropdownWrapper");
