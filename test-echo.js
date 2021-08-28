class  Person  {
	constructor(name, race) {
		this.name = name,
		this.race =  race
	}

	greeting() {
		console.log('Hello my name is ' + this.name + ' and I am ' + this.race )
}

	introduce(person) {
		console.log(`Hello ${person} it is nice to meet you`)
	}

}
var  eddie = new Person('Eddie', 'white')
var joolie = new Person('Joolie', 'white')

eddie.greeting()
joolie.greeting()
eddie.introduce(joolie.name)	




