const menu = (content) => {
    const title = document.createElement("h2")
    title.textContent = "Nuestro Menú"

    const text = document.createElement("p")
    text.textContent = "Descubre platos preparados con ingredientes frescos y de la más alta calidad. Todos nuestros productos son importados directamente de Italia o adquiridos a productores locales, garantizando el sabor más auténtico."

    content().appendChild(title)
    content().appendChild(text)
}

export default menu