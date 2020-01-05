//IIFEs and blocks

// ES5

 (function(){
 	var score=Math.random()*10;
 	console.log(score >= 5);
 }); 

 console.log(score);

// ES6
 {
 	let score=Math.random()*10;
 	console.log(score >= 5);
 }

 console.log(score);
 