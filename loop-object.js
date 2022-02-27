const student = {
    id: 101,
    name: 'Abul',
    major: 'mathematics',
    balance: 1000,
    isRich: false,
};
/* 
for(let i = 0; i < 10; i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/
// for in ---- শুধু একটা প্রোপাটি দিবে।
for (const prop in student){
    // console.log(prop,student[prop]);
}
// keys
const keys = Object.keys(student);
// console.log(keys);
for(const prop of keys){
    // console.log(prop,student[prop]);
}
// advanced
const entries = Object.entries(student);
// console.log(entries);
for(const [key, value] of Object.entries(student)) {
    console.log(key, value)
}
