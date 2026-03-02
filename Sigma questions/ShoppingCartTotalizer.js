let arr = [
  { price: 200, quantity: 6 },
  { price: 60, quantity: 3 },
];
function calculateTotal(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  let sum;
  arr.forEach((x) => {
    sum = x.price * x.quantity;
    total += sum;
  });
  return total;
}
let finalTotal = calculateTotal(arr);
console.log(finalTotal);
