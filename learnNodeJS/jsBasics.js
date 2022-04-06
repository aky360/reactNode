const person = {
     name: "max",
     age: 20,
     greet: function () {
          console.log("this is objects");
     }
}

const person1 = {
     name: "max",
     age: 20,
     greet:  () => {
          console.log("this is object 2");
     }
}

const person2 = {
     name: "max",
     age: 20,
     greet(){
          console.log("this is object 3");
     }
}

console.log(person.greet());
console.log(person1.greet());
console.log(person2.greet());


const copiedObjects = [person, person1, person2];
//spread operator in objects for copy the objects into new var
const copiedObjPerson = {...person};
console.log("copiedObjPerson ", copiedObjPerson);
console.log("copiedObjects ", copiedObjects);



const hobbies = ["sports", "cooking", 1, "playings"];
console.log(hobbies);

//new array creations 
var arr = [];
arr = hobbies.map(hobby => "hobbyis " + hobby);
console.log(arr);


console.log("new arr  ", arr);

hobbies.push("programming");
console.log(hobbies);
console.log("new arsedfr  ", arr);


///spred operator to copy the old array it pulled out the old array data one by one

const copiedArr = [...hobbies];
console.log("copy of old arr ", copiedArr);


const toArray = (...args) => {
     return args;
}

console.log(toArray(1, 2, 3));
console.log(typeof toArray(4, 5, 6));

//array destructuring

const printName = ({ name }) => {
     console.log("name is ", name);
}

printName(person);

const { name, age } = person;
console.log(name, age);


const [hobby1, hobby2] = hobbies;

console.log("hobbies ", hobby1, hobby2);
