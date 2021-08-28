class  Person  {
	constructor(name, race) {
		this.name = name,
		this.race =  race
	}

	greeting() {
		console.log('Hello my name is ' + this.name + ' and I am ' + this.race )
}

}
var  eddie = new Person('Eddie', 'white')


eddie.greeting()



