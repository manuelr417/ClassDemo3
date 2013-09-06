function Car(make, model, year, description, price){
	this.id = "";
	this.make = make;
	this.model = model;
	this.year = year;
	this.description = description;
	this.price = price;
	this.toJSON = toJSON;
}
