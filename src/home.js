const home = (content) => {
    const title = document.createElement("h2")
    title.textContent = "Auténtico sabor italiano en cada bocado"

    const text = document.createElement("p")
    text.textContent = "Bienvenidos a Ristorante La Dolce Vita, un rincón en el corazón de la ciudad donde los aromas, sabores y tradiciones de Italia se mezclan para ofrecerte una experiencia gastronómica inolvidable. Nuestro chef, formado en las mejores trattorias de Roma, ha diseñado un menú que combina lo mejor de la cocina tradicional italiana con un toque moderno."

    content().appendChild(title)
    content().appendChild(text)
}

export default home