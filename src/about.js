const about = (content) => {
    schedule(content)
    location(content)
}

const schedule = (content) => {
    const title = document.createElement("h2")
    title.textContent = "Horarios y Reservas"

    const list = document.createElement("ul")
    const weekDays = document.createElement("li")
    weekDays.textContent = "Lunes a Viernes: 12:00 PM – 11:00 PM"
    const weekend = document.createElement("li")
    weekend.textContent = "Sábados y Domingos: 12:00 PM – 10:00 PM"
    list.appendChild(weekDays)
    list.appendChild(weekend)

    const text = document.createElement("p")
    text.textContent = "Puedes hacer tus reservas online o llamarnos directamente al +34 123 456 789. ¡No te quedes sin tu mesa!"

    content().appendChild(title)
    content().appendChild(list)
    content().appendChild(text)
}

const location = (content) => {
    const title = document.createElement("h2")
    title.textContent = "Ubicación"

    const text = document.createElement("p")
    text.textContent = "Nos encontramos en el corazón de la ciudad: Calle Italia, 123, Madrid, España."

    content().appendChild(title)
    content().appendChild(text)
}

export default about