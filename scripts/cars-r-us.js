import {paintColors} from "./paintColors.js"
import {interiors} from "./interior.js"
import {technology} from "./technology.js"
import {wheels} from "./wheels.js"
import { newOrders } from "./orders.js"
import{addCustomOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRus = () => {
    return `
        <h1>cars R us</h1>

        <div class="paintColors">
            <h2>Paint Colors</h2>
                ${paintColors()}
        </div>

        <div class="interior">
            <h2>Interiors</h2>
                ${interiors()}
        </div>

        <div class="technology">
        <h2>Technology</h2>
            ${technology()}
        </div>

        <div class="wheels">
        <h2>Wheels</h2>
            ${wheels()}
         </div>

         <div class="button">
            <button id="orderButton">Create Custom Order</button>
        </div>

        <div class="orders">
            ${newOrders()}
            </div>
    `
}