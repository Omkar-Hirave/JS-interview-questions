/**
 What are closures ? 
 1 . Function inside a function : A closure is formed when you have a function defined inside another function and inner function has access to all the variables of the outer function
 2 . Persistent lexical scope : A inner function has acess to all the of the parameters and variables of the outer function  even after the function has returned.
 2 . Encapsulation : 
  Closures can be used to create private variables or functions.  
 */







// 1.Data privacy

function createCounter(){
    let count = 0 ;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
// console.log("The counter is ---> ",counter());
// console.log("The counter is ---> ",counter());

// Partial application and currying.
function multiply(a){
    return function(b){
        return a * b ;
    }
}
console.log(multiply(10)(20))