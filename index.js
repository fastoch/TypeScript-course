const menu = [
  {name: "Margherita", price: 10},
  {name: "Pepperoni", price: 12},
  {name: "Hawaiian", price: 14},
  {name: "Vegetarian", price: 12},
  {name: "Meat Lovers", price: 16},
]

const cashInRegister = 100
const orderQueue = []

// utility function that takes a pizza object and adds it to the menu
const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj)
}

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  cashInRegister += selectedPizza.price
  const newOrder = {
    pizza: selectedPizza,
    status: "ordered"
  }
  orderQueue.push(newOrder)
  return newOrder
}