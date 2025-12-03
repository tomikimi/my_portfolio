// Mobile Navigation Elements
const navLink = document.getElementById("hamburger-icon");
const closeLink = document.getElementById("close-icon");

// Function to Display and hide site navigation links on mobile devices
function displayNavLink(event) {
  const targetID = event.target.id; // Get the target ID of the event that initiates the action
  let mobile_nav_links;

  switch (targetID) {
    case "hamburger-icon":
      document.getElementById("hamburger-icon").style.display = "none";
      document.getElementById("close-icon").style.display = "block";

      mobile_nav_links = document.getElementById("mobile-link");
      mobile_nav_links.style.display = "block";
      break;
    case "close-icon":
      document.getElementById("hamburger-icon").style.display = "block";
      document.getElementById("close-icon").style.display = "none";

      mobile_nav_links = document.getElementById("mobile-link");
      mobile_nav_links.style.display = "none";
      break;
  }
}

function pageScroll(event) {
  const targetID = event.target.id;
  console.log(targetID);
}

// Click Events to hide and display site navigation links
navLink.addEventListener("click", displayNavLink);
closeLink.addEventListener("click", displayNavLink);
