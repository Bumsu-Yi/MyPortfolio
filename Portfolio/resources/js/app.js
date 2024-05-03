function toggleSkills() {
    
    var skillsContainers = document.querySelectorAll('.skills-container');
    // Loop through each skills-container starting from the second one
    for (var i = 1; i < skillsContainers.length; i++) {
        // Toggle the hide class to show/hide the skills-container
        skillsContainers[i].classList.toggle('hide');
    }

    // Toggle button text and icon based on visibility state
    var button = document.getElementById('toggleButton');
    var icon = document.getElementById('toggleIcon');

    if (skillsContainers[1].classList.contains('hide')) {
        button.textContent = 'See More';
        icon.setAttribute('data-icon', 'mdi:arrow-down');

    } else {
        button.textContent = 'See Less';
        icon.setAttribute('data-icon', 'mdi:arrow-up'); 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var currentPath = document.location.pathname
    var filenameWithExtension = currentPath.split('/').pop();
    var filename = filenameWithExtension.replace('.html', ''); // Remove .html extension
    var currentLink= document.getElementById(filename);
    currentLink.classList.add("active");      
});


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }


