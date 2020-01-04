
// ES5

var a=25;

console.log(a);

function fun5(flg){
	if(flg){
		var name="apple";
		var roll="12"
	}


	console.log('Student name is '+name+' and roll is '+roll);
}


fun5(true);

// ES6

let age=28

const name="Pratik Kumar";

console.log(age);
console.log(name);


age=29;

// const variable can not be change
// name="sonu"

console.log(age);
console.log(name);



function fun6(flg){
const name="apple";
	if(flg){
		
		let roll="12"
	}

//roll variable has local scope so you can not use out side of if block.
	// console.log('Student name is '+name+' and roll is '+roll);
}

 fun6();