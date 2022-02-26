const phone = {name: 'xawomi', color: 'white', price: 10000, strong: '2gb'};
// getting all properties names(objects)
const keys = Object.keys(phone);
console.log(keys);
// getting all values (objects)
const values = Object.values(phone);
console.log(values);
//properties and value added
const pair = Object.entries(phone);
console.log(pair);
// seal
Object.seal(phone);   // (seal) diye properti and value lock kora hoy.
// freeze
// Object.freeze(phone);  // freeze dile kono value chenge kora jabe na.
// value chenge
phone.name = 'samsung';
phone.price = 20000;
// Delete kora
delete phone.strong;
console.log(phone);
