//  function return function


function intreviewQuesrtion(job) {
	
	if (job=='dev') {
		return function (name) {
			console.log("hi "+ name+", Which is your favorite Programming Language?");
		}
	}else {
		return function (name) {
			console.log("hi "+ name+", tell me about Your self? ");
		}
	}

}


var devQuestion=intreviewQuesrtion('dev');
	
	devQuestion('pratik');
	devQuestion('Uday');
	devQuestion('Arti');

intreviewQuesrtion('mango')('Ram');

intreviewQuesrtion('dev')('Sonu');