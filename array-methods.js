const products = [

    { name: 'laptop', price: 2000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'Sunglass', price: 300, brand: 'ribbon', color: 'black' },
    { name: 'Camera', price: 9000, brand: 'Cannon', color: 'gray' },

];

const brand = products.map(product => product.brand);
console.log(brand);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// filter return matched data as array
console.log('**************************************************************************');
const cheap = products.filter(product => product.price < 3000);
console.log(cheap);
console.log('*******************************************************************');
// filter the product that has 'n' in its name

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);
console.log('**********************************************************************');
// find is same as filter. difference is its just show the first filtered answer . It doesn't show rest of the filtered answer.

const special = products.find(p => p.name.includes('n'));

console.log(special);
