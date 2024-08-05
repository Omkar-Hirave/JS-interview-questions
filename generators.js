function* generatorFunction(){
    yield 'First Value'
    console.log("Second Value - first console")
    console.log("Second Value - Second console")
    yield 'Second Value'
    yield 'Third Value'
}

const generator = generatorFunction();

// Infinite Sequence Generator : 
function* infiniteNumber(){
    let i = 0 ;
    while(true){
        yield i++;
    }
}

const numbers = infiniteNumber();
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)



/**
 1 . Generators are special type of functions that can be paused and resumed , allowing them to produce sequence of values over time , rather than computing 
 them all at once and then sending them back like normal functions.
 2 . This makes it useful for tasks such as performing iteration ,  asynchronous programming and handling infinite sequences.
 */