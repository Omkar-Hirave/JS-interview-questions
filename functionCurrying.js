function add1(a){
    return function multiply(b){
        return function division(c){
            return a + b * c / 0 ;
        }
    }
}

console.log("The data is ---> ",add1(5)(5)(5));

/*
What is currying ? 
A functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each


Uses of function currying
1 . It helps us to create a higher-order function.
2 . It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility
 */
