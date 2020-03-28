const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// const calculateTotalPrice = function(products, productName) {
//   let total = 0;
//   let productsPrice = products.price;
//   let productsQuantity = products.quantity;
//   for (const product of products) {
//     if (product === productName) {
//       total += productPrice * productQuantity;
//     }
//     return total;
//   }
// };
const calculateTotalPrice = function(products, productName) {
  let total = 0;
  let productsPrice = products.price;
  let productsQuantity = products.quantity;
  for (let i = 0; i < products.length; i += 1) {
    if (products[i] === productName) {
      total += productsPrice * productsQuantity;
    }
    return total;
  }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
