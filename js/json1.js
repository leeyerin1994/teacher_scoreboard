const product = {
  a: 1,
  b: 2,
  c: 3
}
// for (let key in object)
for (let item in product) {
  console.log('key: ', item);
  console.log('value: ', product[item]);
}

const products = ['a', 'b', 'c'];
for (let item in products) {
  console.log(item, products[item]);
}
// es6 for ~ in => let ~ of
for (let item of products) {
  console.log(item);
}