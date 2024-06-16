// 1 . Array destructuring

const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];
console.log(x, y);
// you can do above differently using destructuring

const [m, n] = numbers;
console.log(m, n);

function boxify(n1, n2) {
    const nums = [n1, n2];
    return nums;
}

const [first, second] = boxify(100, 200);
console.log(first, second);

const student = {
    name: 'Shihab Uddin',
    age: 32,
    movies: ['king khan', 'dastan mastan']
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// object destructuring

const { name, age } = { name: 'alu', age: 24 };
// ordering doesn't matter  
const { name1, age1 } = { id: 1017, name1: 'salu', age1: 24 };
console.log(name1);

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Mac',
    languages: ['html', 'CSS', 'JS', 'C++'],
    specification: {
        height: 55,
        weight: 98,
        address: 'Mir para',
        Drinks: 'BLU'
    }
}

const { machine, ide } = employee;
console.log(machine, ide);
const { weight, address, Drinks } = employee.specification;
console.log(weight, Drinks);

