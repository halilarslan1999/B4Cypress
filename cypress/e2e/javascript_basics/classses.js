class Car{

constructor(carName,model,year){
this.carName=carName;
this.model=model;
this.year=year;
}

carAge(){

    let date=new Date;
    return date.getFullYear()-this.year
} }

var myCar=new Car("Seat","Leon", "2005");
console.log(myCar,carName,carAge);
console.log("My car age is ", myCar.carAge());


