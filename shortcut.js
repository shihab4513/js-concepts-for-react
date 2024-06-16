// number to string shortcut conversion
const num = 54;
const StringConverted = num + '';
console.log(StringConverted);
console.log('****************************');

// shortcut string to number conversion

const input = '100';
const convertedToNumber = +input;
console.log(convertedToNumber);
console.log('*************************************');
// 
let isActive = false;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');

isActive === true ? showUser() : hideUser();
console.log('*************************************');
// Toggle, if isActive is true it will be false. if false then it will be true 
isActive = !isActive;
console.log(isActive);