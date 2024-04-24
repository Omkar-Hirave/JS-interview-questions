const obj = new Object({
    name : "Omkar Hirave",
    roll : 54 , 
    getName : function(){
        return this.name
    },
    getRoll : function(){
        return this.roll
    }
})
// console.log("The name is ---> ",obj);

const obj2 = new Object({
    roll : 1 ,
    __proto__ : obj, 
    name : "Swaraj"
})
// console.log("The name is ---> ",obj2.getRoll());

const obj3 = new Object({
    class : "MCA",
    roll : 466 , 
    __proto__ : obj2
})
// console.log("The data is ---> ",obj3.getRoll());

const arr = ["Omkar" , "Swaraj" , ];

// Polyfill in JavaScript 
Array.prototype.show = function(){ 
    return this;
}
const cities = ["Delhi"]
console.log(cities.show());

Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach(element => {
        newObj[element] = element
    })
    return newObj
}

// console.log("The cities are ", cities.convertIntoObject());

// creating your own prototype

function MyPrototype(name , roll){
    this.name = name,
    this.roll = roll
}
const  myProto = new MyPrototype("Priyanka" , 34);
console.log(myProto); 

/*

 
  
 */
