// Create an array containing the names of all items in the inventory.


let items = ["mango", "beans", "buckets", "oranges", "apples"];

// Array with the corresponding stock quantities of each item
let quantities = [10, 5, 8, 12, 3];

// Function to add a new item to the inventory, updating both arrays
function addItem(name, quantity) {
  items.push(name);
  quantities.push(quantity);
  console.log( `${name},${quantity}`)
}
addItem("kiwi", 4);

// Function to update the stock quantity of an existing item
function updateQuantity(name, quantity) {
  let index = items.indexOf(name);
  if (index !== -1) {
    quantities[index] = quantity;
    console.log(`${name},${quantity}`)
  }
}
updateQuantity("mango",20)

// Function to calculate the total number of items in the inventory
function totalItems() {
  let total = 0;
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i];
  }
  console.log(total);
}
let total = totalItems();



// Function to find the item with the lowest stock quantity
function Quantity() {
  let minQuantity = Math.min(...quantities);
  let index = quantities.indexOf(minQuantity);
  console.log(items[index]) ;
}
let lowest = Quantity();







