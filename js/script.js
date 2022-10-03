const menuButton = document.getElementById("menu-button")
const navBar = document.getElementById("nav")

const toggleMenu = () => {
  const isOpen = navBar.classList.contains("nav-show")
  const isMenuBar = menuButton.classList.contains("bx-menu")

  if (!isOpen && isMenuBar) {
    navBar.classList.add("nav-show")
    menuButton.classList.add("bx-x")
    menuButton.classList.remove("bx-menu")
  } else {
    navBar.classList.remove("nav-show")
    menuButton.classList.remove("bx-x")
    menuButton.classList.add("bx-menu")
  }
}

menuButton.addEventListener("click", toggleMenu)

const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu()
  })
})
