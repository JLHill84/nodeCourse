// object property shorthand

const name = "Josh";
const age = 35;

const user = {
  name,
  age,
  location: "Houston"
};

console.log(user);

const product = {
  label: "red marker",
  price: 3,
  stock: 9001,
  salePrice: undefined
};

const { label, price, stock, salePrice } = product;

console.log(label, price, stock, salePrice);
