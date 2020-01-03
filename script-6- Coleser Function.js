
function retirement(retirementAge){

	var a=" Years left to Retirement";

	return function(birthyear){
		var age=2019-birthyear;
		console.log((retirementAge-age)+a);
	}
}

var india=retirement(60);

india(1990);

var usa=retirement(65);
usa(2000);

retirement(30)(2010);
