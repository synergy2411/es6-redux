// ARROW Function

// var numbers = [1, 2, 3, 4, 5];

// // ES5
// var doubleArray = numbers.map(function (value) {
//     return value * 2;
// })

// // ES6
// var tripleArray = numbers.map((value, index) => {
//     console.log(index + " - " + value)
//     return value * 3;
// });


// console.log(doubleArray, tripleArray);


// var user = {
//     firstName : "Foo",
//     sayHi : function(){
//         var self = this;
//         function nestedFunc(){
//             return "Hi from " + self.firstName;
//         }
//         return nestedFunc();
//     }
// }
// console.log(user.sayHi());


// var user = {
//     firstName : "Foo",
//     sayHi : function(){
//         var nestedFunc = () => {
//             return "Hi from " + this.firstName;
//         }
//         return nestedFunc();
//     }
// }
// console.log(user.sayHi());



// function demo(){
//     console.log(arguments)
// }

// demo("Foo")
// demo("Foo", 32)
// demo("Foo", 32, true)


// var ask = (question, yes, no) => {
//     if(confirm(question)) yes()
//     else no()
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed"),
//     () => alert("Cancel the execution")
// )








// Promise

// Producer code
// var delay = (ms) => {
//     var promise = new Promise((resolve, reject) => {
//         if (ms < 3000) {
//             setTimeout(() => {
//                 resolve({ status: 200, message: "Success" });
//             }, ms);
//         } else {
//             reject(new Error("Too long time taken by server"));
//         }
//     });
//     return promise;
// }

// // Consumer Code
// delay(2000).then(
//     response => {
//         console.log(response);
//         return response['message'];
//     }
// ).then(
//     message => console.log("Server says : " + message)
// ).catch(err => console.log(err));









// Block Scope - let / const

// function demo(arr) {
//     if (arr.length > 2) {
//         let flash = "FLASHING";
//         console.log(load);              // ?
//     } else {
//         let load = "LOADING"
//     }
// }
// demo([2, 3, 4])


// var funcArray = [];
// for(let i =1; i<=5; i++){
// for(var i =1; i<=5; i++){
//     (
//         function(val){
//             funcArray.push(function(){return val;});
//         }
//     )(i)

// }

// console.log(funcArray[2]());            // ?
// console.log(funcArray[0]());            // ?
// console.log(funcArray[4]());            // ?


// const MAGIC_NUMBER = Math.round(Math.random() * 100);
// MAGIC_NUMBER = Math.round(Math.random() * 100); 

// console.log(MAGIC_NUMBER);

const USER = Object.freeze({
    name: "Foo"
})

// USER = {
//     name : "Bar"
// }

// USER.name = "Bar";

// console.log(USER);              // ?    


// Object.define















// Rest / Spread

// const display = (name, ...args) => {
//     console.log(args[1]);           // ?
//     // console.log(arguments)
// }

// display("Foo", 32, true)
// display("Foo", 32)


// const arr = [3,4,5];

// const newArr = [1,2, ...arr];      // ?

// console.log(newArr)

// const user = {
//     name : "foo",
//     isAdmin : true
// }

// const newUser = {
//     ...user,
//     age : 32,
//     isAdmin : false
// }

// console.log(newUser);

// const targetObject = Object.assign({}, user, {
//     email : "test@test.com", 
//     isAdmin  : false
// })

// user.friends = ["f1", "f2", "f3"];

// console.log(targetObject);



// let personA = {name  :"A"}
// let personB = personA;
// personB.name = "B";

// console.log(personA);           // ?








// DESTRUCTURING 
//  Array

// const names = ["foo", "bar", "bas", "bam"];

// const [n1, n2, n3, n4, n5] = names;
// names.push("baz")
// console.log(n3);            // ?
// console.log(n5);            // ?

// const display = ([n1,n2,n3]) => {
//     console.log(n2);    
//     return {n1,n3}        
// }

// const obj = display(names);
// console.log(obj);








// Object

// const obj = {
//     drawText : text => "Drawing " + text,
//     drawCircle : r => Math.PI * r * r,
//     name : "Foo"
// }

// let {drawCircle : dc, drawText : dt} = obj;
// name = "Bar";

// console.log(obj.name);

// console.log(dc(3));


// const display = ({drawText}) =>{
//     console.log(drawText("Sample Text"));
// }

// display(obj);




// let user = {
//     firstName: "Foo",
//     age: 32,
//     friends: ["Bar", "Bam", "Bas"],
//     address: {
//         street: "201 Main Road",
//         city: "Noida"
//     }
// }

// let { firstName: fn, age, friends: [f1, f2, f3], address: { street: st, city: ct } } = user;

// console.log(fn, age, f1, f2, f3, st, ct);

// let numbers = [3,4,5]

// let newNumbers = [1,2,...numbers];

// let [n1,n2,n3] = numbers;




// let users = [{ name: "foo", age: 32 }, { name: "Bar", age: 34 }]





// Template String Syntax

// let username = "Foo Bar";
// let age = 32;

// let str = `Hello from ${username}!
// I'm ${age} years old!`;

// console.log(str);

// let invoiceNo = 1234;
// let custName = "Kronos";

// function process(args, ...segments){
//     console.log(args, segments)
// }

// process `Invoice Number : ${invoiceNo} for Customer :${custName} is processing.`;

// Symbols

// let id1 = Symbol.for("id");
// let id2 = Symbol("id");

// // console.log(Symbol.keyFor(id1))

// // console.log( id1 === id2)

// let user ={
//     name : "Foo",
//     [id2] : 123
// }

// user[id1] = 101;

// for(let key in user){
//     console.log(key);
// }
//  console.log(user);


// console.log(typeof id);






// Well-known Symbols

// let arr = ["Tea","Coffee", "Latte"]

// arr[Symbol.isConcatSpreadable] = false;

// console.log(["Water", "Milk"].concat(arr));

// arr[Symbol.iterator] = false;

// for(let item of arr){
//     console.log(item);
// }


// let box = {
//     width : 2,
//     height : 4,
//     [Symbol.toPrimitive] : (typeVal) => {
//         if(typeVal === "number"){
//             return 8
//         }
//         return null;
//     }
// }

// console.log(+box);
// console.log(box);

// console.log(typeof(+"10") === "number")



// let regEx = /Hello/;
// let greet = "/Hello/";

// regEx[Symbol.match] = false;

// console.log(greet.startsWith(regEx));





// Maps

// let question = new Map();
// question.set("question", "What is latest JavaScript officially called?")
// question.set(1 , "ES5")
// question.set(2 , "ES6")
// question.set(3 , "ES2015")
// question.set(4 , "ES7")
// question.set(true, "Yipee. Correct Answer")
// question.set(false, "Try again.")
// question.set("correct", 3);

// console.log(question.get("question"));

// for(let [key , value] of question.entries()){
//     if(typeof key === 'number'){
//         console.log(`ANS ${key} : ${value}`)
//     }
// }

// process.stdin.on("readable", () => {
//     let chunk = process.stdin.read();
//     console.log(question.get(parseInt(chunk.toString()) === question.get("correct")));
// })


