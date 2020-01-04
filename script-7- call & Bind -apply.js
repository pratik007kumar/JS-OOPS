
var pratik={
	name:'Pratik Kumar',
	age:29,

	greeting:function(style,daytime){

		if(style=='formal'){
			console.log('hi sir, Good '+daytime+'I am '+this.name);
		}
		if(style=='friendly'){
			console.log('hi whats up?, Good '+daytime+' I am '+this.name);
		}

	}
}

var uday={
name:'uday',
	age:22,

}


pratik.greeting('formal','Morning');
pratik.greeting.call(uday,'friendly','Morning');

var pratikfriendly=pratik.greeting.bind(pratik,'friendly');
pratikfriendly('Night')

var udayfriendly=pratik.greeting.bind(uday,'friendly');
udayfriendly('Night')