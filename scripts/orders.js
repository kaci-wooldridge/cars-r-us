import { getInterior, getPaintColor, getTechnology, getWheels, getOrders } from "./database.js"
const paints = getPaintColor()
const interior = getInterior()
const technology = getTechnology()
const wheels = getWheels()

const findTotalCost = (order) =>{

    let totalCost = 0
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = interior.find(
        (interiorChoice) => {
            return interiorChoice.id === order.interiorId
        }
    )
    const foundTechnology = technology.find(
        (techChoice) => {
            return techChoice.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>Order #${order.id} cost ${costString}</li>`
}

export const newOrders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(findTotalCost)

    html += listItems.join("")
    html += "</ul>"

    return html
}