document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("sidebarMenu").classList.toggle("active");
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sidebarMenu").classList.remove("active");
});

function setupDropdown(linkId, menuId, wrapperId) {
  const link = document.getElementById(linkId);
  const menu = document.getElementById(menuId);
  const wrapper = document.getElementById(wrapperId);

  function isMobile() {
    return window.innerWidth <= 768;
  }

  if (isMobile()) {
 
    link.addEventListener("click", function (e) {
      e.preventDefault();

 
      document.querySelectorAll(".dropdown-menu").forEach(drop => {
        if (drop !== menu) drop.style.display = "none";
      });

      
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

   
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown") && !e.target.closest(".menu-btn")) {
        document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
      }
    });

  } else {
    
    link.addEventListener("click", function (e) {
      e.preventDefault();
      menu.style.display = "block";
    });

    wrapper.addEventListener("mouseleave", function () {
      menu.style.display = "none";
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    menu.style.display = "none";
  });

  // setupDropdown("homeLink", "homeDropdown", "homeDropdownWrapper");
  setupDropdown("serviceLink", "serviceDropdown", "serviceDropdownWrapper");
  setupDropdown("blogLink", "blogDropdown", "blogDropdownWrapper");
});
