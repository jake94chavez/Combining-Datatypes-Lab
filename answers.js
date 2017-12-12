// Morning lab
// Given, the following object, log the third element from the array
const fun = {
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
for (let value of container) {
	for (i = 0; i < container.length; i++) {
	console.log(value[i]);
	}
}







