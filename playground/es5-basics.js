// var x = "20";
// var y = 10;
// var z = 20;

// console.log(x + y);           // 2010
// console.log(x - y);           // ?
// console.log(x === z);            // ?


// Object Creation :
// - Literal Method

// var myBooks = ["book1", "book2","book3"];
// var box = {
//  width : 4,
//  height: 6,
//  length : 8,
//  books : myBooks,
//  addBook : function(){}   
// }
// box.volume = box.width * box.length* box.height;
// delete box.xyz;

// console.log(box)
// box.books.push("book4")
// console.log(box.books.length);      // 4
// console.log(myBooks.length);      // ?

// - Constructor 
// function Person(firstName, lastName){
//     // var this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHello = function(){
//         return "Hello from " + this.firstName + " " + this.lastName; 
//     }
//     // return this;
// }

// var foo = new Person("Foo", "Bar");
// var bas = new Person("Bas", "baz");
// console.log(foo.sayHello());
// console.log(bas.sayHello());


// - Instance

// var Shoe = {
//     size : 8,
//     construction : "women"
// }

// var magicShoe = Object.create(Shoe);

// // console.log(magicShoe);
// magicShoe.size = "10";
// console.log(magicShoe);            //? 
// console.log(Shoe.size);                    // ?


// var str = "Some String";
// console.log(str.length);            //?


// var x ="String";
// console.log(typeof x);

// x = 123;
// console.log(typeof x);

// x = true;
// console.log(typeof x);


// Prototype

// function Person(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
// }

// Person.prototype.greet = function () {
//     var num = 12;
//     num++;
//     return "Hi from " + this.fName + " " + this.lName + " : " + num;
// }

// var foo = new Person("Foo", "Bar");
// var bar = new Person("Bar", "Bam");
// console.log(foo.greet())
// console.log(bar.greet())





// var str = "Welcome to JsavaScript";

// String.prototype.countAll = function (letter) {
//     var counter = 0;

//     for (var i = 0; i < this.length ; i++) { 
//         if(this.charAt(i).toUpperCase() === letter.toUpperCase()){
//             counter++;
//         }
//     }

//     return counter;
// }

// console.log(str.countAll('o'));








// var Shoe = {
//     size : 8,
//     construction : "women"
// }

// var magicShoe = Object.create(Shoe);

// console.log(magicShoe.hasOwnProperty('size'));
// console.log(Shoe.hasOwnProperty('size'));

// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Object.prototype.isPrototypeOf(Shoe));      // ?
// console.log(Object.prototype.isPrototypeOf(magicShoe));      // ?









// FUNCTIONS

// var addition = function (num1,num2){
//     return num1 + num2;
// }

// console.log(addition(3,5));          //?



// function mystery(){
//     function chooseNumber(){
//         return 7
//     };
//     return chooseNumber;
//     function chooseNumber(){
//         return 12
//     };
// }

// // console.log(mystery());             //?

// var nestedFunc = mystery();
// console.log(nestedFunc());






// function mystery(){
//     var chooseNumber = function (){
//         return 7
//     };
//     return chooseNumber;
//     var chooseNumber =function (){
//         return 12
//     };
// }

// // console.log(mystery());             //?

// var nestedFunc = mystery();
// console.log(nestedFunc());



// IIFE


// var myVar = 102;



// function a(){
//     // var myVar = 201;

//     function b(){
//         console.log(myVar);             // ?
//     }
//     b()
// }

// a();


// (function(){
//     console.log("IIFE Called");
// }());



//  HOF / Callback

// setTimeout(function(){
//     console.log("3 seconds lefts!")
// }, 3000);

// console.log("Processing...");


// function greet(err, greetings){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(greetings);    
//     }
// }

// function morningGreet( arr, cb){
//     if(arr.length > 2){
//         cb(null, "Good Morning");
//     }else{
//         cb(new Error("It's not morning"));
//     }
    
// }

// morningGreet([2,3], greet);