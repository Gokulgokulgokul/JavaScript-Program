let arr=[1,2,3,4];
console.log(arr.length);
//nested array
let arr1=['java',['h','j'],'hello',true,1]
console.log(arr1);
console.log(arr1[1][0]);
//methods of arrays
const array=[
    "gokul",
    "amal",
    "abu",
]
array.push("abi")
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift("gowtham");
console.log(array);
const total=array.concat(arr);
console.log(total);
const pl=["java","js","python"];
const n=[1,2,5,4,3];

console.log(pl.join("-"));
console.log(n.reverse());
console.log(n.sort());
console.log(n.slice(0,4))
let a=n.includes(1);
console.log(a);
console.log("hello");

let ab=[['helo','hii'],['hum','hun']];
for(let i=0;i<ab.length;i++)
{
    for(let j=0;j<ab[i].length;j++)
    {
        console.log(ab[i][j]);
    }
}
