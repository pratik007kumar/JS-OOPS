// . Primitives vs. Objects


var a=15;
var b=a;
a=35;
//value is bind to variables 
console.log(a);

var obj1={ 
	name:'pratik', 
	age :"29",
}

var obj2=obj1;

obj1.age=35;
//value are link to object
console.log(obj2);
