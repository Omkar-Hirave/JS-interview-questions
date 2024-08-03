let obj = {
    name : "Peter"
}

let user = obj;
user.name = 'Omkar'

// console.log("The value of the user is ---> ",obj);
/**
 In the above code , the data from the one object will not get copied into another object instead memory reference will get copied , because of which any change in one object will result change in other object. 
 This is copy by reference
 */

let x = "Omkar";
let y = x ; 
y = "Shubham"
// console.log("The data is ----> ",x);

/**
 * When using variables the copy of the data is created that is why we see that any changes in one variable did not cause any changes in other variable
 */
// What is shallow copy ? 

let obj1 = {
    "name" : "Omkar"
}
// let user1 = Object.assign({} , obj1)
let user1 = {... obj1}

user1.name = "Bruce";

// console.log("The value of the object is --->",obj1 );


let obj2 = {
    name : "Peter",
    address : {
        city : "Pune" , 
        state : "UP"
    }
}

let user2 = {... obj2};
user2.address.city = "Chennai"
// console.log("The user is ---> ",obj2.address.city);


/**
 * Above is the limitation of JSON code with stringify
 */


// Deep copy  example. 

let obj3 = {
    name : "Omkar", 
    address : {
        city : "Pune" , 
        state : "UP"
    }, 
    getData : function(){
        return "This function not gonna get copied...";
    }
}
// const user3 = JSON.parse(JSON.stringify(obj3))
const user3 = user._cloneDeep(obj3)

user3.address.state = "Delhi";

console.log(obj3);
console.log(user3);
/**
 * Above way also has some limitations when we have some function or date in one object , when we make deep copy of that object , function or date will not be visible

    To overcome this issue, we can make use of lodash 
*/
