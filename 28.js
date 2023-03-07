// Create a constructor function that satisfies the following conditions:

class Car{
    constructor(name,mileage,max_speed){
        this.name=name
        this.mileage=mileage
        this.max_speed=max_speed
    }
}

var obj=new Car("BMW",20,280)
console.log(obj);
