
// function greet(name)
// {
//     console.log(`hello${name}`)
// }
// let name='gokul';
// greet(name);

// function add(x,y)
// {
//     const a=x+y;
//     return a;

// }

// const b=add(1,9);
// const c=add(10,90);
// const d=add(100,900);
// console.log(b);
// console.log(c);
// console.log(d);


//object constructor function

function car(c,n,m)
{
    this.car=c;
    this.name=n;
    this.model=m;

}

const car1=new car('toyato','gokul',2003);

//function expression
const hello=function(name)
{
    console.log(name);
    
}
 
hello("hii");
//callback function with passing another function inside
function show(name,cb)
{ 
    console .log (name)
    cb();

}
function cb()
{
    console.log("i am a call back function");
    
}

show("hello",cb)

//(or) another method fo call back function
function showed(fn)
{

console.log("hello");
const value=10
fn(value)
}

showed(function (value)
{
    console.log(value);
    
})
   
//methods inside the objects;
const per={
    name:"gokul",
    age:22,
    greet,

}
function greet()
{
    console.log(`hello i ma ${per.name} , my age is${per.age} `);
}
per.greet();
//or
const per1={
name1:'amal',
age1:'21',
greet:function()
{
    return`hello i ma ${per1.name1} , my age is${per1.age1} `;

},
}
console.log(per1.greet());