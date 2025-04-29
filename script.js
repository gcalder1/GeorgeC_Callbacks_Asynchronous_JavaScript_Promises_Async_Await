// Example 1: Basic Callback
function greet(name, callback) {
    // Greet the person
    console.log(`Hello, ${name}!`);
 
    // Execute the provided callback function
    callback();
}
 
function sayGoodbye() {
    // Say goodbye
    console.log('Goodbye!');
}

console.log(greet('George', sayGoodbye)) //<--You want to place so it takes the place of the
//arg's location within the initial function's parameters, and then that will get
//called back and NOT called immediately. If you do sayGoodBye(), then you're
//trying to call the sayGoodbye function immediately, therefore making us run
//into an error

/*
When we run the greet() function, we'll see the console log go through because name
is being treated as a value that is being interpolated within a template literal,
but callback won't go through because its not a function itself. Arguments are place
holders in a sense. The arguments themselves are not actual functions, therefore we'll
get some sort of error when we treat callback as a function since it's not defined
anywhere and because the argument of callback itself is not a function.

ie: greet() -> `Hello, ${name}!` | error

BUT, if we were to pass the function of goodbye within the argument when calling the
greet function, then we should get a console log of `Hello, ${name}!` and `Goodbye!`
because now we're actually calling a function that is defined by something.

ie: greet('George', sayGoodbye) -> `Hello, ${name}!` | `Goodbye!`

*/

//my attempt at an example
function iAm (identity) { //<--JS just knows this is a function
    console.log(typeof identity);//<--Proof this is a function
    identity();//<--we're referring to it as a callback function
    }

iAm(() =>{ //<--
    console.log("I am George");    
});


//---Demonstration: Preparing a sandwhich---//

// function prepareIngredients(callback) {
//     setTimeout(() => {
// 		// Simulate a 2-second delay
// callback("Ingredients are prepared.");
//     }, 2000);
//  }

//  function makeSandwich () {
//     prepareIngredients((message1) => {
//         console.log(`message1:`, message1);
//     });
//  }

//  makeSandwich();

//+++Exercise: Using Callbacks+++//

function prepareIngredients(callback) {
    setTimeout(() => {
		// Simulate a 2-second delay
callback("Ingredients are prepared.");
    }, 1000);
 }

function makeSandwich () {
    prepareIngredients((message1) => {
        console.log(`message1:`, message1);
    });

    assembleSandwich((message2) => {
        console.log(`message2:`, message2);
    });

    serveSandwich((message3) => {
        console.log(`message3:`, message3);
    });

}

function assembleSandwich(sandwichStatus){
    setTimeout(() => {
        sandwichStatus("Sandwhich is assembled.")
    }, 1500);
};

function serveSandwich (sandwichServed){
    setTimeout(() =>{
        sandwichServed("Sandwich is served.")
    }, 2000);
};

makeSandwich();
//backwards because timings in ppt were messed up, fixing now

//Async/Await & Promises



 



 
 