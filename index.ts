const menu = [
  {name: "Margherita", price: 10},
  {name: "Pepperoni", price: 12},
  {name: "Hawaiian", price: 14},
  {name: "Vegetarian", price: 12},
  {name: "Meat Lovers", price: 16},
  {name: "Chicken BBQ", price: 14},
]

type pizzaObj = {
  name: string,
  price: number
}

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: {id: number, pizza: pizzaObj, status: string}[] = []

// utility function that takes a pizza object and adds it to the menu
const addNewPizza = (pizzaObj: {name: string, price: number}) => {
  menu.push(pizzaObj)
}

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if(!selectedPizza) {
    console.error(`${pizzaName} is not on the menu`)
    return  // exit the function early if the pizza is not on the menu
  }
  cashInRegister += selectedPizza.price
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered"
  }
  orderQueue.push(newOrder)
  return newOrder
}

const completeOrder = (orderId: number) => {
  const order = orderQueue.find(order => order.id === orderId)
  order.status = "completed"
  return order
}

// adding new pizzas to our menu 
addNewPizza({name: "Chicken Bacon Ranch", price: 16})
addNewPizza({name: "Norway", price: 14})
addNewPizza({name: "Spicy Sausage", price: 14})

placeOrder("Spicy Sausage")
completeOrder(1)

console.log("Menu:", menu)
console.log("cash in register:", cashInRegister)
console.log("order queue:", orderQueue)