// Below is an array of products that are in a cart.
// Write a function That will take in an item to modify in the cart and the cart array.
// The function will update the quantity of the item you are passing in.
// When you have updated the cart then return the new cart.

let cart = [
  {
    id: 1,
    product: "Snapple Raspberry Tea",
    price: 16.82,
    quantity: 2
  },
  {
    id: 2,
    product: "Wine - Peller Estates Late",
    price: 15.07,
    quantity: 3
  },
  {
    id: 3,
    product: "Isomalt",
    price: 6.42,
    quantity: 2
  },
  {
    id: 4,
    product: "Green Scrubbie Pad H.duty",
    price: 15.33,
    quantity: 3
  },
  {
    id: 5,
    product: "Soup Campbells Split Pea And Ham",
    price: 4.03,
    quantity: 3
  }
];

function updateQuantity(product, currentCart) {
  let newCart = currentCart;
  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].id === product.id) {
      newCart[i].quantity = product.quantity;
    }
  }
  return newCart;
}

cart = updateQuantity({ id: 4, quantity: 6 }, cart);

let updateQuantityQuick = (product, currentCart) => {};
