import { getPaintColor, setPaint } from "./database.js"

const paints = getPaintColor()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setPaint(parseInt(chosenOption))
        }
        
    }
)

export const paintColors = () => {
    let html = `<select id="paint">`

    const listItems = 
        paints.map(paint => {
        return `<option value="${paint.id}"> ${paint.name}</option>`
        })
        
    html += listItems.join()
    html += `</select>`

    return html
}