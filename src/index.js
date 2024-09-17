import "./style.css";
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"

window.addEventListener("load", () => {
    homeButton().addEventListener("click", () => {
        clearContent()
        home(content)
    })

    menutButton().addEventListener("click", () => {
        clearContent()
        menu(content)
    })

    aboutButton().addEventListener("click", () => {
        clearContent()
        about(content)
    })

    initializeContent()
})

const content = () => document.getElementById("content")
const homeButton = () => document.getElementById("home-button")
const menutButton = () => document.getElementById("menu-button")
const aboutButton = () => document.getElementById("about-button")

function clearContent() {
    while (content().childElementCount > 2) { 
        content().lastChild.remove();
    }
}

function initializeContent() {
    home(content)
}