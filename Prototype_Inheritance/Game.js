/*Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.*/
function Vehicle(b,m,s,f){
    this.brand=b,
    this.model=m,
    this.speed=s,
    this.fueltype=f
}

/*Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

accelerate() should increase the speed of the vehicle.
brake() should decrease the speed.
refuel() should log a message indicating the vehicle is refueling.*/

Vehicle.prototype.accelerate=function(){
    this.speed++
}
Vehicle.prototype.break=function(){
    this.speed--
}
Vehicle.prototype.refule=function(){
    console.log("Vehicle is refuling")
}

/*Now, create a Car constructor function. The Car function should inherit properties and methods from the 
Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that 
logs a honking sound.*/

function Car(b,m,s,f,n){
    Vehicle.call(this,b,m,s,f)
    this.numberOfWheel=n
}

Car.prototype.honk=function(){
    console.log("sound honking")
}

//let car = new Vehicle("Tata",2023,200,"Diesel")
//console.log(car)

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
let tata = new Car("Tata",2023,200,"diesel",4)
tata.accelerate()
tata.honk()
console.log(tata)