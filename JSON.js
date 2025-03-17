const car={
    name:'gokul',
    age:22,
    model:2021,
    address:{
        doorno:30,
        location:"vavipalyam"
    },
    car:'celerio'
}
const a=JSON.stringify(car);
const b=JSON.parse(a);
console.log(b);
console.log(JSON.stringify(car))
