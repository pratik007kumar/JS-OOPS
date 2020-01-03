//function constructor

var Presion= function(name,age){
this.name=name;
this.age=age;
this.logName=function(){
console.log(this.name);
}
}

Presion.prototype.logAge=function(){
console.log(this.age);
}

var pratik=new Presion('pratik kumar',29);

pratik.logName();
pratik.logAge();

