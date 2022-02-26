// 1. using object literal
const student = {name: 'sobuj', id: 1001, address: 'Dhaka'};
// 2. constructor
const person = new Object();
// 3. 
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.id);
// 4.class theke object banano............
class people{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new people('namush', 100);
console.log(peop);
// 5.function
function Manush(name){
    this.name = name;
}
const man = new Manush('Babul');
console.log(man);
