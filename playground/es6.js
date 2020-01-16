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
    name : "Foo"
})

// USER = {
//     name : "Bar"
// }

USER.name = "Bar";

console.log(USER);              // ?    


Object.define













