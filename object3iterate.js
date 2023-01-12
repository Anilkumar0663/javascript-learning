const key = "email";
const person = {name:"anil",age:21,"person skill":["javascript","c++","cyber"]};
person["gender"]="male"
person[key] =  "abc@gmail.com";
//console.log(person); 



/// how to iterate a object 

// object.key 
// by loop 

// for(let key in person){
//     console.log(`${key} :${person[key]}`);

// }

//console.log(Object.keys(person));
// a object is typeOf obejct always

// how to a object convert into array 
const test = Array.isArray((Object.keys(person)));
console.log(test);