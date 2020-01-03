// Callback function"



var years=[1908,1947,2008,2001,1999,1888];

function arrCal(arr,fun) {
	var returnArr=[];

	for(var i=0; i <arr.length;i++){
		returnArr.push(fun(arr[i]));
	}
	return returnArr;
}

function age(year) {
	return 2020-year;
}

ages=arrCal(years,age);

console.log(ages);


function canVote(age) {
 
	if(age>18){
		return true;
	}else{
		return -1;
	}

}

var voters= arrCal(ages,canVote);

console.log(voters);