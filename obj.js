const car={
name:"gokul",
carName:"celerio",
carBrand:"suzuki",
carColour:"silver",
carWheels:4

};
car.Model="2021";
console.log(car);
console.log(typeof car)
console.log(car["carBrand"]);
car.carColour="silver and white";
console.log(car);


function car(n,m,h)
{
    this.name=n;
    this.month=m;
    this.hour=h;

}
const car=new car('hi',21,30);
console.log(car.name);
