// Morning lab
// Given, the following object, log the third element from the array
/*const fun = {
    asdf: ["afd", "matt", 'sweet']
}
console.log(fun.asdf[2]);
// => Sweet

// Given, the following object, log the elbow property
const body = {
    arm: {
        elbow: 'pointy'
    }
};
console.log(body.arm.elbow);
// => pointy

// Given, the following object, call the jump method
const person = {
    jump(){
        console.log('fly!');
    }
};
person.jump();
// => fly!

// Create a data structure such that "console.log(myList[0].eyeColor);" logs the value "blue"
const myList = [{name: 'Hans', eyeColor: 'blue',}, {name: 'Jake', eyeColor: 'brown'}];
console.log(myList[0].eyeColor);

// Create a data structure such that "console.log(myArrays[2][4]);" logs the value "buy supplies"
const myArrays = [['banana', 'apple', 'orange'],
['carrots', 'celery', 'onions', 'pepper'],
['grocery', 'store', 'cart', 'shopping', 'buy supplies'],]
console.log(myArrays[2][4]);
// => buy supplies

// Call the function in the given code
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];
awesome[2]();
// => fun

// Loops over the following array, and print its values:
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
for (i = 0; i < refrigerator.fruits.length; i++) {
	console.log(refrigerator.fruits[i]);
}
// => apple, pear, banana

//Use two loops to loop over each array in the given "container" array
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];

// Challenge from Shahzad
for (let value of container) {
	for (i = 0; i < container.length; i++) {
	console.log(value[i]);
	}
}
*/


/////////////////
//Afternoon lab//
/////////////////

// 1. Log the following function"
//const foo = () => {
//	console.log('I have been invoked!');
//}

//foo();

// 2. Call `foo`, passing in a function
// const foo = (param) => {
// 	console.log(param);
// }

// console.log('banana');

// 3. Guess what this will log:
// const foo = (param, param2) => {
// 	param(param2);
// }

// const bar = (param) => {
// 	console.log(param);
// }

// log an error?
// foo(bar, 'hi');
// Nope. It just logged hi

// 4. Guess what this will log:
// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// foo(bar, 'hi');

// hello
// I was right this time!

// 5. Call the someMethod function, passing in myFunc. It should log About to invoke the callback and then I have been called!
// const foo = {
//     someMethod(callback){
//         console.log('About to invoke the callback');
//         callback();
//     }
// }

// const myFunc = () =>{
//     console.log('I have been called!');
// }

//foo.someMethod(myFunc);

// 6. Alter the following code so that myFunc properly logs the height property of foo
// Not exactly sure what this question is asking. Does it want myFunc to get height when called through someMethod? Or just on its own?
// const foo = {
//     height:5,
//     someMethod(callback){
//         callback();
//     }
// }

// // const myFunc = (param)=>{
// //     console.log(param);
// // }

// const myFunc = (param) => {
// 	console.log(param.height);
// }

// myFunc(foo);

// 7. Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string
const shirtColor = {
	color: ['red', 'blue', 'green', 'white', 'pink'],
	shirtMethod() {
		console.log(shirtColor.color.join());
	}
}

shirtColor.shirtMethod();

let wordReverse = (input) => {
	return input.split(' ').reverse().join(' ');
}

let toUpperCase = (input) => {
	return input.toUpperCase();
}

let repMaster = (input, func) => {
	console.log(func(input) + " proves that I am the rep MASTER!");
}

repMaster("Never give your heart to a blockead", wordReverse);
repMaster("I finished this practice", toUpperCase);

// 8. Fix the last line of this snippet so it logs this method was called:
const bar = {
    someMethod(param){
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

//bar.someMethod; //fix this line
bar.someMethod(foo.someMethod);




