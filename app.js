// alert("hello")
// console.warn("this is warning")
// console.table({name:"gokul",age:22});
// var a=2;
// a=5;
// console.log(a);
// let num=10;
// console.log( typeof num);
// let t=true;
// let b=false;
// let c=20;
// console.log(t);
// console.log(b);
// console.log(c+NaN);
// console.log(c+undefined);
// console.log(10===10);
// console.log(10==='10');
// console.log(10!==11);
// console.log(10!==10);

// let firstName="hi";
// let secondName="       Gokul";
// console.log(firstName.concat(" "+secondName));
// firstName+="hello";
// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName.slice(0,4));
// console.log(secondName.split("u").join('u'));
// console.log(secondName.includes('o'));
// console.log(secondName.trim());
// console.log(`the
//     hii 
//     1
//     2
//     3`);
    let f="hello";
    let s="gokul";
    let m=`${f} ${s} is gokul`;
    console.log(m);
    //type conversion
    let a=10;
    a=String(a);
    console.log(a);
    console.log(typeof a);
    //conversion of String to integer;
    let b="10";
    b=parseInt(b);
    console.log(b);
    console.log(typeof b);
     //conversion of String to deicmal;
    let c="10.56";
    let d=parseFloat(c);
    console.log(d);
    console.log(typeof d);
//switch statement;
    let n=2;
    switch(n)
    {
        case 1:
            console.log("hii");
            break;
        case 2:
            console.log("hii"+2);
            break;
        case 3:
            console.log("hii3"+3);
            break;
        case 4:
             console.log("hii"+4);
             break;
        case 5:
             console.log("hii"+5);
            break;
        default:
            console.log("hii"+0)
            break;
    }

//conditional statement;
let n1=1;
let n2=2;
if(n1==2)
{
    console.log(n1);
    
}
else
{
    console.log(n2);
    
}
//forloops
for(let i=0;i<=2;i++)
{
    console.log("intro"+i);
    for(let j=0;j<3;j++)
    {
    console.log("inner"+j)
    }
    
}
//whileloop
let i=1;
while(i<10)
{
    console.log("hello"+i);
    i++;
    
}
//doWhileLoop
let j=1;
do{
    console.log("hoo"+j);
    j++;
}while(j<=10);
//logical operATORS
let password="gokul@sns123";
if(password.length>=8&&password.includes("sns"))
{
    console.log("pass is valid");
}
else{
    console.log("pass is  not valid");
    
}
let arr=[1,2,3,4,];
console.log(arr);
let str=['a','b','c'];
for(let i=0;i<str.length;i++)
{
    console.log(str[i]);
    
}


    






    







