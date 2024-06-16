// 1. JSON =>(stringify,parse)

const student = {
    name: 'Shihab Uddin',
    age: 32,
    movies: ['king khan', 'dastan mastan']
};
console.log(student);
console.log('************************************');
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
console.log('********************************');
const revertToObject = JSON.parse(studentJSON);

console.log(revertToObject);
// 2. fetch

// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data));
// keys values
console.log('******************************************');
const keys = Object.keys(student);
console.log(keys);
console.log('***************************************');
const values = Object.values(student);
console.log(values);

// for each
console.log('******************************************');
const numbers = [14, 58, 98, 65, 47, 820, 1000];
numbers.forEach(number => {
    console.log(number);
})
console.log('**********************************************');
// 'for of' loop used in array like object
// 'for in' loop used in object

const products = [

    { name: 'laptop', price: 2000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'Sunglass', price: 300, brand: 'ribbon', color: 'black' },
    { name: 'Camera', price: 9000, brand: 'Cannon', color: 'gray' },

];

// add and remove from an array


const newProduct = { name: 'Web Cam', price: 3400, brand: 'xyz', color: 'black' }

// products.push(newProduct);
// console.log(products);


// copy products array then add new product

const newProducts = [...products, newProduct];

console.log(newProducts);

// create new array without an specific item

const remaining = products.filter(product => product.name !== 'Camera');
console.log('**********************************************************');
console.log(remaining);










