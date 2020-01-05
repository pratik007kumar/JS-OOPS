
const years=[2010,2015,1999,1899,1888,2000];

// ES5

var ages=years.map(function(year){
	return 2020-year;
});

console.log(ages);

// ES6

let ages6=years.map(year=> 2020-year);

console.log(ages6);

ages6=years.map((year,index)=> `Age of  ${index+1} is ${2020-year}`);

console.log(ages6);

ages6=years.map((year,index)=> {
	const now= new Date().getFullYear();
	const age=now-year;
	return	`Age of  ${index+1} is ${age}`;
});

console.log(ages6);
