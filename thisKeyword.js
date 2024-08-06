/**
 1. Global Context : In the global execution context , this refers to the global object
  
 */
 console.log(this);


 /*
 2 . Function Context: In a regular function , this refers to the global object if the function is called in the global scope 
 */
function showThis(){
    console.log(this)
}
showThis()

/**
 3 . Object Method Context : When a function is called as a method of an object , 'this' refers to the object, this method is called on  
 */
const person = {
    name : "Omkar",
    greet : function(){
        console.log(this)
    }
}
person.greet();

