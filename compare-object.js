const first = {b: 2};
const second = {b: 2};
if(first === second){
    console.log('object are equal');
}
else{
    console.log('object are different');
}
// stringify
console.log(JSON.stringify(first)); 
console.log(JSON.stringify(second)); 
if(JSON.stringify(first)  === JSON.stringify(second)){
    console.log('object are equal');
}
else{
    console.log('object are different');
}