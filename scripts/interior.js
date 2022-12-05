import { getInterior, setInterior } from "./database.js"

const interiorOptions = getInterior()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const interiors = () => {
    let html = `<select id="interior">`

    const listItems = 
        interiorOptions.map(interior => {
        return `<option value="${interior.id}"> ${interior.name}</option>`
        })
        
    html += listItems.join()
    html += `</select>`

    return html
}