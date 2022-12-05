import { getTechnology, setTechnology } from "./database.js"

const techOptions = getTechnology()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const technology = () => {
    let html = `<select id="tech">`

    const listItems = 
        techOptions.map(tech => {
        return `<option value="${tech.id}"> ${tech.name}</option>`
        })
        
    html += listItems.join()
    html += `</select>`

    return html
}