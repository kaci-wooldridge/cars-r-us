import { getWheels, setWheels } from "./database.js"

const wheelOptions = getWheels()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const wheels = () => {
    let html = `<select id="wheels">`

    const listItems = 
        wheelOptions.map(wheel => {
        return `<option value="${wheel.id}"> ${wheel.name}</option>`
        })
        
    html += listItems.join()
    html += `</select>`

    return html
}