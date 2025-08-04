function enterWebsite() {
  const overlay = document.getElementById("videoOverlay")
  overlay.classList.add("hidden")

  // Optional: Remove the overlay completely after transition
  setTimeout(() => {
    overlay.style.display = "none"
  }, 1000)
}

// Show button after 14 seconds
setTimeout(() => {
  const buttonContent = document.getElementById("buttonContent")
  buttonContent.classList.add("show")
}, 9000)

// Ensure video plays on mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("background-video")
  video.play().catch(function (error) {
    console.log("Auto-play was prevented:", error)
  })
})

// Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle")
  const menu = document.querySelector(".navbar .menu-items")

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active")
    console.log("clicked")
  })
})
