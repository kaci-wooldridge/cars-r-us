// Customer should be able to choose one of the following paint colors. You set the price for each one.
const paintColor = [
    {
        id: 1,
        name: "Silver",
        price: 5,
    },
    {
        id: 2,
        name: "Midnight Blue",
        price: 10
    },
    {
        id: 3,
        name: "Firebrick Red",
        price: 15
    },
    {
        id: 4,
        name: "Spring Green",
        price: 20
    }
]

const interior = [
    {
        id: 1,
        name: "Beige Fabric",
        price: 5
    },
    {
        id: 2,
        name: "Charcoal Fabric",
        price: 10
    },
    {
        id: 3,
        name: "White Leather",
        price: 15
    },
    {
        id: 4,
        name: "Black Leather",
        price: 20
    }
]

const technology =[
    {
        id: 1,
        name: "Basic Package",
        price: 5
    },
    {
        id: 2,
        name: "Navigation Package",
        price: 10
    },
    {
        id: 3,
        name: "Visibility Package",
        price: 15
    },
    {
        id: 4,
        name: "Ultra Package",
        price: 20
    }
]

const wheels=[
    {
        id: 1,
        name: "17-inch Pair Radial",
        price: 5
    },
    {
        id: 2,
        name: "17-inch Pair Radial Black",
        price: 10
    },
    {
        id: 3,
        name: "18-inch Pair Spoke Silver",
        price: 15
    },
    {
        id: 4,
        name: "18-inch Pair Spoke Black",
        price: 20
    }
]

const customOrder = [
    {
        id: 1,
        paintId: 1,
        interiorId: 1,
        technologyId: 1,
        wheelsId: 1
    }
]

let orderBuilder = {}

export const getPaintColor = () =>{
    return paintColor.map(paintColor => ({...paintColor}))
}
export const getInterior  = () =>{
    return interior.map(interior => ({...interior}))
}
export const getTechnology = () =>{
    return technology.map(technology => ({...technology}))
}
export const getWheels= () =>{
    return wheels.map(wheel => ({...wheel}))
}
export const getOrders = () =>{
    return customOrder.map(order => ({...order}))
}

export const setPaint = (id) => {
    orderBuilder.paintId = id
}
export const setInterior = (id) => {
    orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...orderBuilder}
    // Add a new primary key to the object
    const lastIndex = customOrder.length - 1
    newOrder.id = customOrder[lastIndex].id + 1
    // Add the new order object to custom orders state
    console.log(newOrder)
    customOrder.push(newOrder)
    // Reset the temporary state for user choices
    orderBuilder = {}
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}