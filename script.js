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
function iAm (identity) { //<--identity is referencing the arrow function for it's value
    console.log(typeof identity);//<--confirming that the data type of arg is a function
    identity();//<--tells us to actually do smth the function referred to by the
    //identity argument cuz w/o it, the func would just sit there and do nothing
    }

iAm(() =>{ //<--we are calling the iAm function and using an arrow function as the
    //argument for it, which is what identity is referencing
    console.log("I am George"); //<--What gets printed to console at the end  
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


function makeSandwich () {
    console.log('Making Sandwich...')

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

function prepareIngredients(callback) {
    setTimeout(() => {
		// Simulate a 1-second delay
callback("Ingredients are prepared.");
    }, 1000);
};

function assembleSandwich(sandwichStatus){
    setTimeout(() => {
        // Simulate a 1.5-second delay
        sandwichStatus("Sandwhich is assembled.")
    }, 1500);
};

function serveSandwich (sandwichServed){
    setTimeout(() =>{
        // Simulate a 2-second delay
        sandwichServed("Sandwich is served.")
    }, 2000);
};

makeSandwich();

/*
What's happening here is that we're defining multiple functions which will serve
as our callback functions when it comes time to execute our makeSandwich function.

This is a case of using callback functions because the makeSandwich serves
as the higher order function, and within that higher order function we have the
callback functions: prepareIngredients, assembleSandwich, serveSandwich

order of stack:
makeSandwich() > 'Making Sandwich...' > prepareIngredients after 1 second > 
assembleSandwich after 1.5 seconds > serveSandwich after 2 seconds >
console logs all happen when delay timer finishes, not in the order of the
function calls.
*/

//backwards because timings in ppt were messed up, fixing now

//Async/Await & Promises

/*
function greet1() {
    console.log("Hello!");
    }
    
    function sayName() {
    console.log("Alice");
    greet1();
    }
    
    // Execution order:
    // sayName →
    // greet →
    // console.log
    sayName();

---
Explanation:

*/

/*
console.log("Start");
// Macrotask: setTimeout()
setTimeout(() => console.log("Timeout"), 0);
// Microtask: Promise
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output
// Start
// End
// Promise  // Microtask runs before macrotask
// Timeout
---
Because start and end are static, they will enter the stack first, and then promise
would enter the stack next since it's a microtask and the finally timeout since 
its a macrotask
*/

 



 
 