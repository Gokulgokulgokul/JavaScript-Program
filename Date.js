const date=new Date();
console.log(date);

const a=date.getDate();
console.log(a);
const b=date.getMonth()
console.log(b);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString())
date.setDate(date.getDate()+1);
console.log(date);

//settting date
const date1=new Date(2024,3,25,12,30,25,23);
console.log(date1)
console.log(date1.getMonth())
date1.setDate(date1.getDate()+1)
console.log(date1);







const per={
    name:"gokul",
    age:20
}
console.log(per.age)

function show(name,cb)
{
    console.log(name)
    let age=12
    cb(age)
}

show("jhon",function (age)
{
    console.log("i ma calllback function "+age);
})

const car=
{
    name:"gokul",
    age:20,
  
    greet:function()
    {
    return `helloooooooooooooooooooooooo ${car.name}`;

    }
}

console.log(car.greet());
 const obj=function(name,age)
 {
    console.log(name,age);
 }
 obj("hello",23)


 const gok=
 {
    name:"amal",
    age:21,
    location:'cbe',
    arr:["hiii","hello"],
    adress:{
        doorno:79,
        place:'coimbatore'
    },
    call:true
 }
  const a4=JSON.stringify(gok);
  const b3=JSON.parse(a4);
console.log(b3);


const d=new Date();
console.log(d);
d.setDate(d.getDate()+1);
console.log(d);
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.toDateString())
const obj1={
    name:"suriya",
    age:49
}
const a2=obj1['age'];
console.log(a2);