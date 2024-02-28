// R-D : Rest operator is used in function declaration
// Rest operator.Rest of the elements in the function call will have rest operator.
function addNumbers(a,b,c,...other){
    return a+b+c+other;
}
const res = addNumbers(10,15,20,50,100);
// console.log("The result is ---> ",res);


// S-C: Spread operator is used in function call 
const names = ['Varad','Vaishnavi','Arjita','Omkar'];
function getNames(name1, name2, name3, name4){
    // console.log("My friends are ",name1, name2, name3, name4);
}
getNames(...names);


// Rest operator with objects 
let students = {
    name : "Omkar",
    age : 24,
    hobbies : ["Cricket , Basketball"],
    occupation : "Farmer"
}
const {name, ...restElements} = students;
console.log("The rest of the elements are --->",restElements);

// Spread operator with objects 
let newStudent = {
    ...students,
    age : "33"
}
console.log("The spread elements are ---> ",newStudent.name);